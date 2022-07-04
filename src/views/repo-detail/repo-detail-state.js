import { repoDetailController } from "./repo-detail-controller";
import repoDetail from './repo-detail.html';
import './repo-detail-style.css';

const repoDetailState = {
  name: 'repoDetail',
  url: '/repo/id',
  repoDetail,
  controller: repoDetailController
}

export { repoDetailState}
