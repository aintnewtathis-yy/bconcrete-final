<script>
    import Hero from "$lib/components/main-page/Hero.svelte";
    import Categories from "$lib/components/main-page/Categories.svelte";
    import PopularProducts from "$lib/components/PopularProducts.svelte";
    import BasicGrid from "$lib/components/BasicGrid.svelte";
    import InfoBlock from "$lib/components/InfoBlock.svelte";
    import CornyBlock from "$lib/components/main-page/CornyBlock.svelte";
    import InfoBlockMedia from "$lib/components/InfoBlockMedia.svelte";

    let { data } = $props();

    let featuredProducts = data.products.filter(product => product.featured === true)

    let media= [
        {
            title: "Бетона много",
            image: "/infoBlock.jpg",
            href: "#"
        },
        {
            title: "Бетона мало",
            image: "/infoBlock.jpg",
            href: "#"
        },
        {
            title: "Бетона достаточно",
            image: "/infoBlock.jpg",
            href: "#"
        },
    ]

    $effect(() => {
        $inspect(data);
        console.log(featuredProducts);
    })
</script>

<Hero />
<Categories categories={data.categories} CMS_URL={data.CMS_URL}  />
<PopularProducts products={featuredProducts} CMS_URL={data.CMS_URL} />
<BasicGrid title="Новинки" products={data.products} CMS_URL={data.CMS_URL} />
<InfoBlock
    title="Bazhenov Concrete"
    desc="Мы создаем авторский дизайн и непрерывно унифицируем процесс производства. Каждое изделие разрабатывается по индивидуальным эскизам на собственной фабрике."
    btnText="Перейти в каталог"
    btnHref="/about"
    image="/infoBlock.jpg"
/>
<CornyBlock />
<InfoBlockMedia
    title="Медиа"
    desc="Откройте для себя полезную информацию об уходе за изделиями, советы и новости от Bazhenov Concrete. Также мы постараемся рассказывать о производственном процессе и жизни компании."
    btnText="Все статьи"
    btnHref="/media"
    media={data.media} 
    CMS_URL={data.CMS_URL}
/>
<InfoBlock
    title="Рабочий процесс"
    desc="Мы создаем авторский дизайн и непрерывно унифицируем процесс производства. Каждое изделие разрабатывается по индивидуальным эскизам на собственной фабрике."
    btnText="Перейти в каталог"
    btnHref="/about"
    image="/infoBlock.jpg"
/>
