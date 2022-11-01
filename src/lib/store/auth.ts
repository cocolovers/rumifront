import { writable } from 'svelte/store';
import type { IAuth } from '../interfaces/IAuth';
import type { IUser } from '../interfaces/IUser';
import { auth } from '../mappers/auth';
import { goto } from '$app/navigation';
import { redirectToApp } from '../config/routes';
import { setCookie } from '../functions/cookie';
import { config } from '../config/config';

export const authStore = writable<IAuth>();

export const useAuth = () => {
	const setLocalStorage = (user: IUser) => setCookie(config.authKey, JSON.stringify(user), 10);

	const register = (user: IUser) => {
		if (!user) return;
		authStore.set(user);
		setLocalStorage(user);
		goto(redirectToApp.href);
	};

	return {
		auth,
		register
	};
};