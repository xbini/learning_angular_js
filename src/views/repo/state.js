import { repoController } from "./controller";
import template from './template.html';
import './style.css';

const repoState = {
  name: 'repos',
  url: '/repos',
  template: template,
  controller: repoController
}

export {repoState }
