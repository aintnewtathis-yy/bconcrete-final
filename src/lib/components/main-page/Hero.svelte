<script>
    import { onDestroy } from "svelte";
    import { CMS_URL } from "$lib/urls";

    let { sliderData } = $props();

    let section;
    let slidesContainer;
    let pagination;
    let interval;
    let paginationElmts;
    let slidesContainerElmts;
    let bgImage = $state();


    function sliderOnClick(e, idInput) {
        clearInterval(interval);
        const id = e ? Number(e.currentTarget.dataset.visible) : idInput;

        for (let i = 0; i < slidesContainerElmts.length; i++) {
            if (Number(slidesContainerElmts[i].dataset.visible) === id) {
                slidesContainerElmts[i].style.position = "relative";
                slidesContainerElmts[i].style.opacity = 1;
                slidesContainerElmts[i].style.visibility = "visible";
                slidesContainerElmts[i].style.pointerEvents = "all";

                if (window.innerWidth > 760) {
                    section.style.backgroundImage = `url('${CMS_URL}${sliderData[i].imageDesk.url}')`;
                } else {
                    section.style.backgroundImage = `url('${CMS_URL}${sliderData[i].imageMobile?.formats?.large?.url?.length > 0 ? sliderData[i].imageMobile?.formats?.large?.url : sliderData[i].imageMobile.url}')`;
                }
            } else {
                slidesContainerElmts[i].style.position = "absolute";
                slidesContainerElmts[i].style.opacity = 0;
                slidesContainerElmts[i].style.visibility = "hidden";
                slidesContainerElmts[i].style.pointerEvents = "none";
            }
        }

        if (id > 0) {
            for (let j = 0; j < sliderContent.length; j++) {
                if (j < id) {
                    paginationElmts[j].style.width = `100%`;
                } else {
                    paginationElmts[j].style.width = `0%`;
                }
            }
            paginationElmts[id].style.width = `0%`;
            startTimer(paginationElmts, id);
        } else {
            paginationElmts.forEach((el) => {
                el.style.width = `0%`;
            });
            paginationElmts[id].style.width = `0%`;
            startTimer(paginationElmts, id);
        }
    }
    function startTimer(paginationElmts, id) {
        clearInterval(interval);
        let progress = 0;
        const intervalTime = 10;
        const increment = 100 / (5000 / intervalTime);

        interval = setInterval(() => {
            progress += increment;
            if (progress >= 100) {
                clearInterval(interval);
                if (id < sliderContent.length - 1) {
                    sliderOnClick(null, ++id);
                } else {
                    paginationElmts.forEach((el) => {
                        el.style.width = `0%`;
                    });
                    paginationElmts[id].style.width = `0%`;
                    sliderOnClick(null, 0);
                }
            } else {
                paginationElmts[id].style.width = `${progress}%`;
            }
        }, intervalTime);

        return interval;
    }

    $effect(() => {
        if (window.innerWidth > 760) {
            bgImage = `background-image: url('${CMS_URL}${sliderData[0].imageDesk.url}')`;
        } else {
            bgImage = `background-image: url('${CMS_URL}${sliderData[0].imageMobile?.formats?.large?.url?.length > 0 ? sliderData[0].imageMobile?.formats?.large?.url : sliderData[0].imageMobile.url}')`;
        }

        paginationElmts = pagination.querySelectorAll(`[data-visible] div`);
        slidesContainerElmts =
            slidesContainer.querySelectorAll(`[data-visible]`);
        sliderOnClick(null, 0);

        window.addEventListener("resize", () => {
            sliderOnClick(null, 0);
        });
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

{#snippet slide(content, index)}
    <div
        class="w-1/2 flex opacity-0 flex-col justify-center h-full gap-4 transition-all absolute max-sm:w-full max-sm:justify-start max-sm:mt-32"
        data-visible={index}
        transition:fade
    >
        <h1 class="text-6xl text-balance max-lg:text-5xl max-sm:text-4xl">
            {content.h1}
        </h1>
        <p class="text-xl w-3/5 max-sm:text-lg">{content.p}</p>
        <a href={content.btnLink} class="btn-dark mt-4">{content.btnText}</a>
    </div>
{/snippet}

<section
    id="hero-main"
    bind:this={section}
    style={bgImage}
    class=" h-full bg-no-repeat bg-cover aspect-video transition-all bg-center max-lg:aspect-square max-sm:aspect-auto max-sm:h-lvh max-sm:bg-bottom"
>
    <div class="container h-full">
        <div class="flex h-full" bind:this={slidesContainer}>
            {#each sliderData as content, i}
                {@render slide(content, i)}
            {/each}
        </div>

        <div
            class="flex gap-1 h-1 absolute bottom-24 left-5 items-end max-xl:bottom-16 max-sm:bottom-10"
            bind:this={pagination}
        >
            {#each sliderData as _, i}
                <button
                    aria-label="button"
                    class="bg-main-700 h-full w-10 max-h-[2px] cursor-pointer transition-all"
                    data-visible={i}
                    onclick={sliderOnClick}
                >
                    <div class="w-0 pointer-events-none bg-white h-full"></div>
                </button>
            {/each}
        </div>
    </div>
</section>
