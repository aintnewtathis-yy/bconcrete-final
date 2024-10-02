<script>
    import Catalog from "../../lib/components/Catalog.svelte";

    let {data} = $props();

    let { products, categories, CMS_URL } = data

    
    
    console.log(CMS_URL)
</script>

<Catalog {products} {categories} {CMS_URL} />
