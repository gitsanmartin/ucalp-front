import { error, invalid, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

export const getProfessor = async (locals, id) => {
	try {
		const professor = serializeNonPOJOs(await locals.pb.collection('professors').getOne(id));

		return professor;
	} catch (err) {
		if (err instanceof ClientResponseError) {
			throw error(err.status, err.data.message);
		} else {
			throw error(500, 'Something went wrong getting the project');
		}
	}
};
