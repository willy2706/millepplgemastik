var milleRoutes = angular.module('milleApp.routes', []);

milleRoutes.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider, $scope) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/homepage");
  //
  // Now set up the states
    $stateProvider
      .state('homepage', {
        url: '/homepage',
        templateUrl: 'app/partials/homepage.html',
        controller: ''
      })
      .state('homepage_features', {
        url: '/homepage#features',
        templateUrl: 'app/partials/homepage.html',
        controller: ''
      })
      .state('homepage_theteam', {
        url: '/homepage#theteam',
        templateUrl: 'app/partials/homepage.html',
        controller: ''
      })

      .state('products_index', {
        url: '/products',
        templateUrl: 'app/partials/products.index.html',
        controller: ''
      })
      .state('products_add', {
        url: '/products/add',
        templateUrl: 'app/partials/products.add.html',
        controller: ''
      })

      .state('categories_index', {
        url: '/categories',
        templateUrl: 'app/partials/categories.index.html',
        controller: ''
      })
      .state('categories_add', {
        url: '/categories/add',
        templateUrl: 'app/partials/categories.add.html',
        controller: ''
      })

      .state('products_detail', {
        url: '/products/detail',
        templateUrl: 'app/partials/products.detail.html',
        controller: ''
      })
  }
]);