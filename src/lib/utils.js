// import type { z, ZodError } from 'zod'
import { z as ZOD } from 'zod';
import { serialize } from 'object-to-formdata';
import { zfd } from 'zod-form-data';

export const serializeNonPOJOs = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const formData = schema.parse(body);
		return {
			formData,
			errors: null
		};
	} catch (err) {
		console.log('Error:', err);
		// const errors = (err as ZodError).flatten();
		return {
			formData: body,
			// errors
			err
		};
	}
};
