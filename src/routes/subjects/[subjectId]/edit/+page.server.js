import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/subjects');
	}

	try {
		const result = await locals.pb.records.getOne('subjects', params.subjectId);
		const professorList = await locals.pb.records.getList('professors', 1, 50);
		const careerList = await locals.pb.records.getList('careers', 1, 50);

		// const {id, professor} = result
		// const relationCareer = await locals.pb.records.getList('relationCareer', 1, 50, {
		// 	filter: 'created >= "2022-01-01 00:00:00"',
		// });
		// console.log(relationCareer)

		return {
			subject: serializeNonPOJOs(result),
			professors: serializeNonPOJOs(professorList),
			careers: serializeNonPOJOs(careerList),
			// relationCareer: serializeNonPOJOs(relationCareer),
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
			const updatedSubject = await locals.pb.records.update('subjects', params.subjectId, {
				nameSubject: data.nameSubject,
				duration: data.duration,
				year: data.year,
				professor: data.professor,
				career: data.career
			});
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/subjects');
	}
};
