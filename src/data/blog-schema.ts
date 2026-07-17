import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export async function getAllArticles(): Promise<BlogEntry[]> {
  const articles = await getCollection('blog');
  return articles.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getArticleBySlug(slug: string): Promise<BlogEntry | undefined> {
  const articles = await getCollection('blog');
  return articles.find((article) => article.id === slug);
}

export async function getAllTags(): Promise<string[]> {
  const articles = await getCollection('blog');
  const tagSet = new Set<string>();
  for (const article of articles) {
    for (const tag of article.data.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}

export async function getArticlesByTag(tag: string): Promise<BlogEntry[]> {
  const articles = await getCollection('blog');
  return articles
    .filter((article) => article.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function unslugifyTag(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
