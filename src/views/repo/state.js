import { repoController } from "./controller";
import template from './template.html';
import './style.css';

const repoState = {
  name: 'repo',
  url: '/repo',
  template,
  controller: repoController
}

export {repoState}
