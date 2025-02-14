<script>
    import { marked } from "marked";
    import Seo from "$lib/components/utils/SEO.svelte";

    let { data } = $props();
</script>

<!-- <Seo
    title={data?.contactsData?.seo?.title}
    description={data?.contactsData?.seo?.description}
    image={data?.contactsData?.seo?.image}
/> -->

<section class="mb-20 pt-10 max-md:pt-6">
    <div class="container">
        <div class="flex flex-col gap-12">
            <div class="flex items-end gap-2 *:text-textDull">
                <a href="/">Главная</a>
                <span>/</span>
                <p>Контакты</p>
            </div>
            
        </div>
    </div>
</section>

<style>
    .styled-block a {
        color: #c6a07d;
    }
    .styled-block a:hover {
        opacity: 0.8;
    }
</style>
