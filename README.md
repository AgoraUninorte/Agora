# Agora

Este es el repositorio de la página web oficial del Grupo Estudiantil Ágora. Donde nos reunimos los estudiantes apasionados por entender los flujos de la economía.

En este repositorio encontraran el código que construye el sitio junto con los artículos. El sitio esta hecho con [Observable Framework](https://observablehq.com/framework). Si estas desarrollando _google idx_ el servidor de desarrollo se iniciara automáticamente, si estas un entorno de desarrollo local corre:

```
bun dev
```

Si estas

Luego visita <http://localhost:3000> para ver el proyecto.


## Estructura del Proyecto
Los nuevos articulos se deben crear en la carpeta `src` y las imagenes de esos articulos en la carpeta `src/images`, esas imagenes se deben referenciar en los articulos usando la nomenclatura de markdown `![](/images/agorabanner.jpg)`.

```ini
.
├─ src
│  ├─ components
│  │  └─ timeline.js           # an importable module
│  ├─ data
│  │  ├─ launches.csv.js       # a data loader
│  │  └─ events.json           # a static data file
│  ├─ images
│  │  ├─ agorabanner.jpg     # a data loader
│  ├─ input.css     # Global css styles
│  ├─ tailwind.css   # Builded and bundled global css styles
│  ├─ article.md        # An Article
│  ├─ sobre-nosotros.md        # about page
│  ├─ contactanos.md        # contact page
│  ├─ blog.md        # all articles page
│  └─ index.md                 # the home page
├─ observablehq.config.js      # the project config file
├─ tailwind.config.js      # Tailwindcss configuration File
├─ moveImages.js      # Script for moving images to the end route
├─ package.json
└─ README.md
```

**`src`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`src/index.md`** - This is the home page for your site. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`src/data`** - You can put [data loaders](https://observablehq.com/framework/loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`src/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/javascript/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.js`** - This is the [project configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the project’s title.

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `bun install`            | Install or reinstall dependencies                        |
| `bun dev`        | Start local preview server                               |
| `bun run build`      | Build your static site, generating `./dist`              |
| `bun run deploy`     | Deploy your project to Observable                        |
| `bun clean`      | Clear the local data loader cache                        |
| `bun styles`      | Run the styles on development mode                      |
| `bun styles:build`      | Build the css styles                    |
| `bun observable` | Run commands like `observable help`                      |
