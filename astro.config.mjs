// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import rehypeKatex from 'rehype-katex'
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  integrations: [mdx({
    remarkPlugins: [remarkMath], // relevant
    rehypePlugins: [rehypeKatex] // relevant
  }), , sitemap(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});