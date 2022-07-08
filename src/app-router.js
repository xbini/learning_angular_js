import { repoState } from "./views/repo/state";
import { repoDetailState} from "./views/repo-detail/repo-detail-state";

const router = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(repoState);
  $stateProvider.state(repoDetailState);
  $urlRouterProvider.when('', repoState.name);
  // '',repoDetailState.url
// ,
  // $stateProvider.state();
  // $urlRouterProvider.when();
};



const appRouter = [ "$stateProvider", "$urlRouterProvider", router];
export { appRouter }
