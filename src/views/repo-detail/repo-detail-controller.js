const Controller = function ($scope, $state, $http, $stateParams, $window) {
  const id = $stateParams.id;
  console.log('id',id)
  $scope.getRepoById = function(id) {
    $http.get("/api/repos/" + id).then(function(response){
      $scope.repo = response.data;
      // repo = $scope.repo;
      // console.log("getreallyrepo",repo);
    });
  }

  $scope.getRepoById(id);

  $scope.return = function () {
    const repoPage = $window.location.href;
    $window.history.back();
    $window.onpopstate = function() {
      if ($window.location.href === repoPage) {
        $state.go('/repos');
      }
    }};
}
const repoDetailController = [ "$scope", "$state", "$http","$stateParams", "$window", Controller ];

export {repoDetailController}