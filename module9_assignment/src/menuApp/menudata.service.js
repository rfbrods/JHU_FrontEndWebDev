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
    categories = ['hello', 'my', 'name', 'is', 'rachel'];
    return categoreis;
  };


  service.getItemsForCategory = function (categoryShortName) {

    api_endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';
    api_endpoint = api_endpoint + categoryShortName;
  };
}

})();
