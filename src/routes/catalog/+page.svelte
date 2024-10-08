<script>
    import Catalog from "../../lib/components/Catalog.svelte";

    let {data} = $props();

    let { products, categories, CMS_URL } = data
</script>

<Catalog {products} {categories} {CMS_URL} />
