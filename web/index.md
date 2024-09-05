---
theme: [parchment, coffee, wide]
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
    margin-left: 0.5rem;
}

#observablehq-header > nav > div, #observablehq-footer {
    margin-right: 0.5rem;
}

@media (min-width: 640px) {
    #observablehq-center > main, footer, nav {
        max-width: 85vw;
    }
    #observablehq-header > nav > a, #observablehq-footer {
    margin-left: 0;
}

    #observablehq-header > nav > div, #observablehq-footer {
        margin-right: 0;
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
const randomPosts = await FileAttachment("/data/randomposts.json").json()
```

```js
const genPosts = await FileAttachment("/data/posts.json").json()
const posts = genPosts.concat(randomPosts)
```



```js
var {image, description, title, url, author} = posts[0]
console.log(image)
display(html`
    <div id="Hero" class="flex flex-col -mt-4 text-center gap-y-4 sm:gap-y-0 md:justify-between md:flex-row md:text-left">
        <a href="${url}" class="w-full md:order-2  md:max-w-[30vw] lg:max-w-[40vw] ">
         <img src="${image}" class="w-full h-[50svh] md:max-h-[70svh]  object-cover object-center" alt="">
        </a>
        <div class="px-2 my-auto sm:px-0">
            <a href="${url}">
              <h1 class="mt-0 leading-[90%] lg:text-6xl text-4xl md:text-5xl text-pretty text-fg-focus font-bold">${title}</h1>
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


<h2 class="mt-12 pl-2">Junta Directiva 2024</h2>

```js
const members = [{
        name: 'Daniel Acevedo Dumar',
        title: 'Presidente',
        // description: '"En este año 2024, mi compromiso como Presidente de Ágora es impulsar un espacio de innovación y colaboración, donde cada voz sea escuchada y cada idea tenga el potencial de convertirse en acción."',
        image: await FileAttachment('/images/Daniel.jpg').url(),
    },
    {
        name: 'Allison Ramirez',
        title: 'Vicepresidenta y Directora de Revista',
        // description: '"En este año 2024, me enfocaré en mantener la excelencia editorial y brindarles a los estudiantes la oportunidad de publicar sus investigaciones, análisis y opiniones sobre temas económicos relevantes. La revista es un espacio para que compartan su talento y creatividad y para que sus ideas tengan un impacto en la comunidad"',
        image: await FileAttachment('/images/Allison.jpeg').url(),
    },
    {
        name: 'Guillermo Villadiego',
        title: 'Tesorero',
        description: '',
        image: await FileAttachment('/images/Guillermo.jpg').url(),
    },
    {
        name: 'Dana Ramirez',
        title: 'Subdirectora Académica',
        description: '',
        image: await FileAttachment('/images/Dana.jpg').url(),
    },
    {
        name: 'Cristian Palmera',
        title: 'Director de Logistica',
        description: '',
        image: await FileAttachment('/images/Cristian.jpg').url(),
    },
    {
        name: 'Ana María Llinás',
        title: 'Directora de Comunicaciones',
        description: '',
        image: await FileAttachment('/images/Ana.jpg').url(),
    },
    ]
display(html`<div class="grid grid-cols-2 !gap-x-10  sm:grid-cols-3 lg:grid-cols-5 lg:!gap-x-12 lg:!gap-y-8">
    ${members.map((member, id) => html.fragment`
        <article class="w-full text-center group hover:bg-bg-alt hover:shadow-xl ">
            <img src="${member.image}" class="w-[inherit] group-hover:saturate-200 transition-all group-hover:scale-95 ease-out duration-700"/>
            <h3 class="group-hover:text-fg-focus">${member.name}</h3>
            <b>${member.title}</b>
            <p>${member.description}</p>
         </article>
         `)}
</div>`)
```

## Revista
```html
<div class="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-[repeat(13,_minmax(0,_1fr))]">
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-2.jpg').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-3.jpg').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-4.jpg').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-5.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-6.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-7.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-8.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-9.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-10.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-11.png').url()}" />
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-12.png').url()}" />
    <a href="https://www.uninorte.edu.co/documents/16886152/16893875/Revista+Agora+13va+edicion.pdf/7cebd1fc-0fc3-b18b-3a81-8d22c5add22a?t=1652803650939">
        <img class="w-full" src="${await FileAttachment('/images/agora-edicion-13.png').url()}" />
    </a>
    <img class="w-full" src="${await FileAttachment('/images/agora-edicion-14.jpeg').url()}" />
</div>
```