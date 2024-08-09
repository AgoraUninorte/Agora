// See https://observablehq.com/framework/config for documentation.
import fs from 'fs';
console.log(fs.readFileSync('./web/components/header.html', 'utf8'));
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Agora",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {name: "El Amargo Sinsabor del Azúcar", path: "/el-amargo-sinsabor-del-azucar"},
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  //head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  // The path to the source root.
  root: "web",
  interpreters: {
    ".js": ["bun"],
    ".cjs": ["bun"]
  },
  head: fs.readFileSync('./web/components/head.html', 'utf8'),
  // Some additional configuration options and their defaults:
  theme: ["parchment", "coffee"], // try "light", "dark", "slate", etc.
  header: fs.readFileSync('./web/components/header.html', 'utf8'), // what to show in the header (HTML)
  footer: fs.readFileSync('./web/components/footer.html', 'utf8'), // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  cleanUrls: true, // drop .html from URLs
};
