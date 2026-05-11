import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title:           z.string(),
  date:            z.date(),
  excerpt:         z.string(),
  tag:             z.string(),
  author:          z.string().default('Martina Říhová'),
  draft:           z.boolean().default(false),
  coverImage:      z.string().optional(),
  translationSlug: z.string().optional(),
});

// Simple publication schema — CMS-driven
const publicationSchema = z.object({
  title:    z.string(),
  authors:  z.string(),
  year:     z.number(),
  abstract: z.string().optional(),
  url:      z.string().optional(),
});

export const collections = {
  'blog-en':      defineCollection({ type: 'content', schema: blogSchema }),
  'blog-cs':      defineCollection({ type: 'content', schema: blogSchema }),
  'publications': defineCollection({ type: 'data',    schema: z.array(publicationSchema) }),
};
