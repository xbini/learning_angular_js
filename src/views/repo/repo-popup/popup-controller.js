const Controller = function ($scope, $uibModalInstance, repo) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.changedContent = function (input){

  };

  const updateUrl = '/repo/id';
  // const data = $.param({
  //   id: repo.id,
  //   title: repo.title,
  //   author: repo.author
  // })
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/example'
  //   }
  // }

  $scope.submit = function () {
    const id = $scope.id;
    const title = $scope.title;
    const author = $scope.author;
    this.updateRepos = () => $http.patch(updateUrl, data)
    .then(function () {
      $state.go('xxxxxxxx')
    })

    .error(function () {
      alert('error');
    })

  }
}

  const popupController = ["$scope", "$uibModalInstance", "repo", Controller];

  export {popupController}