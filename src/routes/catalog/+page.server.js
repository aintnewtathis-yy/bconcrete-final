import { CMS_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { fetchWithRetry } from '$lib/utils.js';

export async function load() {
	try {
		const productsUrl = `${CMS_URL}/api/products?populate=*`
		const productsData = await fetchWithRetry(productsUrl);

		const categoriesUrl = `${CMS_URL}/api/categories?populate=*`
		const categoriesData = await fetchWithRetry(categoriesUrl);

		return {
            products: productsData.data,
            categories: categoriesData.data,
        };
	} catch (err) {
		console.log(err);
		error(404, {
			message: err
		});
	}
}
