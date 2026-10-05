import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Entry } from "./types";

const contentDirectory = path.join(process.cwd(), "src/content")

export function getAllEntries(): Entry[] {
    const fileNames = fs.readdirSync(contentDirectory);

    const entries = fileNames
        .filter((file) => file.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                readingTime: data.readingTime,
                category: data.category,
                excerpt: data.excerpt,
                tags: data.tags || [],
            } as Entry;
        });

    // Sort by date (newest first)
    return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEntryBySlug(slug: string) {
    const fullPath = path.join(contentDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        readingTime: data.readingTime,
        category: data.category,
        excerpt: data.excerpt,
        tags: data.tags || [],
        content, // the actual markdown body
    };
}

export function getAdjacentEntries(currentSlug: string) {
  const entries = getAllEntries();
  const currentIndex = entries.findIndex((entry) => entry.slug === currentSlug);

  const previous = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : null;
  const next = currentIndex > 0 ? entries[currentIndex - 1] : null;

  return { previous, next };
}


