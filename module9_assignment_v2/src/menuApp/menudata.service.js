(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;


  service.getAllCategories = function () {
    console.log("I'm in get all categories");
    api_endpoint = "https://davids-restaurant.herokuapp.com/categories.json"; 
    return $http({
            method: "GET",
            url: (api_endpoint)
            }).then(function (response) {
              console.log("Response")
              var categories = response.data; 
              return categories;
    });
  };


  service.getItemsForCategory = function (categoryShortName) {
    api_endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';
    api_endpoint = api_endpoint + categoryShortName;
    return $http({
            method: "GET",
            url: (api_endpoint)
            }).then(function (response) {
              var items = response.data; 
              return items;
    });
  };
}

})();