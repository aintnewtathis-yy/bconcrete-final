import { error, fail } from "@sveltejs/kit";
import {
    CMS_URL,
    API_TELEGRAM_TOKEN,
    TELEGRAM_CHAT_ID,
} from "$env/static/private";
import { fetchWithRetry, validateData } from "$lib/utils.js";
import { productFormSchema } from "$lib/schemas.js";

export async function load({ url }) {
    const slug = url.pathname.replace("/catalog/", "");
    const population = [
        "&populate[0]=seo",
        "&populate[1]=seo.image",
        "&populate[2]=accordions",
        "&populate[3]=categories",
        "&populate[4]=colors",
        "&populate[5]=thumbnail",
        "&populate[6]=gallery",
    ];
    const productUrl = `${CMS_URL}/api/products?filters[seo][slug][$eq]=${slug}${population.join("")}`;
    const productData = await fetchWithRetry(productUrl);

    if (!productData) {
        throw error(404, {
            message: "Страница не найдена",
        });
    }

    return {
        productData: productData.data[0],
    };
}
