import { error, fail } from "@sveltejs/kit";
import {
    CMS_URL,
    API_TELEGRAM_TOKEN,
    TELEGRAM_CHAT_ID,
} from "$env/static/private";
import { fetchWithRetry, validateData } from "$lib/utils.js";
import { productFormSchema } from "$lib/schemas.js";

export async function load({ fetch }) {
    try {
        const url = `${CMS_URL}/api/getHomeData`;
        const res = await fetchWithRetry(url);

        return {
            homeData: res.homeData,
            products: res.products,
            categories: res.categories,
            media: res.media,
        };
    } catch (err) {
        console.log(err);
        error(404, {
            message: err,
        });
    }
}

export const actions = {
    sendForm: async ({ request }) => {
        const form = await request.formData();

        try {
            const { formData, errors } = await validateData(
                form,
                productFormSchema,
            );

            if (errors) {
                return fail(400, {
                    formData: formData,
                    errors: errors.fieldErrors,
                });
            }

            const message = `Заявка с bazhenovconcrete.ru:\nМодель: ${formData?.model}\nЦвет: ${formData?.color}\nИмя: ${formData.name}\nСпособ связи: ${formData.reachOutWay}\nГород: ${formData.city}\nКомментарий: ${formData.addInfo}`;

            const req = await fetch(
                `https://api.telegram.org/bot${API_TELEGRAM_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                    }),
                },
            );

            const res = await req.json();

            return { success: true };
        } catch (err) {
            console.log(err, "err");
            return fail(401, {
                formData: formData,
            });
        }
    },
};
