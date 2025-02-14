<script>
    import "../app.css";
    import Footer from "../lib/components/Footer.svelte";
    import Header from "../lib/components/Header.svelte";
    import { page } from "$app/stores";
    import PopupForm from "../lib/components/ui/PopupForm.svelte";

    let homePage = $state($page.route.id === "/" ? true : false);

    $effect(() => {
        homePage = $page.route.id === "/" ? true : false;
    });

    let { data, children } = $props();
</script>

<Header {homePage} />

{@render children()}

<Footer />
