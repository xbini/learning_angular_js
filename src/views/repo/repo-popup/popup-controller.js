// const Controller = function ($scope, $uibModalInstance, $state, $http, repo) {
//   $scope.repo = _.cloneDeep(repo)
//
//   console.log("scoperepo",$scope.repo)
//
//   $scope.cancel = function () {
//     $uibModalInstance.close();
//   };
//
// //submit的逻辑：1保存修改后的内容 2patch传递给后端 3跳转至详情页
//   $scope.submit = function () {
//     // if ($scope.title) {
//     //   repo.title = angular.copy($scope.title);
//     // }
//     // if ($scope.author) {
//     //   repo.author = angular.copy($scope.author);
//     // }
//     // if ($scope.description) {
//     //   repo.description = angular.copy($scope.description);
//     // }
//     const updateUrl = '/api/repos/' + repo.id;
//     const dataUpdate = $http.patch(updateUrl, repo);
//     console.log('repo',repo)
//     dataUpdate.then(function (res) {
//       $scope.repo = res.data;
//       console.log('$scope.repo',$scope.repo)
//       $state.go('repoDetail',
//           {id: $scope.repo.id},
//           {reload:true});
//       $uibModalInstance.close();
//     }).catch(e => console.error(e));
//
//
//   };
// }
//
// const popupController = ["$scope", "$uibModalInstance", "$state", "$http",
//   "repo", Controller];
//
// export {popupController}

// --------

const Controller = function ($scope, $uibModalInstance, $state, $http, repo) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;
  $scope.description = repo.description;


  $scope.cancel = function () {
    $uibModalInstance.close();
  };

//submit的逻辑：1保存修改后的内容 2patch传递给后端 3跳转至详情页
  $scope.submit = function () {
    if ($scope.title) {
      repo.title = angular.copy($scope.title);
    }
    if ($scope.author) {
      repo.author = angular.copy($scope.author);
    }
    if ($scope.description) {
      repo.description = angular.copy($scope.description);
    }
    const updateUrl = '/api/repos/' + repo.id;
    const dataUpdate = $http.patch(updateUrl, repo);
    dataUpdate.then(function (res) {
      $scope.repo = res.data;
      $state.go('repoDetail',
          {id: $scope.repo.id},
          {reload:true});
      $uibModalInstance.close();
    }).catch(e => console.error(e));
    console.log('$scope.repo',$scope.repo)

  };
}

const popupController = ["$scope", "$uibModalInstance", "$state", "$http",
  "repo", Controller];

export {popupController}