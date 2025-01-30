import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const aboutMeCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/about-me" }),
	schema: z.object({
		title: z.string(),
		keywords: z.string().array(),
	}),
});

const aboutPortfolioCollection = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.md",
		base: "./src/content/about-portfolio",
	}),
	schema: z.object({
		title: z.string(),
		keywords: z.string().array(),
	}),
});

const worksCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/works" }),
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
