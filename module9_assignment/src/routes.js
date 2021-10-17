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
    templateUrl: 'index.html'
  })


    // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuApp/templates/categorieslist.template.html',
    controller: 'CategoryController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categoryItems', {
    url: '/category-items/{category}',
    templateUrl: 'src/menuAapp/templates/category-items.template.html',
    controller: 'CategoryItemsController as itemsCtrl', 
    params: {
      category: null
    }
  });
  

}

})();