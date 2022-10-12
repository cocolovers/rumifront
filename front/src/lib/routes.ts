import { Route } from './models/Route';

export const routes = {
	home: new Route('Home page', '/game', 'fa fa-home'),
	index: new Route('Index Page', '/game', 'fa fa-home'),
	login: new Route('Login page', '/game', 'fa fa-home'),
	settings: new Route('Settings', '/game/settings', 'fa fa-cog')
};

export const redirectToLogin = routes.login;
export const redirectToApp = routes.home;

export const menuHome = [routes.home, routes.settings];
export const menuNavbar = [routes.home, routes.settings];