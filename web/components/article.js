import { html } from "npm:htl";

export default function article({ title, description, image, url, author, date = "2024-11-25T00:00:00.000Z", category }) {
    return html.fragment`
    <article class="basis-1 group duration-200  hover:bg-bg-alt  transition-all hover:shadow-xl lg:basis-[45%] flex flex-col md:flex-row gap-3 md:max-w-2xl ">
        <a href="${url}" class="w-full h-full mx-auto md:w-1/2 overflow-clip">
            <img src="${image}" alt="nope" class="group-hover:saturate-200  transition-all group-hover:scale-95 ease-out !max-w-5xl mx-auto w-full h-full duration-700  aspect-video  " />
        </a>
        <div class="flex flex-col basis-1/2 mx-2 md:mx-0 sm:py-2">
            <div class="flex flex-row gap-2 font-light text-sm align-middle text-fg-faint ">
                ${category ? html.fragment`<span class="uppercase tracking-widest">${category}</span> &#9830;` : ''}
                <span>${new Date(date).toLocaleDateString('es-CO', {year: 'numeric', month: 'short', day: 'numeric'})}</span> 
            </div>
            <a href="${url}" class="my-2">
            <h3 class="group-hover:text-fg-focus text-fg leading-[95%] transition-colors duration-200 tracking-wide">${title}</h3>
            </a>
            <p class="text-fg-muted p-0 m-0 ">${description}</p>
            <p class="italic p-0 mb-0 max-w-xl text-fg-faint sm:mt-auto group-hover:text-fg mt-4 ">Por ${author}</p>
        </div>
    </article>
  `
}