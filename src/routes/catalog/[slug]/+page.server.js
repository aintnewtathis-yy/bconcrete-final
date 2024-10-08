import { error } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
    const slug = url.pathname.replace('/catalog/', '');
    const population = [
        '&populate[0]=seo',
        '&populate[1]=seo.image',
        '&populate[2]=accordions',
        '&populate[3]=categories',
        '&populate[4]=colors',
        '&populate[5]=thumbnail',
        '&populate[6]=gallery',
    ]
    const productUrl = `${CMS_URL}/api/products?filters[seo][slug][$eq]=${slug}${population.join('')}`;
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
