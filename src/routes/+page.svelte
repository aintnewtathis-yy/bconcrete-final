<script>
    import SEO from "$lib/components/utils/SEO.svelte";
    import Hero from "$lib/components/main-page/Hero.svelte";
    import Categories from "$lib/components/main-page/Categories.svelte";
    import PopularProducts from "$lib/components/PopularProducts.svelte";
    import BasicGrid from "$lib/components/BasicGrid.svelte";
    import InfoBlock from "$lib/components/InfoBlock.svelte";
    import CornyBlock from "$lib/components/main-page/CornyBlock.svelte";
    import InfoBlockMedia from "$lib/components/InfoBlockMedia.svelte";

    let { data } = $props();

    let featuredProducts = $derived.by(() => {
        return data.products.filter((product) => product.featured === true);
    });
</script>

<SEO
    title={data.homeData.SEO.title}
    description={data.homeData.SEO.description}
    image={data.homeData.SEO.image}
/>

<Hero sliderData={data.homeData.slider} />
<Categories categories={data.categories} CMS_URL={data.CMS_URL} />
<PopularProducts products={featuredProducts} CMS_URL={data.CMS_URL} />
<BasicGrid title="Новинки" products={data.products} CMS_URL={data.CMS_URL} />
{#if data?.homeData?.home_about}
    <InfoBlock
        title={data.homeData.home_about.h1}
        desc={data.homeData.home_about.p}
        btnText={data.homeData.home_about.btnText}
        btnHref={data.homeData.home_about.btnLink}
        image={data.homeData.home_about.image.url}
    />
{/if}
<CornyBlock />
{#if data?.media}
    <InfoBlockMedia
        title="Медиа"
        desc="Откройте для себя полезную информацию об уходе за изделиями, советы и новости от Bazhenov Concrete. Также мы постараемся рассказывать о производственном процессе и жизни компании."
        btnText="Все статьи"
        btnHref="/media"
        media={data.media}
        CMS_URL={data.CMS_URL}
    />
{/if}
{#if data?.homeData?.home_workprocess}
    <InfoBlock
        title={data.homeData.home_workprocess.h1}
        desc={data.homeData.home_workprocess.p}
        btnText={data.homeData.home_workprocess.btnText}
        btnHref={data.homeData.home_workprocess.btnLink}
        image={data.homeData.home_workprocess.image.url}
    />
{/if}
