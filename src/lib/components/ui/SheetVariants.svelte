<script>
    let { colors } = $props()
    let open = $state(false);
    let currentColor = $state(colors[0].color)

    function openFilters() {
        open = !open;
    }

</script>

{#snippet colorCard(content)}
    <button 
        type="button" 
        class="flex flex-col gap-3" 
        onclick={() => {
            currentColor = content.color
        }}
    >
        <div style="background-color: {content.color}; " class="rounded w-full min-h-40  aspect-[260/200]"></div>
        <p class="p-2 rounded border transition duration-300" 
            class:bg-transparent={content.color != currentColor}
            class:border-[#CCCCCC]={content.color != currentColor}
            class:bg-gray-800={content.color == currentColor}
            class:border-gray-800={content.color == currentColor}
        > 
            {content.color}
        </p>
    </button>
{/snippet}

<button class="btn w-full justify-between"  onclick={openFilters}>
    <div class="flex gap-3 items-center">
        <div
            class="rounded-full w-5 h-5 outline outline-1 outline-offset-2 outline-[#919191]"
            style="background-color: {currentColor};"
        ></div>
        <p>{currentColor}</p>
    </div>
    + {colors.length} цветов
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
    class:translate-x-[110%]={!open}
    class:translate-x-0={open}
>
    <form method="POST" action="#" class="flex flex-col gap-10 w-full">
        <p class="text-3xl">Цвета</p>
        <div class="grid grid-cols-2 gap-4  overflow-y-auto no-scrollbar overflow-x-hidden ">
            {#each colors as color, i}
                {@render colorCard(color)}                
            {/each}
        </div>
        <div class="p-4 flex flex-col gap-4 bg-[url('/form-bg.png')] rounded bg-cover bg-center">
            <p class="text-2xl max-sm:text-xl ">Не нашли подходящий цвет?</p>
            <p class="texl-lg w-3/5 max-sm:text-base max-sm:w-4/5">Напишите нам, и мы подберём для вас нужную конфигурацию</p>
            <a href="#" class="bg-black p-2 rounded text-white w-fit">Написать в  Whatsapp</a>
        </div>
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
    </form>
</div>
