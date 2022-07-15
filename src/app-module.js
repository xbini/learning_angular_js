import angular from 'angular';
import uiRouter from 'angular-ui-router'
import uiBootstrap from 'angular-ui-bootstrap'
import { appRouter } from "./app-router";
import { repoService } from "./services/repo-service";

const appModule = angular.module('app', [ uiRouter, uiBootstrap ]);

appModule.config(appRouter);

appModule.service("repoService", repoService);

appModule.directive("stars",)

export { appModule }
