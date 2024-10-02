<script>
	import { marked } from 'marked';

    let { data } = $props();

    let { articleData, CMS_URL } = data
    
    console.log(articleData.infoBlock[0])
</script>

<section class="pt-16">
    <div class="container">
        <div class="flex flex-col gap-48 max-lg:gap-32 max-sm:gap-24">
            <div class="flex flex-col gap-12">
                <h1 class="text-5xl whitespace-nowrap max-xl:text-4xl max-sm:text-3xl text-wrap">
                    {articleData.title}
                </h1>
                <div class="grid grid-cols-[2fr_1fr_2fr] gap-4 max-sm:flex max-sm:flex-col">
                    <div>
                        {@html marked.parse(articleData.description)}
                    </div>
                    <div class="max-sm:hidden"></div>
                    <div>
                        <img class="rounded" src={CMS_URL + articleData.thumbnail.url} width={articleData.thumbnail.width} height={articleData.thumbnail.height} alt={articleData.thumbnail.alternativeText}>
                    </div>
                </div>
            </div>
            {#each articleData.infoBlock as block, i}
                <div class="flex gap-4 justify-between max-sm:flex-col" class:flex-row-reverse={i % 2 == 0} >
                    <div class="w-2/5 max-sm:w-full">
                        {@html block.content}
                    </div>
                    <div class="w-2/5 max-sm:w-full" class:w-[50%]={i % 2 == 0}>
                        <img class="rounded" src={CMS_URL + block.image.url} width={block.image.width} height={block.image.height} alt={block.image.alternativeText}>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>