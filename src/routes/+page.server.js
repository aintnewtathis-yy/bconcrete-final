import { CMS_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ fetch }) {
    try {
        /* const productsUrl = `${CMS_URL}/api/products?populate=*`;
        const productsData = await fetchWithRetry(productsUrl);

        const categoriesUrl = `${CMS_URL}/api/categories?populate=*`;
        const categoriesData = await fetchWithRetry(categoriesUrl);

        const mediaUrl = `${CMS_URL}/api/media?populate=*`;
        const mediaData = await fetchWithRetry(mediaUrl); */

        const url = `${CMS_URL}/api/getHomeData`;
        const res = await fetchWithRetry(url);

        console.log(res)

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
