import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	try {
		const resultList = await locals.pb.records.getList('classrooms', 1, 50, {
			sort: 'classroomNumber'
		});

		return {
			classrooms: serializeNonPOJOs(resultList),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};
