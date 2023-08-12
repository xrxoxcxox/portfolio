import { z, defineCollection } from "astro:content";

const aboutMeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  "about-me": aboutMeCollection,
};
