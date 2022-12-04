import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	try {
		const resultList = await locals.pb.records.getList('subjects', 1, 50, {
			expand: 'professor, career'
		});
		// console.log(resultList)

		// const { id, nameSubject, duration, year } = (resultList)

		// console.log(id, nameSubject)

		return {
			subjects: serializeNonPOJOs(resultList.items),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};
