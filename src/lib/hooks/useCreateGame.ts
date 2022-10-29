import type { UseCreateGame } from '../interfaces/hooks/UseCreateGame';
import { goto } from '$app/navigation';
import { useLog } from './useLog';
import { ECreateGame } from '../enum/game/create';

export const useCreateGame: UseCreateGame = () => {
	const { log } = useLog();

	const joinGame = () => {
		log(ECreateGame.JOIN_GAME, 'JOIN GAME');
	};

	const createGame = () => {
		goto('/game/asashzxzodasd87238mzx<z');
		log(ECreateGame.CREATE_GAME, 'CREATE GAME');
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