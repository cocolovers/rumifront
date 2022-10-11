import {writable} from "svelte/store";
import type {IAuth} from "../interfaces/IAuth";
import type {IUser} from "../interfaces/IUser";
import {auth} from "../mappers/auth";
import {goto} from '$app/navigation'
import {redirectToApp} from "../routes";
import {config} from "../config/config";

export const authStore = writable<IAuth>()

export const useAuth = () => {
  const setLocalStorage = (user: IUser) => localStorage.setItem(config.authKey, JSON.stringify(user))
  const register = (user: IUser) => {
    if (!user) return;
    authStore.set(user)
    setLocalStorage(user)
    goto(redirectToApp)
  }

  return {
    auth,
    register
  }
}