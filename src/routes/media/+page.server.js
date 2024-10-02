import { CMS_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { fetchWithRetry } from '$lib/utils.js';

export async function load() {
	try {
		const mediaUrl = `${CMS_URL}/api/media?populate=*`
		const mediaData = await fetchWithRetry(mediaUrl);

		const categoriesUrl = `${CMS_URL}/api/media-categories?populate=*`
		const categoriesData = await fetchWithRetry(categoriesUrl);

		return {
            media: mediaData.data,
            categories: categoriesData.data,
        };
	} catch (err) {
		console.log(err);
		error(404, {
			message: err
		});
	}
}
