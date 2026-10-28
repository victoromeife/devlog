export type Entry = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  tags: string[];
  content?: string;
};

export type EntryDraft = Entry & {
  content: string;
};
