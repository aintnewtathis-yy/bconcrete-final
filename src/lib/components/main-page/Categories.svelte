<script>
    let {categories, CMS_URL} = $props()
</script>

{#snippet card(content)}
    <a href={'/catalog?filter=' + content.url} class="flex flex-col gap-4 group/item max-lg:flex-shrink-0 max-lg:flex-grow-0 max-lg:w-5/12 max-sm:w-2/3 max-sm:gap-3 ">
        <div class=" overflow-hidden rounded">
            <img 
            src={CMS_URL + content.thumbnail.formats.large.url} 
            alt={content.thumbnail.alternativeText}
            width={content.thumbnail.formats.large.width} 
            height={content.thumbnail.formats.large.height}>
        </div>
        <p class="text-xl transition group-hover/item:opacity-70 ">{content.title}</p>
    </a>
{/snippet}

<section>
    <div class="container">
        <div class="grid grid-cols-5 gap-x-4 no-scrollbar max-lg:overflow-x-auto max-lg:flex">
            {#each categories as cardContent}
                {@render card(cardContent)}
            {/each}
        </div>
    </div>
</section>