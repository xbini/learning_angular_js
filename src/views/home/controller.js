const controller = function ($scope, homeService) {
  $scope.repos = [];
  $scope.isLoadingRepos = true;
  homeService.loadRepos()
  .then(res => {
    console.log(res)
    $scope.repos = res.data
  })
  .finally(() => $scope.isLoadingRepos = false);
}

const homeController = [ "$scope", "homeService", controller ];

export { homeController }
