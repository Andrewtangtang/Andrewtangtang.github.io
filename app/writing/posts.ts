import queryConditionCache from "../../content/writing/query-condition-cache.md?raw";

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  status: string;
  repository?: string;
  repositoryImage?: string;
  repositoryDescription?: string;
  heroImage?: string;
  heroImageAlt?: string;
  socialImage?: string;
  content: string;
};

const sources = [
  ["query-condition-cache", queryConditionCache],
] as const;

function parseFrontmatter(source: string) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) throw new Error("Writing posts must start with YAML frontmatter.");

  const data: Record<string, string | string[]> = {};
  let activeList: string[] | null = null;
  for (const line of match[1].split("\n")) {
    const listItem = line.match(/^\s+-\s+["']?(.*?)["']?\s*$/);
    if (listItem && activeList) {
      activeList.push(listItem[1]);
      continue;
    }
    const field = line.match(/^([\w-]+):\s*(.*)$/);
    if (!field) continue;
    const [, key, rawValue] = field;
    if (!rawValue.trim()) {
      activeList = [];
      data[key] = activeList;
      continue;
    }
    activeList = null;
    data[key] = rawValue.trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return { data, content: match[2] };
}

export const posts: WritingPost[] = sources.map(([slug, source]) => {
  const parsed = parseFrontmatter(source);
  return {
    slug,
    title: String(parsed.data.title),
    description: String(parsed.data.description),
    date: String(parsed.data.date),
    author: String(parsed.data.author),
    tags: Array.isArray(parsed.data.tags) ? parsed.data.tags.map(String) : [],
    readTime: String(parsed.data.readTime),
    status: String(parsed.data.status),
    repository: parsed.data.repository ? String(parsed.data.repository) : undefined,
    repositoryImage: parsed.data.repositoryImage ? String(parsed.data.repositoryImage) : undefined,
    repositoryDescription: parsed.data.repositoryDescription ? String(parsed.data.repositoryDescription) : undefined,
    heroImage: parsed.data.heroImage ? String(parsed.data.heroImage) : undefined,
    heroImageAlt: parsed.data.heroImageAlt ? String(parsed.data.heroImageAlt) : undefined,
    socialImage: parsed.data.socialImage ? String(parsed.data.socialImage) : undefined,
    content: parsed.content,
  };
});

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
