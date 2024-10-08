<script>
    let {products, CMS_URL} = $props()

</script>

{#snippet productCard(content, index)}
    <a href={'/catalog/' + content.seo.slug} aria-label="product card" class="flex flex-col flex-shrink-0 flex-grow-0 gap-4 max-sm:w-2/3 max-sm:gap-3 pb-1" class:col-span-2={index === 0} class:row-span-2={index === 0}>
        <img src={CMS_URL + content.thumbnail.formats.large.url} class="flex-grow object-cover rounded" width={content.thumbnail.formats.large.width} height={content.thumbnail.formats.large.height} alt={content.thumbnail.alternativeText}>
        <div class="flex flex-col gap-2">
            <div class="flex gap-3 justify-between max-sm:flex-col max-sm:gap-2">
                <p class="text-lg max-sm:text-base">{content.title}</p>
                <p class="text-lg max-sm:text-sm whitespace-nowrap">
                    от {content.price} ₽ 
                    {#if content.categories[0].title === "Панели"}
                        за м2
                    {/if}
                </p>
            </div>
            <div class="flex gap-2">
                {#each content.colors as color}
                    <div 
                    class=" rounded-full w-5 h-5 border border-[#cccccc]"
                    style="background-color: {color.color}; "
                    class:outline-active={false}
                    ></div>
                {/each}
            </div>
        </div>
    </a>
{/snippet}

<section>
    <div class="container">
        <div class="flex flex-col gap-6">
            <h2 class="text-5xl max-lg:text-3xl">Популярные модели</h2>
            <div class="grid grid-cols-3 no-scrollbar gap-x-5 gap-y-8 max-lg:gap-x-3 max-sm:flex max-sm:overflow-x-auto">
                {#each products as product, i}
                    {#if i < 3}
                        {@render productCard(product, i)} 
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .outline-active{
        outline: 1px solid;
        outline-offset: 2px;
    }
</style>