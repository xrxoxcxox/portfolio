import { z, defineCollection } from "astro:content";

const aboutMeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      sort: z.number(),
    }),
});

export const collections = {
  "about-me": aboutMeCollection,
  works: worksCollection,
};
