const stars = function directive() {
  return {
    restrict: 'EAC',
    scope: {
      value: '='
    },
    template: "{{value}}",
    link: function ($scope, element) {
      if ($scope.value === 0) {
        element.css("background-color", "#808080");
      }
      if (100 > $scope.value && $scope.value > 0) {
        element.css("background-color", "#008000");
      }
      if (1000 > $scope.value && $scope.value >= 100) {
        element.css("background-color", "#ffA500");
      }
      if ($scope.value >= 1000) {
        element.css("background-color", "#ff0000");
      }
    }
  }
}

const starsDirective = [stars]

export {starsDirective}