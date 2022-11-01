// @ts-nocheck
import type { LayoutLoad } from './$types';
export const load = async function ({ data }: Parameters<LayoutLoad>[0]) {
	return {
		session: data.session
	};
};
