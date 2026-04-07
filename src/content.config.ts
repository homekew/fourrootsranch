import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroKicker: z.string().optional(),
    heroSummary: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional()
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  pages,
  news
};
