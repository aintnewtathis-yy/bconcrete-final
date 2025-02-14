<script>
	import { page } from "$app/stores";
    let { data } = $props();

    let { media, categories } = data

	const currentFilter = $derived($page.url.searchParams.get("filter") ?? "");

    const getFilteredMedia = (media, currentFilter) => {
		if (currentFilter === "") return media;
		return media.filter((article) => article.categories[0].url === currentFilter);
	};

	const filteredMedia = $derived.by(() =>
		getFilteredMedia(media, currentFilter),
	);
</script>

{#snippet mediaElement(content)}
    <a 
        href={'/media/' + content.seo.slug} 
        class="flex flex-col gap-4 flex-shrink-0 flex-grow-0"
    >
        <img class="rounded" src={data.CMS_URL + content.thumbnail.formats.large.url} width={content.thumbnail.formats.large.width} height={content.thumbnail.formats.large.height} alt={content.thumbnail.alternativeText}>
        <p class="text-lg">{content.title}</p>
    </a>
{/snippet}

{#snippet categoryLink(content)}
    <a
        href="/media/?filter={content.url}"
        class:bg-main-800 ={content.url != currentFilter}
        class:bg-black={content.url === currentFilter}
        class:text-white={content.url === currentFilter}
        class="py-3 px-8 whitespace-nowrap rounded max-lg:py-2 max-lg:px-6 transition duration-300"
    >{content.title}</a>
{/snippet}

<section class="pt-16">
    <div class="container">
        <div class="flex flex-col gap-8">
            <h1 class="text-5xl max-sm:text-3xl ">Медиа</h1>
            <div class="flex gap-8 no-scrollbar overflow-y-hidden overflow-x-auto max-lg:gap-6">
                <a
                    href="/media/"
                    class="py-3 px-8 whitespace-nowrap rounded max-lg:py-2 max-lg:px-6 transition duration-300 bg-main-800"
                >Все</a>
                {#each categories as category}
                    {@render categoryLink(category)}
                {/each}
            </div>
            <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
                
                {#each filteredMedia as el, i}
                    {@render mediaElement(el)}
                {/each}
            </div>
        </div>
    </div>
</section>