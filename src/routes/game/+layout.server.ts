import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async function(event) {
	return {
		session: event.locals.session
	};
};
