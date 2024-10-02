<script>
    import { onMount } from "svelte";
	import { page } from '$app/stores';

    let { homePage } = $props();
    let currentPage = $state($page.url.pathname)
    let headerScroll;
    let scrollAmount = $state();
    let burgerActive = $state(false);
    

    function scrollHeader() {
        let lastScrollTop;
        scrollAmount = homePage
            ? document.querySelector("#hero-main").scrollHeight
            : headerScroll.scrollHeight;

        window.addEventListener("scroll", function () {
            let scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (homePage) {
                if (scrollTop < scrollAmount) {
                    headerScroll.classList.add("translate-y-[-105%]");
                    lastScrollTop = scrollTop;
                    return;
                }
            }

            if (scrollTop > lastScrollTop && scrollTop > scrollAmount) {
                headerScroll.classList.add("translate-y-[-105%]");
            } else {
                headerScroll.classList.remove("translate-y-[-105%]");
            }

            lastScrollTop = scrollTop;
        });
    }

    $effect(() => {
        if(currentPage != $page.url.pathname) {
            burgerActive = false
            currentPage = $page.url.pathname
        }
    })

    $effect(() => {
        scrollHeader();
    });
</script>

<header
    class="border-b border-[#D6D6D6]"
    class:bg-white={!homePage}
    class:opacity-0={!homePage}
    class:opacity-1={homePage}
    class:bg-transparent={homePage}
    class:absolute={homePage}
    class:left-0={homePage}
    class:top-0={homePage}
    class:w-full={homePage}
    class:z-20={homePage}
    class:border-none={homePage}
>
    <div class="container">
        <div
            class="grid grid-cols-[1fr_220px_1fr] gap-4 justify-between py-6 max-lg:flex max-lg:justify-between"
        >
            <nav class="max-lg:hidden">
                <ul class="flex gap-8 max-xl:gap-6">
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="/catalog">Каталог</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="/media">Блог</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="/about">О нас</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="#">Дизайнерам</a
                        >
                    </li>
                </ul>
            </nav>
            <a href="/" class="flex items-center">
                <img src="/logo.svg" alt="logo" /></a
            >
            <nav class="max-lg:hidden">
                <ul class="flex gap-8 justify-end max-xl:gap-6">
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="#">Клиентам</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300"
                            href="#">Контакты</a
                        >
                    </li>
                </ul>
            </nav>
            <button
                aria-label="button"
                class="hidden flex-col gap-2 w-8 h-8 peer justify-center items-end relative z-50 max-lg:flex"
                class:active={burgerActive}
                onclick={() => {
                    burgerActive = !burgerActive;
                }}
            >
                <span class="w-full h-[1px] bg-black peer-has-[.active]:w-4/5"
                ></span>
                <span class="w-full h-[1px] bg-black"></span>
                <span class="w-full h-[1px] bg-black peer-has-[.active]:w-4/5"
                ></span>
            </button>
        </div>
    </div>
</header>
<header
    class="border-b border-[#D6D6D6] fixed top-0 left-0 w-full z-20 transition duration-300 bg-white"
    class:translate-y-[-105%]={homePage}
    bind:this={headerScroll}
>
<div class="container">
    <div
        class="grid grid-cols-[1fr_220px_1fr] gap-4 justify-between py-6 max-lg:flex max-lg:justify-between"
    >
        <nav class="max-lg:hidden">
            <ul class="flex gap-8 max-xl:gap-6">
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="/catalog">Каталог</a
                    >
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="/media">Блог</a
                    >
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="/about">О нас</a
                    >
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="#">Дизайнерам</a
                    >
                </li>
            </ul>
        </nav>
        <a href="/" class="flex items-center">
            <img src="/logo.svg" alt="logo" /></a
        >
        <nav class="max-lg:hidden">
            <ul class="flex gap-8 justify-end max-xl:gap-6">
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="#">Клиентам</a
                    >
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300"
                        href="#">Контакты</a
                    >
                </li>
            </ul>
        </nav>
        <button
            aria-label="button"
            class="hidden flex-col gap-2 w-8 h-8 peer justify-center items-end relative z-50 max-lg:flex"
            class:active={burgerActive}
            onclick={() => {
                burgerActive = !burgerActive;
            }}
        >
            <span class="w-full h-[1px] bg-black peer-has-[.active]:w-4/5"
            ></span>
            <span class="w-full h-[1px] bg-black"></span>
            <span class="w-full h-[1px] bg-black peer-has-[.active]:w-4/5"
            ></span>
        </button>
    </div>
</div>
</header>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="fixed w-screen transition duration-300 z-20 h-screen top-0 left-0 bg-black/30 inset-0 backdrop-blur-sm"
    class:pointer-events-all={burgerActive}
    class:opacity-0={!burgerActive}
    class:pointer-events-none={!burgerActive}
    onclick={() => {
        burgerActive = false;
    }}
></div>

<div
    class="fixed flex flex-col items-end px-5 py-6 gap-5 z-20 transition duration-300 top-0 right-0 h-screen w-2/5 bg-white shadow-lg inset-y-0 max-lg:w-3/5 max-sm:w-full"
    class:translate-x-[110%]={!burgerActive}
    class:translate-x-0={burgerActive}
>
    <button
        aria-label="button"
        class="hidden flex-col gap-2 w-8 h-8 peer justify-center items-end relative z-50 max-lg:flex"
        class:active={burgerActive}
        onclick={() => {
            burgerActive = !burgerActive;
        }}
    >
        <span
            class="w-full h-[1px] bg-black transition-all"
            class:w-full={burgerActive === false}
            class:w-[80%]={burgerActive === true}
        ></span>
        <span class="w-full h-[1px] bg-black transition-all"></span>
        <span
            class="w-full h-[1px] bg-black transition-all"
            class:w-full={burgerActive === false}
            class:w-[80%]={burgerActive === true}
        ></span>
    </button>
    <div class="flex flex-col justify-start gap-4 w-full h-full">
        <nav class="flex flex-col gap-8 w-full">
            <ul class="flex flex-col gap-4">
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300 text-lg"
                        href="/catalog"
                    >
                        Каталог
                    </a>
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300 text-lg"
                        href="/catalog"
                    >
                        Вазы
                    </a>
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300 text-lg"
                        href="/catalog"
                    >
                        Кашпо
                    </a>
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300 text-lg"
                        href="/catalog"
                    >
                        Плиты
                    </a>
                </li>
                <li>
                    <a
                        class="hover:opacity-70 transition duration-300 text-lg"
                        href="/catalog"
                    >
                        Столы
                    </a>
                </li>
            </ul>
        </nav>
        <div class="flex flex-col gap-8 border-t border-[#E3E3E3] pt-5 h-full">
            <nav class="flex flex-col gap-8 w-full">
                <ul class="flex flex-col gap-4">
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300 text-lg"
                            href="/catalog"
                        >
                            О нас
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300 text-lg"
                            href="/catalog"
                        >
                            Блог
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300 text-lg"
                            href="/catalog"
                        >
                            Клиенту
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:opacity-70 transition duration-300 text-lg"
                            href="/catalog"
                        >
                            Дизайнерам
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-col gap-5  mt-auto">
                <p class="text-lg">
                    Если вам нужна помощь с выбором или остались вопросы,
                    подалуйста, свяжитесь с нами!
                </p>
                <a
                    href="#"
                    class="btn w-full justify-center bg-black text-white"
                >
                    Написать в whatsapp
                </a>
            </div>
        </div>
    </div>
</div>
