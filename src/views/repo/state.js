import { repoController } from "./controller";
import template from './template.html';
import './style.css';

const repoState = {
  name: 'repo',
  url: '/repo',
  template,
  controller: repoController
}

// const repoPopup = {
//   name: 'repoPopup',
//   url: 'repo/:id',
//   popupPage,
//   method: patch,
//   controller: repoController
// }
//
// const repoReturn = {
//   name: 'repoReturn',
//   url: '/repos/:id',
//   detail,
//   controller: repoController
// }

// export { repoState,repoPopup,repoReturn }
export { repoState}
