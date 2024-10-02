<script>
    let { title, desc, btnHref, btnText, media, CMS_URL } = $props()
</script>

{#snippet mediaElement(content)}
    <a href={'/media/' + content.seo.slug} class="flex flex-col gap-4 flex-shrink-0 flex-grow-0 max-sm:w-2/3">
        <img class="rounded" src={CMS_URL + content.thumbnail.url} alt={content.thumbnail.alternativeText}>
        <p class="text-lg">{content.title}</p>
    </a>
{/snippet}

<section>
    <div class="container">
        <div class="flex flex-col gap-8 max-sm:gap-6">
            <h4 class="text-5xl max-lg:text-3xl">{title}</h4>
            <div class="flex flex-col gap-6">
                <p class="w-1/3 max-lg:w-1/2 max-sm:w-full">{desc}</p>
                <a href={btnHref} class="btn">{btnText}</a>
            </div>
            <div class="grid grid-cols-3 gap-4 no-scrollbar mt-8  max-sm:flex max-sm:overflow-x-auto">
                {#each media as el, i}
                    {@render mediaElement(el)}
                {/each}
            </div>
        </div> 
    </div>
</section>