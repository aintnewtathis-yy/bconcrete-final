<script>
    import Filters from "./ui/Filters.svelte";
	import { page } from '$app/stores';

 
    let {products, categories, CMS_URL} = $props()

    const currentFilter = $derived($page.url.searchParams.get("filter") ?? "");

    const getFilteredProducts = (products, currentFilter) => {
		if (currentFilter === "") return products;
		return products.filter((product) => product.categories[0].url === currentFilter);
	};

	const filteredProducts = $derived.by(() =>
		getFilteredProducts(products, currentFilter),
	);
</script>

{#snippet productCard(content, index)}
    <a href={'/catalog/' + content.seo.slug} aria-label="product card" class="flex flex-col flex-shrink-0 flex-grow-0 gap-5 pb-1 max-sm:gap-3" class:span={index%2 === 1 && index%3 === 0} class:mob-span={index%5 === 0 }  >
        <img src={CMS_URL + content.thumbnail.url} class="flex-grow object-cover rounded" width={content.thumbnail.width} height={content.thumbnail.height} alt={content.thumbnail.alternativeText}>
        <div class="flex flex-col gap-3">
            <div class="flex gap-3 justify-between max-sm:flex-col max-sm:gap-2">
                <p class="text-lg max-sm:text-base">{content.title}</p>
                <p class="text-lg max-sm:text-sm whitespace-nowrap">
                    от {content.price} ₽
                    {#if content.categories[0].title === "Панели"}
                        за м2
                    {/if}
                </p>
            </div>
            <div class="flex gap-2 max-sm:gap-1">
                {#each content.colors as color}
                    <div 
                    class=" rounded-full w-5 h-5 max-sm:w-4 max-sm:h-4"
                    style="background-color: {color.color};  outline-color:{color.color};"
                    class:outline-active={true}
                    ></div>
                {/each}
            </div>
        </div>
    </a>
{/snippet}

{#snippet categoryLink(content)}
    <a
        href="/catalog/?filter={content.url}"
        class:bg-gray-800 ={content.url != currentFilter}
        class:bg-black={content.url === currentFilter}
        class:text-white={content.url === currentFilter}
        class="py-3 px-8 whitespace-nowrap rounded max-lg:py-2 max-lg:px-6 transition duration-300"
    >{content.title}</a>
{/snippet}

<section class="pt-16 ">
    <div class="container">
        <div class="flex flex-col gap-8">
            <h3 class="text-5xl max-lg:text-4xl">Каталог</h3>
            <div class="flex gap-8 no-scrollbar overflow-y-hidden overflow-x-auto max-lg:gap-6">
                <a
                    href="/catalog/"
                    class="py-3 px-8 whitespace-nowrap rounded max-lg:py-2 max-lg:px-6 transition duration-300 bg-gray-800"
                >Все</a>
                {#each categories as category}
                    {@render categoryLink(category)}
                {/each}
            </div>
            <!-- <Filters {categories} {currentFilter} /> -->
            <div class="grid grid-cols-3 mt-4 no-scrollbar gap-x-5 gap-y-8 max-sm:grid-cols-2 max-lg:gap-x-3">
                {#each filteredProducts as product, i}
                    {@render productCard(product, i)} 
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .span{
        grid-column: span 2;
        grid-row: span 2;
    }

    @media (max-width: 767px) {
        .mob-span{
            grid-column: span 2;
            grid-row: span 2;
        }
        .span{
            grid-column: auto;
            grid-row: auto;
        }
    }
</style>