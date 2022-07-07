const Controller = function ($scope, $uibModalInstance, $state, $http, repo ) {
  $scope.repo = repo;
  $scope.id = repo.id;
  $scope.title = repo.title;
  $scope.author = repo.author;

  $scope.cancel = function () {
    $uibModalInstance.close();
  };

//submit的逻辑：1保存修改后的内容 2patch传递给后端 3跳转至详情页
  $scope.edit = function (){
    if($scope.id)
    {
      repo.id = angular.copy($scope.id);
      console.log('repo.id', repo.id)
    }
    if ($scope.title)
    {
      repo.title = angular.copy($scope.title);
      console.log('repo.title', repo.title)
    }
    if($scope.author)
    {
      repo.author = angular.copy($scope.author);
      console.log('repo.author', repo.author)
    }
    console.log('$scope.repo', $scope.repo)


    const dataUpdate = $http.patch('repos/:id', $scope.repo);
    dataUpdate.then(function (res){
      $scope.repo = res.repo;
    });

    // $state.go('xxxxxxx'){$scope.repo}

    console.log('scope.update',dataUpdate)
    // $scope.dataUpdate = () => $http.patch(
    //     'repos/:id', $scope.repo)
    // .then(function successCallback(repo){
    //   repo = $scope.repo
    //     },
    //     function errorCallback(response){
    //     }
    // // );
    // console.log('scope.update',$scope.dataUpdate())
    $uibModalInstance.close();

    // $scope.dataUpdate = function (){
    //   $http({
    //     method:'PATCH',
    //     url:'/repos/:id',
    //     data: $scope.repo
    //   }).then()
    // }
    // $state.go('xxx');
    // console.log('repo', $scope.repo)
  };
  console.log('$scope.repo3', $scope.repo)

  // $scope.submit = function () {
  //   if($scope.edit){
  //     console.log('repo', $scope.repo)
  //     $state.go('/repo/id')
  //   }
  //   else {
  //     alert('error: Please edit correctly');
  //   }
  // }
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
  const popupController = ["$scope", "$uibModalInstance", "$state", "$http", "repo", Controller];

  export {popupController}