import { repoState } from "./views/repo/state";
import { repoDetailState} from "./views/repo-detail/repo-detail-state";

const router = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(repoState)
  $urlRouterProvider.when('', repoState.name);
};

const detailRouter = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(repoDetailState)
  $urlRouterProvider.when('',repoDetailState.url);
};


const appRouter = [ "$stateProvider", "$urlRouterProvider", router];
const repoDetailRouter = ["$stateProvider", "$urlRouterProvider", detailRouter]
export { appRouter, repoDetailRouter}
