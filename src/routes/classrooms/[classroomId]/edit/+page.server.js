import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/classrooms');
	}

	try {
		const result = await locals.pb.records.getOne('classrooms', params.classroomId);

		return {
			classroom: serializeNonPOJOs(result),
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
			const updatedClassroom = await locals.pb.records.update('classrooms', params.classroomId, {
				classroomNumber: data.classroomNumber,
				description: data.description,
				capacity: data.capacity
			});
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/classrooms');
	}
};
