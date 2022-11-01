/** @type {import('@sveltejs/kit').Handle} */
import { config } from './lib/config/config';

export const handle = async ({ event, resolve }) => {
	event.locals.session = {
		user: JSON.parse(event.cookies.get(config.authKey) || '{}'),
		url: event.url.pathname
	};
	return await resolve(event);
};
