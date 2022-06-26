import { homeState } from "./views/home/state";

const router = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(homeState)
  $urlRouterProvider.when('', homeState.name);
};

const appRouter = [ "$stateProvider", "$urlRouterProvider", router ];

export { appRouter }
