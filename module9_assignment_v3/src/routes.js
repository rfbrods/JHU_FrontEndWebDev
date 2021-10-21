(function () {
'use strict';

angular.module('Data')
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

  // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuApp/templates/categories.template.html',
    controller: 'CategoryController as categoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items 
  
  .state('categoryItems', {
    templateUrl: 'src/menuApp/templates/category-detail.template.html',
    controller: 'CategoryItemsController as categoryItems',
    params: {
      itemName: null
    }
  });



}

})();
