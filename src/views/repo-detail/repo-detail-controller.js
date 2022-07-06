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
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: popup,
      controller: 'popupController',
      resolve: {
        repo: function () {
          return repo;
        }
      }
    });
  };

  $scope.return = function () {
    $state.go('/repo')
  }
}

const repoDetailController = [ "$scope", "$uibModal", "repoService", Controller ];

export {repoDetailController}