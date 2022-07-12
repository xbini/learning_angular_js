import popup from "./repo-popup/popup.html"
import addPopup from "./add-popup/addPopup.html"
import {popupController} from "./repo-popup/popup-controller";
import {addPopupController} from "./add-popup/addPopup-controller";
import './style.css'
import _ from "lodash";

const Controller = function ($scope, $uibModal, $http, repoService) {
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

  $scope.addRepo = () => {
    $uibModal.open({
      ariaDescribedBy: 'modal-body',
      template: addPopup,
      controller: addPopupController,
    });
  };
  // $scope.deleteRepo = (repo) => $http.delete("/api/repos",repo);
  // $scope.appendRepo

  $scope.delete = function (repo){
      // const index = $scope.repos.indexOf(repo);
      // $scope.repos.splice(index,1);
    const data = repo;
    $http.delete('/api/repos', JSON.stringify(data)).then(function (response) {
      console.log('data',JSON.stringify(data))
      if (response.data)

        $scope.msg = "Data Deleted Successfully!";

    }, function (response) {

      $scope.msg = "Service not Exists";

      $scope.statusval = response.status;

      $scope.statustext = response.statusText;

      $scope.headers = response.headers();

    });

  };


}
  // repoService.deleteRepo()
  // .then(res => {
  //   $scope.repos = res.data
  // })
  //     = function (repo) {
  //   const index = $scope.repos.indexOf(repo);
  //   $scope.repos.splice(index,1);
  // }



const repoController = [ "$scope", "$uibModal","$http", "repoService", Controller ];

export {repoController }