const Controller = function ($scope, $uibModalInstance, $state, repo) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;

  $scope.cancel = function () {
    // $uibModalInstance.dismiss('cancel');
    // 使用dismiss报警告
    $uibModalInstance.close();
  };

//submit的逻辑：把修改后的内容 传递给后端 跳转至详情页
  $scope.submit = function (repo){
    $scope.repo = angular.copy(repo.id);
    $scope.repo = angular.copy(repo.title);
    $scope.repo = angular.copy(repo.author);
  };

  }
  // $scope.submit = function () {
  //   $state.go('xxxxxxxx')
    // const id = $scope.id;
    // const title = $scope.title;
    // const author = $scope.author;
    // this.updateRepos = () => $http.patch(updateUrl, data)
    // .then(function () {
    //
    // })

    // .error(function () {
    //   alert('error');
    // })

  // }

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
  const popupController = ["$scope", "$uibModalInstance", "$state", "repo", Controller];

  export {popupController}