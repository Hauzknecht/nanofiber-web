import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'
import { glob, file } from 'astro/loaders';

const blogSchema = z.object({
  title:           z.string(),
  date:            z.coerce.date(),
  excerpt:         z.string(),
  tag:             z.string(),
  author:          z.string().default('Martina Říhová'),
  draft:           z.boolean().default(false),
  coverImage:      z.string().optional(),
  translationSlug: z.string().optional(),
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: blogSchema,
});

const blogCs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-cs' }),
  schema: blogSchema,
});

const publications = defineCollection({
  loader: file('./src/content/publications/publications.json', {
    parser: (text) => {
      const { publications } = JSON.parse(text);
      return publications;  // flat array, each item must have id
    },
  }),
  schema: z.object({
    id:       z.string(),
    title:    z.string(),
    authors:  z.string(),
    year:     z.number(),
    abstract: z.string().optional(),
    url:      z.string().optional(),
  }),
});

export const collections = { 'blog-en': blogEn, 'blog-cs': blogCs, publications };