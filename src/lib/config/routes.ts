import {Route} from '../models/Route';

export const routes = {
  home: new Route('Home page', '/game', 'fa fa-home'),
  index: new Route('Index Page', '/game', 'fa fa-home'),
  login: new Route('Login page', '/', 'fa fa-home'),
  settings: new Route('Settings', '/game/settings', 'fa fa-cog'),
  searchGame: new Route('Join Game', '/game/join', 'fa fa-search'),
  newGame: new Route('New Game', '/game/new', 'fa fa-add'),
};

export const redirectToLogin = routes.login;
export const redirectToApp = routes.home;

export const menuHome = [routes.home, routes.newGame, routes.searchGame, routes.settings];
export const menuNavbar = [routes.home, routes.settings];