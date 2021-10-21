(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;


  service.getAllCategories = function () {
    console.log("I'm in get all categories");
    /pi_endpoint = "https://davids-restaurant.herokuapp.com/categories.json"; 
    return $http({
            method: "GET",
            url: (api_endpoint)
            }).then(function (response) {
              console.log(response.data)
              var categories = response.data; 
              return categories;
    });
  };

}

})();