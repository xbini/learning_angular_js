// angular.module('repo.demo',['ngAnimate','ngSanitize', 'ui.bootstrap']);
// angular.module('repo.demo').controller('repoController', function ($scope, $uibModal, $uibModalInstance, repoService){
//   $scope.repos = [];
//   $scope.isLoadingRepos = true;
//   repoService.loadRepos()
//   .then(res => {
//     $scope.repos = res.data
//   })
//   .finally(() => $scope.isLoadingRepos = false);
//
//   $scope.openEditDialog = (repo) => {
//     console.log(repo)
//     $uibModal.open({
//       animation: $scope.animationsEnabled,
//       ariaLabelledBy: 'modal-title',
//       ariaDescribedBy: 'modal-body',
//       controller: 'dialogCtrl',
//       resolve: {
//         repos: function () {
//           return $scope.repos;
//         }
//       }
//     });
//       // template: "<form>" + "Please input here:" + "<input>" + repo.id  +
//       //     "</form>"
//     }
//
//
// })

const controller = function ($scope, $uibModal, repoService) {
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
      template: "<form>" + "todo: edit repo" + repo.id +
          "</form>"
    })
  };
}

const repoController = [ "$scope", "$uibModal", "repoService", controller ];

export { repoController }

  // const dialogCtrl = function ($scope, $uibModalInstance, repoService){
  //   $scope.repos = [];
  //   $scope.submit = function (){
  //
  //   }
  //   $scope.cancel = function (){
  //     $uibModalInstance.dismiss('cancel')
  //   };
  //
  // }


//
// const repoController = [ "$scope", "$uibModal", "repoService", controller ];
//
// export { repoController }
