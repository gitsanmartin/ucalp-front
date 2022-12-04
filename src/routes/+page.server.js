import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	try {
		const scheduletList = await locals.pb.records.getList('schedules', 1, 50, {
			expand: 'classroom, subject',
			sort: 'starTime'
		});
		const classroomList = await locals.pb.records.getList('classrooms');
		// const relation = await locals.pb.records.getList('schedules', {
		//     expand: 'classrooms'
		// })
		// const classroomNumber = [... new Set(scheduletList.items?.["@expand"]?.classroom.classroomNumber)]
		// console.log(scheduletList.items?.["@expand"]?.classroom.classroomNumber)

		// const table = {
		// 	classroomNumber
		// }
		// let lista = {}
		// scheduletList.forEach(element => {
		// 	const classNumber = element?.["@expand"]?.classroom.classroomNumber
		// 	if (!lista[classNumber]) {
		// 		lista[classNumber] = []
		// 	}
		// 	lista[classNumber].push({
		// 		classroomNumber: element?.["@expand"]?.classroom.classroomNumber,
		// 		startTime: element.starTime,
		// 		endTime: element.endTime
		// })

		// console.log(lista)

		return {
			schedules: serializeNonPOJOs(scheduletList),
			classrooms: serializeNonPOJOs(classroomList),
			// lista: lista,
			// relation: serializeNonPOJOs(relation),
			// table,
			isValid: locals.pb.authStore.isValid
		};
	} catch (error) {
		return error;
	}
};
