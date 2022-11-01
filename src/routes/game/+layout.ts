import type { LayoutLoad } from './$types';
export const load: LayoutLoad = async function ({ data }) {
	return {
		session: data.session
	};
};
