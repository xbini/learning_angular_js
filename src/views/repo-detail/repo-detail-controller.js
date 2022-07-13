const Controller = function ($scope, $state, $http, $stateParams, $window,
    repoService) {

  $scope.setLoading = function(loading) {
    $scope.isLoading = loading;
  }
  const id = $stateParams.id;
  $scope.setLoading(true);
  repoService.getRepoById(id)
  .then(function (response) {
    $scope.repo = response.data
  })
  .finally(() => $scope.setLoading(false));
  $scope.return = function () {
    $state.go('repos');

  };

}

const repoDetailController = ["$scope", "$state", "$http", "$stateParams",
  "$window", "repoService", Controller];

export {repoDetailController}