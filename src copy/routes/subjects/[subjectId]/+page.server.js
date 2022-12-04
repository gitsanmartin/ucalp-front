import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/subjects');
	}

	try {
		const result = await locals.pb.records.getOne('subjects', params.subjectId, {
			expand: 'professor'
		});

		return {
			subject: serializeNonPOJOs(result),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};

export const actions = {
	delete: async ({ locals, params }) => {
		try {
			try {
				const response = await locals.pb.records.delete('subjects', params.subjectId);
				// console.log('Eliminado', response)
				// return {
				// 	status: 302,
				// 	redirect: '/professors',
				// 	del: response
				// }
			} catch (err) {
				console.log('Errrror: ', err);
				throw error(500, 'something want wrong during professor submission');
			}
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true
			};
		}

		throw redirect(303, `/subjects`);
	}
};
