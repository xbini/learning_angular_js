import popup from "./repo-popup/popup.html"
import addPopup from "./add-popup/addPopup.html"
import {popupController} from "./repo-popup/popup-controller";
import {addPopupController} from "./add-popup/addPopup-controller";
import './style.css'
import _ from "lodash";

const Controller = function ($scope, $uibModal, $http, repoService, $window) {
  $scope.repos = [];
  $scope.isLoadingRepos = true;
  repoService.loadRepos()
  .then(res => {
    $scope.repos = res.data
    console.log('res.data',res.data)
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

  $scope.addRepo = () => {
    $uibModal.open({
      ariaDescribedBy: 'modal-body',
      template: addPopup,
      controller: addPopupController,
    });
  };

  $scope.delete = function (repo) {
    repoService.deleteRepo(repo.id)
    .then(() => console.log("success"));
    $window.location.reload();
  };

}

const repoController = ["$scope", "$uibModal", "$http", "repoService","$window",
  Controller];

export {repoController}