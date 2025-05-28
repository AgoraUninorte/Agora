import { glob, file } from 'astro/loaders';
import { imageConfig } from 'astro:assets';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string().optional(),
		toc: z.boolean().optional(),
		category: z.string().optional(),
		index: z.boolean().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
	}),
});

const juntaDirectiva = defineCollection({
	loader: file("./src/junta.json"),
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
		title: z.string(),
		image: z.string(),
	})
})

const revistas = defineCollection({
	loader: file("./src/revistas.json"),
	schema: z.object({
		Link: z.string().optional(),
		image: z.string(),
	})
})

export const collections = { blog, juntaDirectiva, revistas };
