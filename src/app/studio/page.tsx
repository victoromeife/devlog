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
    <div className="studio-page">
      <header className="studio-hero">
        <div className="studio-hero__copy">
          <p className="eyebrow">Writing workspace / Studio</p>
          <h1>Turn a rough note into a journal entry.</h1>
          <p>
            Add the details, write in Markdown, then download the finished file
            for <code className="inline-code">src/content/</code>. No CMS and no
            extra publishing layer.
          </p>
        </div>
        <div className="studio-file">
          <span>Suggested file</span>
          <strong>{slug}.md</strong>
          <p>Ready to download when the note is finished.</p>
        </div>
      </header>

      <div className="studio-grid">
        <section className="studio-panel">
          <div className="studio-panel__heading">
            <span>01</span>
            <div>
              <p className="eyebrow">Entry details</p>
              <h2>Shape the note</h2>
            </div>
          </div>

          <div className="studio-panel__body">
            <div className="studio-fields">
              <label className="studio-field">
                Title
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Lessons from shipping my latest build"
                  className="studio-input"
                />
              </label>
              <label className="studio-field">
                Date
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="studio-input"
                />
              </label>
              <label className="studio-field">
                Reading time
                <input
                  value={readingTime}
                  onChange={(event) => setReadingTime(event.target.value)}
                  placeholder="4 min read"
                  className="studio-input"
                />
              </label>
              <label className="studio-field">
                Category
                <input
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  placeholder="Learnings"
                  className="studio-input"
                />
              </label>
            </div>
            <label className="studio-field">
              Excerpt
              <textarea
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                rows={3}
                placeholder="A short hook that appears on the home page and entry header."
                className="studio-input"
              />
            </label>
            <label className="studio-field">
              Tags (comma separated)
              <input
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                placeholder="nextjs, typescript, lessons"
                className="studio-input"
              />
            </label>
            <label className="studio-field">
              Content (Markdown)
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                rows={14}
                className="studio-input studio-input--content"
              />
            </label>
            <div className="studio-actions">
              <button
                type="button"
                onClick={download}
                className="studio-button studio-button--primary"
              >
                Download {slug}.md
              </button>
              <button
                type="button"
                onClick={copy}
                className="studio-button"
              >
                Copy markdown
              </button>
            </div>
          </div>
        </section>

        <section className="studio-panel studio-panel--preview">
          <div className="studio-panel__heading">
            <span>02</span>
            <div>
              <p className="eyebrow">File preview</p>
              <h2>Check the output</h2>
            </div>
          </div>
          <div className="studio-panel__body">
            <p className="studio-path">src/content/{slug}.md</p>
            <pre className="studio-preview">
              <code>{markdown}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
