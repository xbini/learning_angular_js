// const Controller = function ($scope,repo){
//   $scope.repo = _.cloneDeep(repo)
//   console.log('sr',$scope.repo)
// }
//
// const stars = function directive(){
//   const directive = {};
//   directive.restrict = 'EA';
//   directive.template = "{{repo.stars}}";
//   directive.compile = function (){
//     return function ($scope, element) {
//       if ($scope.repo.stars === 0)
//         element.css("background-color", "#808080");
//       if (100 > $scope.repo.stars && $scope.repo.stars > 0)
//         element.css("background-color", "#008000");
//       if (1000 > $scope.repo.stars && $scope.repo.stars >= 100)
//         element.css("background-color", "#ffA500");
//       if ($scope.repo.stars >= 1000)
//         element.css("background-color", "#ff0000");
//     };
//   }
//   return directive;
//
// }


// ------

angular
.module("app", [])
.directive('stars',directive);

function directive(){
  return {
    restrict :'EAC',
    scope:{
      repo:'='
    },
    template : "{{repo.stars}}",
    link: function ($scope,element) {
      if ($scope.repo.stars === 0)
        element.css("background-color", "#808080");
      if (100 > $scope.repo.stars && $scope.repo.stars > 0)
        element.css("background-color", "#008000");
      if (1000 > $scope.repo.stars && $scope.repo.stars >= 100)
        element.css("background-color", "#ffA500");
      if ($scope.repo.stars >= 1000)
        element.css("background-color", "#ff0000");
    }
  }
}
