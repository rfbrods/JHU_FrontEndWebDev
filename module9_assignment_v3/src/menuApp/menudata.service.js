(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiPathBase', "https://davids-restaurant.herokuapp.com/menu_items.json")
.constant('ApiPathItems', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiPath', 'ApiPathItems', 'ApiPathBase']
function MenuDataService($q, $timeout, $http, ApiPath, ApiPathItems, ApiPathBase) {
  var service = this;

  // List of categories
  var categories = [];
  var items = []

  // Returns a promise of categories in the menu
  service.getAllCategories = function () {
    return $http({
        method: "GET",
        url: (ApiPath)
        }).then(function (response) {
          for (const [key, value] of Object.entries(response.data)) {
            categories.push(value.name);
            console.log(value.name)
          }
          return response.data;
    });

  };

  service.getItemsForCategory = function (categoryShortName) { 
    console.log("Name:", categoryShortName);
    var ApiPathWithName = ApiPathItems.concat(categoryShortName);
    console.log("Api Path with Name", ApiPathWithName);
    return $http({
        method: "GET",
        url: (ApiPathWithName)
        }).then(function (response) {
          for (const [key, value] of Object.entries(response.data.menu_items)) {
            items.push(value.name);
          }
          return items;
    });

  };


}

})();
