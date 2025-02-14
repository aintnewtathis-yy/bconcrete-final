<script>
    import { applyAction, enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import { page } from "$app/state";
    import { fade } from "svelte/transition";
    import { popupState } from "$lib/globals.svelte.js";
    import { afterNavigate } from "$app/navigation";

    let { action = "/?/sendForm", model, color } = $props();

    let errors = $derived(page.form?.errors);
    let formData = $derived(page.form?.data);
    let filled = $state(false);

    function openSheet() {
        $popupState = !$popupState;
    }

    afterNavigate(() => {
        filled = false;
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="fixed inset-0 left-0 top-0 z-50 h-dvh w-screen bg-black/30 backdrop-blur-sm transition duration-300"
    class:pointer-events-all={$popupState}
    class:opacity-0={!$popupState}
    class:pointer-events-none={!$popupState}
    onclick={() => {
        $popupState = false;
    }}
></div>

{#if $popupState}
    <div
        transition:fade={{ duration: 300 }}
        class="fixed left-1/2 top-1/2 z-50 flex h-fit w-[calc(100%-20px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-8 py-8 shadow-lg transition duration-300 max-lg:w-3/5 max-sm:bottom-[10px] max-sm:top-auto max-sm:w-[calc(100%-20px)] max-sm:translate-y-0 max-sm:p-5"
    >
        <div class="flex w-full flex-col gap-7" in:fade>
            {#if !filled}
                <!-- <p class="text-3xl max-md:w-11/12">Заявка</p> -->
                <form
                    {action}
                    method="POST"
                    use:enhance={({ formElement, formData, cancel }) => {
                        return async ({ result }) => {
                            console.log(result.type);

                            if (result.type === "success") {
                                filled = true;
                                await applyAction(result);
                                formElement.reset();
                                await invalidateAll();
                            } else {
                                await applyAction(result);
                            }
                        };
                    }}
                    class="flex flex-col gap-4"
                >
                    <input type="hidden" name="model" value={model} />
                    <input type="hidden" name="color" value={color} />
                    <div class="flex flex-col gap-2">
                        <label for="name" class="font-medium text-black">
                            Имя
                        </label>
                        <input
                            type="text"
                            name="name"
                            class="basic-input"
                            id="name"
                            value={formData?.name ?? ""}
                            class:border-red-400={errors?.name?.length > 0}
                        />
                        <p class="text-xs text-red-400">
                            {#if errors?.name?.length > 0}
                                {errors.name[0]}
                            {/if}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="reachOutWay" class="font-medium text-black">
                            Способ связи
                        </label>
                        <input
                            type="text"
                            name="reachOutWay"
                            class="basic-input"
                            id="reachOutWay"
                            value={formData?.reachOutWay ?? ""}
                            class:border-red-400={errors?.reachOutWay?.length >
                                0}
                        />
                        <p class="text-xs text-red-400">
                            {#if errors?.reachOutWay?.length > 0}
                                {errors.reachOutWay[0]}
                            {/if}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="city" class="font-medium text-black">
                            Город
                        </label>
                        <input
                            type="text"
                            name="city"
                            class="basic-input"
                            id="city"
                            value={formData?.city ?? ""}
                            class:border-red-400={errors?.city?.length > 0}
                        />
                        <p class="text-xs text-red-400">
                            {#if errors?.city?.length > 0}
                                {errors.city[0]}
                            {/if}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="addInfo" class="font-medium text-black">
                            Комментарий
                        </label>
                        <textarea
                            name="addInfo"
                            class="basic-input min-h-[100px]"
                            id="addInfo"
                            value={formData?.addInfo ?? ""}
                            class:border-red-400={errors?.addInfo?.length > 0}
                        ></textarea>

                        <p class="text-xs text-red-400">
                            {#if errors?.addInfo?.length > 0}
                                {errors.addInfo[0]}
                            {/if}
                        </p>
                    </div>
                    <p class="text-sm mt-4 text-zinc-500">
                        Нажимая "Отправить заявку" вы соглашаетесь с обработкой
                        персональных данных
                    </p>
                    <button class="btn-black w-full" type="submit">
                        Отправить заявку
                    </button>
                </form>
            {:else}
                <div class="flex flex-col gap-8" in:fade>
                    <p class="text-3xl max-md:w-11/12">Заявка отправлена</p>
                    <p class="text-lg">
                        Благодарим за вашу заявку! <br />
                        Менеджер свяжется с вами в ближайшее время
                    </p>
                </div>
            {/if}
        </div>
        <button
            type="button"
            class="fixed right-4 top-4 h-5 w-5 p-1"
            onclick={openSheet}
        >
            <img
                class="w-full object-contain"
                src="/cross.svg"
                alt="cross icon"
            />
        </button>
    </div>
{/if}
