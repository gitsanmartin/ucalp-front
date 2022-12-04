import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/professors');
	}

	try {
		const result = await locals.pb.records.getOne('professors', params.professorId);
		// const result = await locals.pb.records.getList('professors', 1, 50);
		// console.log(result)
		return {
			professor: serializeNonPOJOs(result),
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
			const updatedProfessor = await locals.pb.records.update('professors', params.professorId, {
				firstName: data.firstName,
				lastName: data.lastName,
				color: data.color
			});
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/professors');
	}
};
