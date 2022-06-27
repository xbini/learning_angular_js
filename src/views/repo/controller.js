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
