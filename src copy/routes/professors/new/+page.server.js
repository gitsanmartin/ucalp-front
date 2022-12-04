import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { serialize } from 'object-to-formdata';
import { error, invalid, redirect } from '@sveltejs/kit';

const professorSchema = zfd.formData({
	firstName: z.string().min(1).max(40).trim(),
	lastName: z.string().min(1).max(40).trim(),
	color: z.string().min(1).max(20).trim()
});

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/professors');
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		let formObj;
		try {
			formObj = professorSchema.parse(await request.formData());
			formObj.user = locals.user.id;
			const formData = serialize(formObj);

			try {
				const record = await locals.pb.records.create('professors', formData);
			} catch (err) {
				console.log('Errrror: ', err);
				throw error(500, 'something want wrong during professor submission');
			}
		} catch (error) {
			if (error?.status === 500) {
				throw error(500, 'un error ocurrio');
			}

			const { fieldError: errors } = error.flatten();

			return invalid(400, {
				data: formObj,
				errors
			});
		}

		throw redirect(303, `/professors`);
	}
};
