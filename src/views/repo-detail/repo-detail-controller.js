const Controller = function ($scope, $state, $http, $stateParams, $window, repoService) {
  const id = $stateParams.id;
  console.log('id',id)

  // repoService.getRepoById(id)
  // .then(res => {
  //   $scope.repo = res.data
  // })
  // error: Cannot read properties of undefined (reading 'getRepoById')

  $scope.getRepoById = function(id) {
    $http.get("/api/repos/" + id).then(function(response){
      $scope.repo = response.data;
      // repo = $scope.repo;
      // console.log("getreallyrepo",repo);
    });
  }


  $scope.getRepoById(id);

  $scope.return = function () {
    $window.history.back();
    // $state.go('/repos');
    // error: cannot resolve /repos from state repo-detail
  };
}
const repoDetailController = [ "$scope", "$state", "$http","$stateParams", "$window", Controller ];

export {repoDetailController}