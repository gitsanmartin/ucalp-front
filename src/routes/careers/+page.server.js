import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		const resultList = await locals.pb.records.getList('careers', 1, 50);

		return {
			careers: serializeNonPOJOs(resultList),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};
