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

//submit的逻辑：1保存修改后的内容 2patch传递给后端 3跳转至详情页
  $scope.edit = function (){
    //逻辑：如果scope.id发生改变，则repo.id = 修改后的scope id
    if($scope.id)
    {
      repo.id = angular.copy($scope.id);
      console.log('$scope.id',$scope.id)
      console.log('repo.id', repo.id)
    }
    else if ($scope.title)
    {
      repo.id = angular.copy($scope.title);
    }
    else if($scope.author)
    {
      repo.author = angular.copy($scope.author);
    }
    return repo;
  }

  $scope.submit = function () {
    if($scope.edit){
      // $state.go('xxxxxxxx')
    }
    else {
      alert('error: Please edit correctly');
    }
  }
    // this.updateRepos = () => $http.patch(updateUrl, data)
    // .then(function () {
    //
    // })
    //
    // .error(function () {
    //
    // })
  }


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