<script>
    let {categories, CMS_URL} = $props()
    let categoriesContent = [
        {
            image: '/categories1.png',
            name: 'Раковины и Мойки',
            href: '#'
        },
        {
            image: '/categories1.png',
            name: 'Столешницы и столы',
            href: '#'
        },
        {
            image: '/categories1.png',
            name: 'Кашпо и вазоны',
            href: '#'
        },
        {
            image: '/categories1.png',
            name: 'Панели и плитка',
            href: '#'
        },
    ]
</script>

{#snippet card(content)}
    <a href={'/catalog?' + content.url} class="flex flex-col gap-4 group/item max-lg:flex-shrink-0 max-lg:flex-grow-0 max-lg:w-5/12 max-sm:w-2/3 max-sm:gap-3 ">
        <div class=" overflow-hidden rounded">
            <img src={CMS_URL + content.thumbnail.url} alt={content.thumbnail.alternativeText}>
        </div>
        <p class="text-xl transition group-hover/item:opacity-70 ">{content.title}</p>
    </a>
{/snippet}

<section>
    <div class="container">
        <div class="grid grid-cols-4 gap-x-4 no-scrollbar max-lg:overflow-x-auto max-lg:flex">
            {#each categories as cardContent}
                {@render card(cardContent)}
            {/each}
        </div>
    </div>
</section>