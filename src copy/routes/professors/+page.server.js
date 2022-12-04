import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	// console.log(locals.pb.authStore.isValid)
	// si no inicio sesion puede ver la lista de profesores
	// if (!locals.pb.authStore.isValid) {
	// 	throw redirect(303, '/');
	// }

	try {
		const resultList = await locals.pb.records.getList('professors', 1, 50);
		// const resultList = await locals.pb.records.getList('professors', 1, 50, {
		// 	filter: 'created >= "2022-01-01 00:00:00"',
		// });

		return {
			professors: serializeNonPOJOs(resultList),
			isValid: locals.pb.authStore.isValid
		};
		// return resultList
		console.log(resultList);
	} catch (error) {
		return error;
	}
};
