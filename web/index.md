---
theme: ['parchment', 'midnight', wide]
toc: false
sidebar: false
date: 15-05-2024
index: false
---

<style>
#observablehq-center > main {
    margin-left: auto;
    margin-right: auto;
}

#observablehq-center > main {
    width: 100%;
}

#observablehq-header > nav > a, #observablehq-footer {
    margin-left: 1rem;
}

#observablehq-header > nav > div, #observablehq-footer {
    margin-right: 1rem;
}

@media (min-width: 640px) {
    #observablehq-center > main {
        max-width: 640px;
    }
    #observablehq-header > nav > a, #observablehq-footer {
         margin-left: 0;
    }
    #observablehq-header > nav > div, #observablehq-footer {
        margin-right: 0;
    }
}
@media (min-width: 768px) {
    #observablehq-center > main {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    #observablehq-center > main {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    #observablehq-center > main {
        max-width: 1280px;
    }
}
@media (min-width: 1536px) {
    #observablehq-center > main {
        max-width: 1536px;
    }
}

#observablehq-center {
    margin-left: 0px !important;
    margin-right: 0px !important;
}


</style>


```js
import article from "./components/article.js"
```


```js
const posts = await FileAttachment("/data/randomposts.json").json()
```


```js
var {image, description, title, url, author} = posts[0]
console.log(image)
display(html`
    <div id="Hero" class="flex flex-col -mt-4 text-center gap-y-4 sm:gap-y-0 gap-x-12 md:flex-row md:text-left">
        <a href="${url}" class="w-full md:order-2 ">
         <img src="${image}" class="w-full h-[50svh] md:max-h-[70svh] " alt="">
        </a>
        <div class="px-2 my-auto sm:px-0">
            <a href="${url}">
              <h1 class="mt-0 leading-[90%] lg:text-6xl text-4xl md:text-5xl text-pretty text-fg-focus capitalize">${title}</h1>
           </a>
            <p class="text-balance">${description}</p>
            <p class="italic text-fg-muted">Por ${author}</p>
        </div>
    </div>
`)  
```
<h2 class="w-full pl-2">Articulos</h2>

```js
display(html`<div class="grid grid-cols-1 !gap-10 lg:grid-cols-2 lg:!gap-x-12 lg:!gap-y-16  auto-rows-min ">
    ${posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(1, 7).map(post => article(post))}
</div>`)
```
