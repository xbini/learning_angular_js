import { repoDetailController } from "./repo-detail-controller";
import repoDetail from './repo-detail.html';
import './repo-detail-style.css';

const repoDetailState = {
  name: 'repoDetail',
  url: '/repos/:id',
  repoDetail,
  controller: repoDetailController
}

export { repoDetailState}
