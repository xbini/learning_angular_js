import angular from 'angular';
import uiRouter from 'angular-ui-router'
import uiBootstrap from 'angular-ui-bootstrap'
import { appRouter, repoDetailRouter } from "./app-router";
import { repoService } from "./services/repo-service";

const appModule = angular.module('app', [ uiRouter, uiBootstrap ]);

appModule.config(appRouter, repoDetailRouter);

appModule.service("repoService", repoService);

export { appModule }
