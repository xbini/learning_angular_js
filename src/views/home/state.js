import { homeController } from "./controller";
import template from './template.html';
import './style.css';

const homeState = {
  name: 'home',
  url: '/home',
  template,
  controller: homeController
}

export { homeState }
