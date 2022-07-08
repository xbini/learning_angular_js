describe('controller', () => {

  let $httpBackend, $controller, $rootScope;
  beforeEach(inject(function ($injector){
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', '/api/repos')
    .respond({
      status:200,
      data:"data"});
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    const createController = function() {
      return $controller('Controller', {'$scope' : $rootScope });
    };
  }));

  describe('$scope.repos',function (){
    it('should load repos successfully from api',()=>{
      const $scope = $rootScope.$new();
      const controller = $controller('Controller', { $scope: $scope });
      $scope.repos = [];
    })

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

})