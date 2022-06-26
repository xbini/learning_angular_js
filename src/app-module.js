import angular from 'angular';
import uiRouter from 'angular-ui-router'
import { appRouter } from "./app-router";
import { homeService } from "./services/home-service";

const appModule = angular.module('app', [ uiRouter ]);

appModule.config(appRouter);

appModule.service("homeService", homeService);

export { appModule }
