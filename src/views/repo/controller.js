import popup from "./repo-popup/popup.html"
import {popupController} from "./repo-popup/popup-controller";
import './style.css'
import _ from "lodash";

const Controller = function ($scope, $uibModal, repoService) {
  $scope.repos = [];
  $scope.isLoadingRepos = true;
  repoService.loadRepos()
  .then(res => {
    $scope.repos = res.data
  })
  .finally(() => $scope.isLoadingRepos = false);

  $scope.openEditDialog = (repo) => {
    console.log(repo)
    $uibModal.open({
      ariaDescribedBy: 'modal-body',
      template: popup,
      controller: popupController,
      resolve: {
        repo: function () {
          return _.cloneDeep(repo);
        }
      }
    });
  };
}

const repoController = [ "$scope", "$uibModal", "repoService", Controller ];

export {repoController }