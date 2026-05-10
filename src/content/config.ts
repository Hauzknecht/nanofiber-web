import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    excerpt:     z.string(),
    tag:         z.string(),
    author:      z.string().default('Jana Nováková'),
    draft:       z.boolean().default(false),
    coverImage:  z.string().optional(),
  }),
});

export const collections = { blog };
