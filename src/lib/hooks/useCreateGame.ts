import type { UseCreateGame } from '../interfaces/hooks/UseCreateGame';
import { goto } from '$app/navigation';
import { useLog } from './useLog';
import { ECreateGame } from '../enum/game/create';
import { writable } from 'svelte/store';

export const useCreateGame: UseCreateGame = () => {
	const { log } = useLog();
	const loading = writable(false);

	const joinGame = () => {
		log(ECreateGame.JOIN_GAME, 'JOIN GAME');
	};

	const createGame = ({ detail }) => {
		loading.set(true);
		setTimeout(() => {
			const data = Object.fromEntries(detail);
			console.table(data);
			loading.set(false);
			goto('/game/asashzxzodasd87238mzx<z');
			log(ECreateGame.CREATE_GAME, 'CREATE GAME');
		}, 4000);
	};

	const restartGame = () => {
		log(ECreateGame.RESTART_GAME, 'RESTART GAME');
	};

	return {
		joinGame,
		createGame,
		restartGame
	};
};