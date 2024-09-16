---
title: Articulos del blog de agora
author: Arturo Rebolledo
image: /images/agorabanner.jpg
description: Articulo del blog del grupo economico de agora
date: 15/05/2024
index: false
toc: false
---

```js
const generated = await FileAttachment("/data/posts.json").json()
const posts = generated
```

# Todos Los Articulos


```js
import article from "./components/article.js"
```

```js
display(html`<div class="grid grid-cols-1 !gap-10 lg:grid-cols-2 lg:!gap-x-12 lg:!gap-y-16  auto-rows-min ">
    ${posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => article(post))}
</div>`)
```