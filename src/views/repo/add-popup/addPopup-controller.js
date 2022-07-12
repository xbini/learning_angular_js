import './addPopup.css'
import './addPopup.html'

const Controller = function ($scope, $uibModalInstance, $http, $window) {
  // $scope.repo = null;
  $scope.id = null;
  $scope.title = null;
  $scope.author = null;
  $scope.description = null;

  $scope.cancel = function () {
    $uibModalInstance.close();
  };
  $scope.confirm = function (id,title,author,description) {
    const repo = {
      id: id,
      title: title,
      author: author,
      description: description
    };
    $http.post('/api/repos', JSON.stringify(repo)).then(function (response) {
      if (response.repo)
        $uibModalInstance.close();
    }, function (response) {
    });
    $window.location.reload();
  };

}


const addPopupController = ["$scope", "$uibModalInstance","$http", "$window", Controller];

export {addPopupController}