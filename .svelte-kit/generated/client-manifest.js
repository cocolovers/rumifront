export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

			export const server_loads = [2];

			export const dictionary = {
	"/": [3],
	"/game": [4,[2]],
	"/game/join": [5,[2]],
	"/game/new": [6,[2]],
	"/game/settings": [7,[2]],
	"/game/[game]": [8,[2]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};