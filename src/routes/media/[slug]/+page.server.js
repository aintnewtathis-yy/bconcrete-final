import { error } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
    const slug = url.pathname.replace('/media/', '');
    const articleUrl = `${CMS_URL}/api/media?filters[seo][slug][$eq]=${slug}&populate=*`;
    const articleData = await fetchWithRetry(articleUrl);

    if(!articleData) {
        throw error(404, {
            message: 'Страница не найдена'
        })
    }

    return { 
        articleData
    };
}
