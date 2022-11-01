// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async function(event: Parameters<LayoutServerLoad>[0]) {
	return {
		session: event.locals.session
	};
};
