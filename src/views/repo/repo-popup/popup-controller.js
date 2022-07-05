const Controller = function ($scope, $uibModalInstance, $state, repo) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;
  // $scope.selectedOption = $scope.id;

  $scope.cancel = function () {
    $uibModalInstance.close();
  };

  $scope.update = function (inputContent){

    $scope.repo = angular.copy(inputContent);
    $scope.repo = angular.copy(repo.title);
    $scope.repo = angular.copy(repo.author);
  };

  }
  //submit的逻辑： 1.根据select的选项 将input的值update进去 2.点击submit 获取更新后的json文件
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