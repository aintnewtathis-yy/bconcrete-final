<script>
</script>

<section>
    <div class="container">
        <div class="flex flex-col gap-6" id="corny">
            <div class="flex flex-col gap-4 items-center max-sm:items-start">
                <h5
                    class="text-6xl text-balance text-center max-lg:text-5xl max-sm:text-3xl max-sm:text-start"
                >
                    Широкий спектр<br />дизайнерских решений
                </h5>
                <p>Бесплатная консультация и забота о каждом клиенте</p>
                <a href="#" class="btn mt-4">Перейти в каталог</a>
            </div>
            <div class="grid grid-cols-3 gap-4 max-sm:hidden">
                <div class="grid grid-cols-1 gap-4 h-full">
                    <div class="grid grid-cols-[1fr_2fr] gap-4">
                        <div class="overflow-hidden h-full rounded">
                            <img src="/corny2.png" alt="interior" />
                        </div>
                        <div class="mt-16 overflow-hidden  rounded">
                            <img src="/corny1.png" alt="interior" />
                        </div>
                    </div>
                    <div class="overflow-hidden rounded">
                        <img src="/corny1.png" alt="interior" />
                    </div>
                </div>

                <div class="h-full">
                    <div class="mt-32 rounded overflow-hidden h-fit">
                        <img src="/corny2.png" alt="interior" />
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4 h-full">
                    <div class="grid grid-cols-[2fr_1fr] gap-4">
                        <div class="mt-16 overflow-hidden  rounded">
                            <img src="/corny1.png" alt="interior" />
                        </div>
                        <div class="overflow-hidden h-full rounded">
                            <img src="/corny2.png" alt="interior" />
                        </div>
                    </div>
                    <div class="overflow-hidden rounded">
                        <img src="/corny1.png" alt="interior" />
                    </div>
                </div>
            </div>
            <div class="hidden gap-4 overflow-x-auto no-scrollbar max-sm:flex" id="mob-corny">
                <div class="w-full aspect-w-1 aspect-h-1">
                    <img class="rounded object-cover " src="/corny1.png" alt="huge image">
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    #corny img:not(#mob-corny img) {
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
