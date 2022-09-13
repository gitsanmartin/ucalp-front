const base = import.meta.env.VITE_TEST_REMOTE_LOCAL_API

/**
 * @param {string} method
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 */
export function api(method, resource, data) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}