(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

 // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  // Category Page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuApp/templates/category-list.template.html'/*,
    controller: 'CategoryListController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }*/
  })

    // Category Page
  .state('categoryItems', {
    url: '/category-items',
    templateUrl: 'src/menuApp/templates/category-items.template.html'
  });
  

}

})();