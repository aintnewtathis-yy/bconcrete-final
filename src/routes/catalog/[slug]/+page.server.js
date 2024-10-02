import { error } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
    const slug = url.pathname.replace('/catalog/', '');
    console.log(slug)
    const productUrl = `${CMS_URL}/api/products?filters[seo][slug][$eq]=${slug}&populate=*`;
    const productData = await fetchWithRetry(productUrl);

    if(!productData) {
        throw error(404, {
            message: 'Страница не найдена'
        })
    }

    return { 
        productData: productData.data[0]
    };
}
