import { z, defineCollection } from "astro:content";

const aboutMeCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		keywords: z.string().array(),
	}),
});

const aboutPortfolioCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		keywords: z.string().array(),
	}),
});

const worksCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			cover: image(),
			keywords: z.string().array(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			excerpt: z.string(),
		}),
});

export const collections = {
	"about-me": aboutMeCollection,
	"about-portfolio": aboutPortfolioCollection,
	works: worksCollection,
};
