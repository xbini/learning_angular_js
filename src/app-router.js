import { repoState } from "./views/repo/state";

const router = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(repoState)
  $urlRouterProvider.when('', repoState.name);
};

const appRouter = [ "$stateProvider", "$urlRouterProvider", router ];

export { appRouter }
