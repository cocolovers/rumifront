import { io } from '../../functions/webSocketConnection';
import { EUser } from '../../enum/socket/user';
import { auth } from '../../mappers/auth';
import { useAuth } from '../../store/auth';
import { writable } from 'svelte/store';
import type { ISocketLoginResponse } from '../../interfaces/socket/ISocketLoginResponse';

export const userAuth = () => {
	const { register } = useAuth();
	const messageError = writable();

	return ({
		messageError,
		login: (detail: ISocketLoginResponse) => {
			io.emit(EUser.USER_CONNECT, auth(detail), (success: boolean, message: any) => {
				if (!success) {
					messageError.set(message);
					return;
				}

				register(message);
			});
		}
	});
};
