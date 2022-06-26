import angular from "angular";
import { appModule } from "./app-module";
import './app.css';

angular.element(document).ready(() => {
  angular.bootstrap(document, [ appModule.name ]);
});
