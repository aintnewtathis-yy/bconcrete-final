<script>
    import SheetContent from "$lib/components/ui/SheetContent.svelte";
    import SheetSizes from "$lib/components/ui/SheetSizes.svelte";
    import SheetVariants from "$lib/components/ui/SheetVariants.svelte";
    import { page } from "$app/state";
    import Seo from "$lib/components/utils/SEO.svelte";
    import { popupState } from "$lib/globals.svelte.js";
    import PopupForm from "../../../lib/components/ui/PopupForm.svelte";

    let { data } = $props();

    let { productData } = data;
    let currentColor = $state(productData.colors[0])

    $inspect(currentColor)
</script>

<Seo
    title={productData.seo.title}
    description={productData.seo.description}
    image={productData.seo.image}
    CMS_URL={data.CMS_URL}
/>

<section class="pt-4">
    <div class="container">
        <div class="flex flex-col gap-12 max-sm:gap-6">
            <div class="flex gap-2 items-center">
                <a class="text-[#A9A9A9]" href="/">Главная</a>
                <span class="text-[#A9A9A9]">/</span>
                <a class="text-[#A9A9A9]" href="/catalog">Каталог</a>
                <span class="text-[#A9A9A9]">/</span>
                <p class="text-[#A9A9A9]" href={page.url.pathname}>
                    {productData.title}
                </p>
            </div>
            <div
                class="grid grid-cols-[2fr_1fr] gap-16 max-lg:grid-cols-2 max-lg:gap-8 max-sm:flex max-sm:flex-col"
            >
                <div
                    class="flex flex-col gap-4 no-scrollbar max-sm:overflow-x-auto max-sm:flex-row"
                >
                    <img
                        class="rounded object-cover object-bottom aspect-[970/730]"
                        src={data.CMS_URL +
                            productData.thumbnail?.formats.large.url}
                        alt={productData.thumbnail?.alternativeText}
                        width={productData.thumbnail?.formats.large.width}
                        height={productData.thumbnail?.formats.large.height}
                    />
                    {#if productData.gallery}
                        {#each productData.gallery as image}
                            <img
                                class="rounded object-cover object-bottom aspect-[970/730]"
                                src={data.CMS_URL + image?.formats?.large.url}
                                alt={image.alternativeText}
                                width={image.formats.large.width}
                                height={image.formats.large.height}
                            />
                        {/each}
                    {/if}
                </div>
                <div class="flex flex-col gap-8 sticky top-[80px] h-fit max-md:top-auto max-md:relative">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-5xl max-sm:text-3xl">
                            {productData.title}
                        </h1>
                        <h2 class="text-2xl max-sm:text-xl">
                            от {productData.price} ₽
                            {#if productData.categories[0].title === "Панели"}
                                за м2
                            {/if}
                        </h2>
                    </div>
                    <div>
                        <SheetVariants colors={productData.colors} bind:currentColor />
                        {#if productData.sizes}
                            <SheetSizes sizes={productData.sizes} />
                        {/if}
                    </div>
                    <!-- <a href={productData.dddModel} class="text-lg"
                        >Скачать 3D модель</a
                    > -->
                    <!-- <a
                        href="#"
                        class="p-4 border border-dashed border-gray-200 rounded flex flex-col gap-3"
                    >
                        <span class="text-lg">Заказать образцы</span>
                        <span class="text-sm text-main-700">
                            Консультант покажет вам товар, камеру включать не
                            потребуется камеру включать не потребуется
                        </span>
                    </a> -->
                    <button
                        onclick={() => {
                            $popupState = true;
                        }}
                        type="button"
                        class="btn-black"
                    >
                        Оставить заявку на заказ
                    </button>
                    <div>
                        {#each productData.accordions as accordion, i}
                            <SheetContent content={accordion} index={i} />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<PopupForm model={productData.title} color={currentColor.title} />
