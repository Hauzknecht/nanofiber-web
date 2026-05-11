import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'

const blogSchema = z.object({
  title:           z.string(),
  date:            z.coerce.date(), // coerce handles both Date and "YYYY-MM-DD" strings
  excerpt:         z.string(),
  tag:             z.string(),
  author:          z.string().default('Martina Říhová'),
  draft:           z.boolean().default(false),
  coverImage:      z.string().optional(),
  translationSlug: z.string().optional(),
});

const publicationSchema = z.object({
  publications: z.array(z.object({
    title:    z.string(),
    authors:  z.string(),
    year:     z.number(),
    abstract: z.string().optional(),
    url:      z.string().optional(),
  })),
});

export const collections = {
  'blog-en':      defineCollection({ type: 'content', schema: blogSchema }),
  'blog-cs':      defineCollection({ type: 'content', schema: blogSchema }),
  'publications': defineCollection({ type: 'data',    schema: publicationSchema }),
};
