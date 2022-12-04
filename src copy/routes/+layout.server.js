import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
	// console.log(JSON.parse(JSON.stringify(locals.user)))
	if (locals.user && locals.user.profile) {
		return {
			profile: serializeNonPOJOs(locals.user.profile)
		};
	}
};
