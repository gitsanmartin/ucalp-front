import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { serialize } from 'object-to-formdata';
import { error, invalid, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

const scheduleSchema = zfd.formData({
	classroom: z.string().min(1).max(40).trim(),
	subject: z.string().min(1).max(40).trim(),
	day: z.string().min(1).max(20).trim(),
	startHour: z.string().min(1).max(20).trim(),
	endHour: z.string().min(1).max(20).trim()
});

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}

	try {
		const classroom = await locals.pb.records.getList('classrooms', 1, 50, {
			sort: 'classroomNumber'
		});
		const subjects = await locals.pb.records.getList('subjects');

		return {
			classrooms: serializeNonPOJOs(classroom),
			subjects: serializeNonPOJOs(subjects),
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		let formObj;
		// console.log('create method')
		// formObj = scheduleSchema.parse( await request.formData())
		// formObj.starTime = new Date('2022-01-01 00:00:00.000Z')
		// formObj.starTime.setUTCMonth(7)
		// formObj.starTime.setUTCDate(2)
		// formObj.starTime.setUTCHours(formObj.startHour)
		// formObj.endTime = '2022-08-01 13:00:00'
		// console.log('la dataza: ', formObj)
		try {
			formObj = scheduleSchema.parse(await request.formData());
			formObj.user = locals.user.id;

			formObj.starTime = new Date('2022-01-01 00:00:00.000Z');
			formObj.endTime = new Date('2022-01-01 00:00:00.000Z');

			formObj.starTime.setUTCMonth(7);
			formObj.endTime.setUTCMonth(7);

			if (formObj.day === 'lunes') {
				formObj.starTime.setUTCDate(1);
				formObj.endTime.setUTCDate(1);
			}
			if (formObj.day === 'martes') {
				formObj.starTime.setUTCDate(2);
				formObj.endTime.setUTCDate(2);
			}
			if (formObj.day === 'miercoles') {
				formObj.starTime.setUTCDate(3);
				formObj.endTime.setUTCDate(3);
			}
			if (formObj.day === 'jueves') {
				formObj.starTime.setUTCDate(4);
				formObj.endTime.setUTCDate(4);
			}
			if (formObj.day === 'viernes') {
				formObj.starTime.setUTCDate(5);
				formObj.endTime.setUTCDate(5);
			}
			// formObj.starTime.setUTCDate(2)
			formObj.starTime.setUTCHours(formObj.startHour);
			formObj.endTime.setUTCHours(formObj.endHour);
			// formObj.endTime = '2022-08-01 13:00:00'

			const formData = serialize(formObj);

			// console.log('el user: ', formObj.user)
			// console.log('la dataza: ', formObj)
			try {
				const record = await locals.pb.records.create('schedules', formData);
				// console.log('el registro: ', record)
			} catch (err) {
				// console.log('Errrror: ', err)
				throw error(500, 'something want wrong during professor submission');
			}
		} catch (error) {}

		throw redirect(303, `/`);
	}
};
