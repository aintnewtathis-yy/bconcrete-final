export async function fetchWithRetry(url, options = {}, retries = 2) {
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			const response = await fetch(url, options);
			const responseData = await response.json()

			if(responseData.data.length > 0) {
				return responseData
			} else if(attempt === retries) {
				return false
			}
		} catch (error) {
			if (attempt === retries) {
				return false
			}
		}
	}
}
