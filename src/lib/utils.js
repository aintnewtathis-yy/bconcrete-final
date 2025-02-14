export async function fetchWithRetry(url, options = {}, retries = 2) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const req = await fetch(url, options);

            if (!req.ok) {
                throw new Error(`HTTP error! Status: ${req.status}`);
            }

            const res = await req.json();

            if (res !== null && res !== undefined) {
                return res;
            }
        } catch (error) {
            if (attempt === retries) {
                console.error(`Fetch failed after ${retries} attempts:`, error);
                return null;
            }
        }
    }
}

export const validateData = async (formData, schema) => {
    const body = Object.fromEntries(formData);

    try {
        const data = schema.parse(body);
        return {
            formData: data,
            errors: null,
        };
    } catch (err) {
        const errors = err.flatten();
        return {
            formData: body,
            errors,
        };
    }
};
