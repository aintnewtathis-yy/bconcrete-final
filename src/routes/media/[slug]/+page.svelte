<script>
    let { data } = $props();

    let mediaContent = {
        title: 'Больше цвета: простые способы добавить модных красок в интерьер',
        desc: `
            <p>
                В конце августа в Стокгольме прошла выставка дизайна Formex, определяющая тренды грядущего сезона. Посетившая выставку дизайнер интерьера Анастасия Прасолова рассказывает, какие сочетания сейчас на пике популярности и как быстро внедрить их в собственный интерьер.
            </p>
        `,
        thumbnail: '/infoBlock.jpg',
        blocks: [
            {
                content: `
                    <p>
                        В конце августа в Стокгольме прошла выставка дизайна Formex, определяющая тренды грядущего сезона. Посетившая выставку дизайнер интерьера Анастасия Прасолова рассказывает, какие сочетания сейчас на пике популярности и как быстро внедрить их в собственный интерьер.
                    </p>
                `,
                image: '/infoBlock.jpg',
            },
            {
                content: `
                    <p>
                        В конце августа в Стокгольме прошла выставка дизайна Formex, определяющая тренды грядущего сезона. Посетившая выставку дизайнер интерьера Анастасия Прасолова рассказывает, какие сочетания сейчас на пике популярности и как быстро внедрить их в собственный интерьер.
                    </p>
                `,
                image: '/infoBlock.jpg',
            },
            {
                content: `
                    <p>
                        В конце августа в Стокгольме прошла выставка дизайна Formex, определяющая тренды грядущего сезона. Посетившая выставку дизайнер интерьера Анастасия Прасолова рассказывает, какие сочетания сейчас на пике популярности и как быстро внедрить их в собственный интерьер.
                    </p>
                `,
                image: '/infoBlock.jpg',
            },
        ]
    }
</script>

<section class="pt-16">
    <div class="container">
        <div class="flex flex-col gap-48 max-lg:gap-32 max-sm:gap-24">
            <div class="flex flex-col gap-12">
                <h1 class="text-5xl whitespace-nowrap max-xl:text-4xl max-sm:text-3xl text-wrap">
                    {mediaContent.title}
                </h1>
                <div class="grid grid-cols-[2fr_1fr_2fr] gap-4 max-sm:flex max-sm:flex-col">
                    <div>
                        {@html mediaContent.desc}
                    </div>
                    <div class="max-sm:hidden"></div>
                    <div>
                        <img class="rounded" src={mediaContent.thumbnail} alt="">
                    </div>
                </div>
            </div>
            {#each mediaContent?.blocks as block, i}
                <div class="flex gap-4 justify-between max-sm:flex-col" class:flex-row-reverse={i % 2 == 0} >
                    <div class="w-2/5 max-sm:w-full">
                        {@html mediaContent.desc}
                    </div>
                    <div class="w-2/5 max-sm:w-full" class:w-[50%]={i % 2 == 0}>
                        <img class="rounded" src={mediaContent.thumbnail} alt="media">
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>