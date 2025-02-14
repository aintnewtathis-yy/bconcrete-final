<script>
    import { CMS_URL } from "$lib/urls.js";
    import { page } from "$app/stores";
    import Seo from "$lib/components/utils/SEO.svelte";

    let { data, form } = $props();

    let paramsState = $state($page.url.searchParams);
    let currentPage = $derived(paramsState.get("page") ?? "");

    $effect(() => {
        paramsState = $page.url.searchParams;
    });
</script>

<Seo
    title={"Информация для покупателей"}
    description={"Информация для покупателей"}
/>

<section class="mb-20 pt-6 max-md:pt-6">
    <div class="container">
        <div class="flex flex-col gap-12 max-md:gap-6">
            <div class="flex items-end gap-2 *:text-textDull">
                <a href="/">Главная</a>
                <span>/</span>
                <a href="/catalog">Клиенту</a>
            </div>
            <div
                class="grid grid-cols-[1fr_4fr] gap-4 max-lg:flex max-lg:flex-col max-lg:gap-8"
            >
                <div>
                    <div
                        class="no-scrollbar sticky top-[86px] flex flex-col gap-3 max-lg:relative max-lg:top-auto max-lg:flex-row max-lg:overflow-x-auto"
                    >
                        <a
                            href="?page=delivery"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "delivery" ||
                                currentPage === ""}
                        >
                            Доставка
                        </a>
                        <a
                            href="?page=contacts"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "contacts"}
                        >
                            Контакты
                        </a>
                        <a
                            href="?page=vacancy"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "vacancy"}
                        >
                            Вакансии
                        </a>
                        <a
                            href="?page=model"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "model"}
                        >
                            Моделям
                        </a>
                        <a
                            href="?page=opt"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "opt"}
                        >
                            Косметика оптом
                        </a>
                        <a
                            href="?page=documents"
                            class="-ml-2 w-[calc(100%+8px)] flex-shrink-0 flex-grow-0 rounded px-2 py-3 transition duration-300 hover:bg-main-800 active:bg-main-800 max-lg:m-0 max-lg:w-fit"
                            class:bg-main-800={currentPage === "documents"}
                        >
                            Документы
                        </a>
                    </div>
                </div>
                <div class="flex flex-col gap-12">
                    {#if currentPage === "delivery" || currentPage === ""}
                        <div
                            class="rich-text-block flex w-3/4 flex-col gap-9 max-lg:w-full"
                        >
                            <div class="flex flex-col gap-4">
                                <h1 class="font-serif text-2xl">Доставка</h1>
                                <p>
                                    Три способа доставки заказа для розничных
                                    клиентов:
                                </p>
                                <ul class="flex flex-col gap-3">
                                    <li>
                                        <a href="#fromoffice">
                                            Самовывоз из офиса
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#courier">
                                            Курьерская доставка
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#cdek">
                                            Самовывоз из пункта выдачи СДЭК
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4" id="fromoffice">
                                <h2 class="font-serif text-2xl">
                                    Самовывоз из офиса
                                </h2>
                                <p>
                                    Товары можно забрать по адресу
                                    <a
                                        href="https://yandex.ru/maps/213/moscow/house/2_ya_frunzenskaya_ulitsa_10/Z04Ycw9iS0EFQFtvfXtzcnRnYg==/?ll=37.582242%2C55.723846&z=16.9"
                                    >
                                        г. Москва, 2-я Фрунзенская 10/1
                                    </a>
                                </p>
                            </div>
                            <div class="flex flex-col gap-4" id="courier">
                                <h2 class="font-serif text-2xl">
                                    Курьерская доставка
                                </h2>
                                <p>
                                    Доставка собственной курьерской службой по
                                    г. Москва (в пределах МКАД) "до двери"- 400
                                    рублей, при заказе от 3 000 рублей -
                                    бесплатно. Оплата наличными.
                                </p>
                            </div>
                            <div class="flex flex-col gap-4" id="cdek">
                                <h2 class="font-serif text-2xl">
                                    Пункты выдачи СДЭК
                                </h2>
                                <p>
                                    Доставка по г. Москва и России
                                    осуществляется
                                    <a href="https://www.cdek.ru/">
                                        транспортной компанией СДЭК до пункта
                                        ПВЗ
                                    </a>
                                    (ПВЗ согласовывается при оформлении заказа).
                                </p>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h2 class="font-serif text-2xl">
                                    Доставка для оптовых клиентов
                                </h2>
                                <p>
                                    Условия оплаты и доставки уточняйте у вашего
                                    менеджера
                                    <a href="tel:+74956091010">
                                        +7 (495) 609-10-10
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    {:else if currentPage === "contacts"}
                        <div
                            class=" flex w-3/5 flex-col gap-6 max-lg:w-full rich-text-block"
                        >
                            <h1 class="max-md:text-2xl font-serif text-2xl">
                                Контакты 
                            </h1>
                            <p>
                                Центральный офис в России объединяет головной
                                офис в Москве.
                            </p>
                            <div class="mt-3 flex flex-col gap-6">
                                <div class="flex flex-col gap-4">
                                    <p>Офис</p>
                                    <div class="flex flex-col gap-3">
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>

                                            <p>
                                                Адрес: 19146, г. Москва,
                                                ул. 2-я Фрунзенская, д.10/1
                                            </p>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>
                                            <p>
                                                Часы работы: Пн-Пт 09:00-18:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <p>Телефон</p>
                                    <div class="flex flex-col gap-3">
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>
                                            <p>
                                                <a href="tel:+79372379187">
                                                    +7(937) 237-91-87
                                                </a>;
                                                <a href="tel:+79272004850">
                                                    +7(927) 200-48-50
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <p>Эл. почта</p>
                                    <div class="flex flex-col gap-3">
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>
                                            <p>
                                                <a
                                                    href="mailto:info@bazhenovconcrete.ru"
                                                >
                                                    info@bazhenovconcrete.ru
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <p>Связаться с нами в мессенджерах:</p>
                                    <div class="flex flex-col gap-3">
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>
                                            <p>
                                                <a href="https://wa.me/+79372379187">
                                                    Whatsapp
                                                </a>
                                            </p>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="h-2 w-2 rounded-full bg-neutral-300 aspect-square"
                                            ></div>
                                            <p>
                                                <a
                                                    href="https://t.me/bazhenovconcrete"
                                                >
                                                    Telegram
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {:else if currentPage === "vacancy"}
                        <div
                            class="rich-text-block flex w-3/4 flex-col gap-9 max-lg:w-full"
                        >
                            <div class="flex flex-col gap-4">
                                <h1 class="font-serif text-2xl">Вакансии</h1>
                                <p>В данный момент свободных вакансий нет.</p>
                                <p>
                                    Если вы хотите работать в нашей компании,
                                    напишите на
                                    <a href="mailto:admin@bazhenovconcrete.ru">
                                        электронную почту
                                    </a>
                                    с пометкой "Вакансия" и пришлите свое резюме.
                                </p>
                            </div>
                        </div>
                    {:else if currentPage === "model"}
                        <div
                            class="rich-text-block flex w-3/4 flex-col gap-9 max-lg:w-full"
                        >
                            <div class="flex flex-col gap-4">
                                <h1 class="font-serif text-2xl">
                                    Приглашаем моделей
                                </h1>
                                <p>
                                    Учебный центр «Скин Лайт» приглашает всех
                                    желающих (старше 18 лет) на процедуры по
                                    шугарингу и косметологии в качестве моделей.
                                    Все процедуры для моделей проводятся
                                    бесплатно, с соблюдением норм гигиены и под
                                    контролем сертифицированного преподавателя.
                                </p>
                                <p>
                                    Оставьте заявку в качестве моделей по
                                    телефону: <a href="tel:+74956091010">
                                        +7 (495) 609-10-10
                                    </a>
                                    ,
                                    <a href="tel:6091190">609-11-90</a>
                                    ,
                                    <a href="tel:609-10-41">609-10-41</a>
                                    , по
                                    <a href="mailto:admin@bazhenovconcrete.ru">
                                        электронной почте
                                    </a>
                                    . Мы добавим вашу анкету в базу данных и будем
                                    приглашать вас на проводимые семинары в качестве
                                    модели.
                                </p>
                            </div>
                        </div>
                    {:else if currentPage === "opt"}
                        <div
                            class="rich-text-block flex w-3/4 flex-col gap-9 max-lg:w-full"
                        >
                            <div class="flex flex-col gap-4">
                                <h1 class="font-serif text-2xl">
                                    Профессиональная косметика оптом
                                </h1>
                                <p>
                                    Если вы являетесь частным косметологом или
                                    мастером депиляции, представителем клиники,
                                    салона красоты, spa-центра, фитнес-клуба,
                                    Группа компания "Скин Лайт" предлагает
                                    взаимовыгодное сотрудничество с
                                    <a href="/catalog">
                                        косметическими брендами премиум-класса
                                    </a>
                                    .
                                </p>
                                <p>
                                    С 2002 года компания «Скин Лайт»
                                    представляет на российском рынке косметику
                                    ведущих европейских брендов. Широкая сеть
                                    дистрибуции охватывает почти все регионы
                                    России и число наших партнеров постоянно
                                    растет. Группа компания "Скин Лайт"
                                    представляет на российском рынке
                                    профессиональные бренды косметики для
                                    шугаринга Pandhy's и французского бренда
                                    профессиональной косметики Ella Baché.
                                </p>
                                <p>
                                    Напишите нам на <a
                                        href="mailto:admin@bazhenovconcrete.ru"
                                    >
                                        электронную почту
                                    </a>
                                    , если вы хотите купить профессиональную косметику
                                    оптом.
                                </p>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h2 class="font-serif text-2xl">
                                    Условия сотрудничества:
                                </h2>
                                <ul class="gap-3">
                                    <li>
                                        В вашем регионе не должно быть
                                        действующего представителя косметики для
                                        шугаринга Pandhy's, французского бренда
                                        профессиональной косметики Ella Baché.
                                        Уточните данную информацию в разделе Где
                                        купить, по телефону:
                                        <a href="tel:+74956091010">
                                            +7 (495) 609-10-10
                                        </a>
                                        ,
                                        <a href="tel:6091190">609-11-90</a>
                                        ,
                                        <a href="tel:609-10-41">609-10-41</a>
                                        или по
                                        <a href="mailto:admin@bazhenovconcrete.ru">
                                            электронной почте
                                        </a>
                                        .
                                    </li>
                                    <li>
                                        Потенциальный Представитель должен иметь
                                        возможность проводить обучение и
                                        общаться с клиентами в профессиональных
                                        условиях (наличие студии или офиса).
                                    </li>
                                    <li>
                                        Представитель должен иметь статус
                                        технолога Pandhy’s и обучать по единому
                                        европейскому стандарту "Скин Лайт"
                                        (вести в программу все базовые курсы по
                                        депиляции и уходам и обеспечить
                                        соответствующий высокий уровень обучения
                                        и эффективности специалистов).
                                    </li>
                                    <li>
                                        Представитель должен поддерживать полный
                                        ассортимент нашей профессиональной
                                        косметики для работы и розничной
                                        продажи, необходимый для удовлетворения
                                        потребности клиентов своего региона.
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h3 class="font-serif text-2xl">
                                    Миссия - «Наша ценность- это наши люди».
                                </h3>
                                <p>
                                    Мы гордимся тем, что компания «Скин Лайт»
                                    много лет придерживается определенной схемы
                                    работы с нашими партнерами. Многие из наших
                                    учащихся стали не только клиентами, но и
                                    настоящими друзьями. Мы ценим эту отношение,
                                    поэтому всегда готовы оказать всеобъемлющую
                                    помощь на любых этапах сотрудничества.
                                    #семьяпандис
                                </p>
                                <p>
                                    Выбирая работу с Группой компаний «Скин
                                    Лайт» вы делаете вклад в успешный модный
                                    бизнес в бьюти-сфере.
                                </p>
                            </div>
                        </div>
                    {:else if currentPage === "documents"}
                        <div
                            class=" flex w-2/4 max-xl:w-3/4 flex-col gap-9 max-lg:w-full"
                        >
                            <h1 class="font-serif text-2xl">Документы</h1>
                            <div class="flex flex-col gap-4">
                                <a href="/legal/policy" class="btn-text">
                                    Политика конфиденциальности
                                </a>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>
