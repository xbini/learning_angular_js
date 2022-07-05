const Controller = function ($scope, $uibModalInstance, repo) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;
  console.log('repoinpopup',$scope.repo)
  console.log('scopeid',$scope.id)


  // $scope.cancel = function () {
  //   $uibModalInstance.dismiss('cancel')
  // };


  // const updateUrl = '/repo/id';
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

  // $scope.submit = function () {
  //   const id = $scope.repo.id;
  //   const title = $scope.repo.title;
  //   const author = $scope.repo.author;
  //   //success -> state go 详情页面
  //   // error -> 报错
  //   this.updateRepos = () => $http.patch(updateUrl, data, config)
  //   .success(function () {
  //     $state.go('xxxxxxxx')
  //   })
  //
  //   .error(function () {
  //     alert('error');
  //   })
  //
  // }
}

  const popupController = ["$scope", "$uibModalInstance", "repo", Controller];

  export {popupController}