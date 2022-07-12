import './popup.css'
// fixme：去掉不必要的引用
import {repoDetailState} from "../../repo-detail/repo-detail-state";

const Controller = function ($scope, $uibModalInstance, $state, $http, repo) {
  // fixme: $scope.repo = _.cloneDeep(repo), 然后就没必要在把所有字段都单独绑定在scope上了，在angular里scope上的东西要尽可能的少，因为实现数据绑定，angular会为所有scope上的字段都创建watcher监听它们的变化
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
    // fixme: 这底下这些判断作用？
    // fixme: 如果是想实现类似提交时检查repo变更前后是否有变化，可以使用lodash里提供的对象判断方法，具体那个方法忘记了，你可能需要翻越一下文档
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