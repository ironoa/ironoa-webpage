import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO date
    draft: z.boolean().optional(),
  }),
});

export const collections = { news };
