import {authStore} from "../../lib/store/auth";
import {get} from "svelte/store";
import {redirect} from "@sveltejs/kit";
import {redirectToLogin} from "../../lib/routes";
import {config} from "$lib/config/config";

export let ssr = false;

export let load = (data: any) => {
  const user = localStorage.getItem(config.authKey)

  if (!get(authStore)) {
    if (!user) {
      throw redirect(307, redirectToLogin);
    }

    authStore.set(JSON.parse(user))
  }

  localStorage.setItem(config.authKey, JSON.stringify(get(authStore)))
  return {}
}