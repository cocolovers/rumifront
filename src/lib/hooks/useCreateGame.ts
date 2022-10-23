import type { UseCreateGame } from '../interfaces/hooks/UseCreateGame';
import repository from '../config/repository';
import { goto } from '$app/navigation';

export const useCreateGame: UseCreateGame = () => {
	const joinGame = () => {
		repository.logs.log('JOIN GAME');
	};

	const createGame = () => {
		goto('/game/asashzxzodasd87238mzx<z');
		repository.logs.log('CREATE GAME');
	};

	const restartGame = () => {
		repository.logs.log('RESTART GAME');
	};

	return {
		joinGame,
		createGame,
		restartGame
	};
};