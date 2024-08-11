---
index: false
toc: false
---

## Quienes Somos

Somos un grupo que busca fomentar y difundir ampliamente el debate y el pensamiento crítico acerca de los fenómenos políticos, económicos y sociales que se presentan en Colombia, la región y el mundo, mediante cualquier medio creativo e innovador que esté a disposición de la organización. En especial, potenciar las habilidades escritas de los estudiantes. Nuestro propósito es crear espacios que fomenten la construcción de propuestas activas en pro de la formación académico y su impacto social. Por ello, los miembros de este equipo nos esforzamos por convocar a estudiantes, profesores, directivas y expertos a eventos diversos, entorno a temáticas sociales y económicas vistas desde distintas perspectivas abriendo espacio a la opinión y debate.

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
    ]
display(html`<div class="grid grid-cols-2 !gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:!gap-x-12 lg:!gap-y-16">
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