var milleRoutes = angular.module('milleApp.routes', []);

milleRoutes.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider, $scope) {
    // $urlRouterProvider.when('', '/')
    $stateProvider
      .state('product-add', {
        url: '/product-add',
        templateUrl: 'app/partials/product-add.html',
        controller: ''
      })
      .state('product', {
        url: '/product',
        templateUrl: 'app/partials/product.html',
        controller: ''
      })
  }
]);