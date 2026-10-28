"use client";

import { useMemo, useState } from "react";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function todayISO() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

export default function StudioPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(todayISO());
  const [readingTime, setReadingTime] = useState("3 min read");
  const [category, setCategory] = useState("Learnings");
  const [excerpt, setExcerpt] = useState("");
  const [tags, setTags] = useState("buildinpublic, learning");
  const [content, setContent] = useState(
    "### 01 // Context\n\nWhat were you working on?\n\n### 02 // Problem\n\nWhat broke or challenged you?\n\n### 03 // Solution & Lessons\n\nWhat did you learn or ship?"
  );

  const slug = useMemo(() => slugify(title) || "untitled-entry", [title]);

  const tagsArray = useMemo(
    () =>
      tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    [tags]
  );

  const markdown = useMemo(() => {
    const tagsLine =
      tagsArray.length > 0 ? `tags: [${tagsArray.map((t) => `"${t}"`).join(", ")}]` : 'tags: []';

    return `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
readingTime: "${readingTime.replace(/"/g, '\\"')}"
category: "${category.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
${tagsLine}
---

${content.trim()}\n`;
  }, [title, date, readingTime, category, excerpt, tagsArray, content]);

  const download = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/18 blur-[160px]" />
        <div className="pointer-events-none absolute -right-28 -top-36 h-72 w-72 rounded-full bg-sky-400/16 blur-[150px]" />
        <div className="relative flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Studio
          </p>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Write a new DevLog entry without creating files by hand.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-300">
              Fill the form below, download the Markdown with correct frontmatter,
              and drop it into <code className="rounded bg-white/10 px-1.5 py-0.5">src/content/</code>.
              The site reads it directly — no backend needed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
              Suggested filename:
              <span className="text-white">{slug}.md</span>
            </span>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-white">Entry details</h2>
              <p className="text-sm text-neutral-400">
                Frontmatter used by the site.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                Title
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Lessons from shipping my latest build"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                Date
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                Reading time
                <input
                  value={readingTime}
                  onChange={(event) => setReadingTime(event.target.value)}
                  placeholder="4 min read"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                Category
                <input
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  placeholder="Learnings"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-neutral-300">
              Excerpt
              <textarea
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                rows={3}
                placeholder="A short hook that appears on the home page and entry header."
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-300">
              Tags (comma separated)
              <input
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                placeholder="nextjs, typescript, lessons"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition focus:border-indigo-400/70"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-300">
              Content (Markdown)
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                rows={14}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm text-white outline-none transition focus:border-indigo-400/70"
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={download}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/20"
              >
                Download {slug}.md
              </button>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                Copy markdown
              </button>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-white">Preview</h2>
                <p className="text-sm text-neutral-400">
                  Exact output written to the file.
                </p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                src/content/{slug}.md
              </span>
            </div>
            <pre className="max-h-[720px] overflow-auto rounded-2xl border border-white/10 bg-black/40 p-6 text-xs leading-relaxed text-neutral-200">
              <code>{markdown}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
