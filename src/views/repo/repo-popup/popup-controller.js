const Controller = function ($scope, $uibModalInstance, $state, $http, repo) {
  $scope.repo = _.cloneDeep(repo)
  $scope.cancel = function () {
    $uibModalInstance.close();
  };
  $scope.submit = function (repo) {
    const updateUrl = `/api/repos/${repo.id}`;
    const dataUpdate = $http.patch(updateUrl, repo);
    dataUpdate.then(function (res) {
      $scope.repo = res.data;
      $state.go('repoDetail',
          {id: $scope.repo.id},
          {reload:true});
      $uibModalInstance.close();
    })
    .catch(e => console.error(e));

  };
}

const popupController = ["$scope", "$uibModalInstance", "$state", "$http",
  "repo", Controller];

export {popupController}