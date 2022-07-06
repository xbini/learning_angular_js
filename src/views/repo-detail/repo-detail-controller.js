const Controller = function ($scope, $state, repo ) {
  $scope.return = function () {
    $state.go('/repo')
  }
}
const repoDetailController = [ "$scope", "$uibModal","repo", Controller ];

export {repoDetailController}