<script>
    let { title, desc, btnHref, btnText, image } = $props()
</script>

<section>
    <div class="container">
        <div class="flex flex-col gap-8 max-sm:gap-6">
            <h4 class="text-5xl max-lg:text-3xl">{title}</h4>
            <div class="flex flex-col gap-6">
                <p class="w-1/3 max-lg:w-1/2 max-sm:w-full">{desc}</p>
                <a href={btnHref} class="btn">{btnText}</a>
            </div>
            <img class="rounded mt-8" src={image} alt="huge product" loading="lazy">
        </div> 
    </div>
</section>