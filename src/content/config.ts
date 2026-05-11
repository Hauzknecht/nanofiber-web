import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title:           z.string(),
  date:            z.date(),
  excerpt:         z.string(),
  tag:             z.string(),
  author:          z.string().default('Jana Nováková'),
  draft:           z.boolean().default(false),
  coverImage:      z.string().optional(),
  // Slug of the matching post in the other language (optional)
  translationSlug: z.string().optional(),
});

const blogEn = defineCollection({ type: 'content', schema: blogSchema });
const blogCs = defineCollection({ type: 'content', schema: blogSchema });

export const collections = {
  'blog-en': blogEn,
  'blog-cs': blogCs,
};
