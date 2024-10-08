import { error } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
    const slug = url.pathname.replace('/media/', '');
    const population = [
        '&populate[0]=seo',
        '&populate[1]=seo.image',
        '&populate[2]=infoBlock',
        '&populate[3]=infoBlock.image',
        '&populate[4]=thumbnail',
        '&populate[5]=categories',
    ]

    const articleUrl = `${CMS_URL}/api/media?filters[seo][slug][$eq]=${slug}${population.join('')}`;
    const articleData = await fetchWithRetry(articleUrl);

    if(!articleData) {
        throw error(404, {
            message: 'Страница не найдена'
        })
    }

    return { 
        articleData: articleData.data[0]
    };
}
