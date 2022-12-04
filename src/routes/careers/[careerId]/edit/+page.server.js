import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/careers');
	}

	try {
		const result = await locals.pb.records.getOne('careers', params.careerId);

		return {
			career: serializeNonPOJOs(result),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};

export const actions = {
	update: async ({ locals, request, params }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const updatedCareer = await locals.pb.records.update('careers', params.careerId, {
				nameCareer: data.nameCareer
			});
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/careers');
	}
};
