<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';

    let { categories, currentFilter = $bindable() } = $props();
    let sheet;
    let open = $state(false);
    let changed = $derived(currentFilter != "");

    function openFilters() {
        open = !open;
    }
</script>

<button class="btn justify-center" onclick={openFilters}>
    <img src="/filters-icon.svg" alt="filters icon" />
    Фильтры
</button>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="fixed w-screen transition duration-300 z-10 h-screen top-0 left-0 bg-black/30 inset-0 backdrop-blur-sm"
    class:pointer-events-all={open}
    class:opacity-0={!open}
    class:pointer-events-none={!open}
    onclick={() => {
        open = false;
    }}
></div>
<div
    class="fixed flex p-5 z-20 transition duration-300 top-0 right-0 h-screen w-2/5 bg-white shadow-lg inset-y-0 max-lg:w-3/5 max-sm:w-full"
    class:translate-x-full={!open}
    class:translate-x-0={open}
    bind:this={sheet}
>
    <div class="flex flex-col gap-10 w-full">
        <p class="text-3xl">Фильтры</p>
        <!-- <div class="flex flex-col gap-4">
            <p class="text-xl">Форма</p>
            <div class="flex gap-2 items-center">
                <input
                    type="radio"
                    name="formFactor"
                    value="square"
                    id="square"
                    class="accent-black peer"
                />
                <label for="square" class="text-lg peer-disabled:text-gray-400"
                    >квадрат</label
                >
            </div>
            <div class="flex gap-2 items-center">
                <input
                    type="radio"
                    name="formFactor"
                    value="circle"
                    id="circle"
                    class="accent-black peer"
                    disabled
                />
                <label for="circle" class="text-lg peer-disabled:text-gray-400"
                    >круг</label
                >
            </div>
            <div class="flex gap-2 items-center">
                <input
                    type="radio"
                    name="formFactor"
                    value="romb"
                    id="romb"
                    class="accent-black peer"
                />
                <label for="romb" class="text-lg peer-disabled:text-gray-400"
                    >ромб</label
                >
            </div>
        </div> -->

        <div class="flex flex-col gap-4">
            <p class="text-xl">Категории</p>
            <div class="flex flex-wrap gap-4">
                {#each categories as category}
                    <a
                        href="/catalog/?filter={category.url}"
                        class:bg-gray-800={category.url != currentFilter}
                        class:bg-black={category.url === currentFilter}
                        class:text-white={category.url === currentFilter}
                        class="py-2 px-6 whitespace-nowrap rounded max-lg:py-2 max-lg:px-6 transition duration-300"
                        >{category.title}</a
                    >
                {/each}
            </div>
        </div>
        <!-- <div class="flex flex-col gap-4">
            <p class="text-xl">Форма</p>
            <div class="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="formFactor1"
                    value="square1"
                    id="square1"
                    class="accent-black peer"
                    disabled
                />
                <label for="square1" class="text-lg peer-disabled:text-gray-400"
                    >квадрат</label
                >
            </div>
            <div class="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="formFactor1"
                    value="circle1"
                    id="circle1"
                    class="accent-black peer"
                />
                <label for="circle1" class="text-lg peer-disabled:text-gray-400"
                    >круг</label
                >
            </div>
            <div class="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="formFactor1"
                    value="romb1"
                    id="romb1"
                    class="accent-black peer"
                />
                <label for="romb1" class="text-lg peer-disabled:text-gray-400"
                    >ромб</label
                >
            </div>
        </div> -->

        <button
            type="button"
            class="fixed top-5 right-5 w-6 h-6 p-1"
            onclick={() => {
                open = false;
            }}
        >
            <img
                class="w-full object-contain"
                src="/cross.svg"
                alt="cross icon"
            />
        </button>

        <button
            type="submit"
            class="btn mt-auto w-full text-center justify-center"
            class:opacity-1={changed}
            class:opacity-0={!changed}
            class:pointer-events-none={!changed}
            class:pointer-events-auto={changed}
            onclick={() => {
                currentFilter = ""
                console.log($page)
            }}
        >
            Сбросить фильтры
        </button>
    </div>
</div>
