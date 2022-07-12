import { repoDetailController } from "./repo-detail-controller";
import repoDetail from './repo-detail.html';
import './repo-detail-style.css';

const repoDetailState = {
  name: 'repoDetail',
  url: '/repos/:id',
  template: repoDetail,
  controller: repoDetailController,
  // resolve: {
  //   repo: function () {
  //     return repo;
  //   }
  // }
}

export { repoDetailState}
