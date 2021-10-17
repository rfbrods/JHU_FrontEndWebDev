(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$http']
function MenuDataService($q, $http) {
  var service = this;
  var categorySet = [];
  var itemsInCategory = [];


  // connect to api_endpoint, iterate through returned menu items 
  // create a set of categories to list 
  // return promise of categories from api_endpoint
  service.getAllCategories = function () {
    console.log("I'm in get all categories");
    categorySet = []; // reset category set
    api_endpoint = "https://davids-restaurant.herokuapp.com/categories.json";
    promise = $http({method: "GET", url: api_endpoint})
           .then(function (response) {
           var menuItems = response.data.menu_items;
           console.log(menuItems);
           return menuItems;
      });
  };

  // iterate through each menu item, check if its category is in the set
  // if not in set, add to set
  function appendCategoriesToCategorySet(menuItems) {
    Object.keys(menuItems).forEach(function(key) {
      var item = menuItems[key];
      var category = item['name'];
      if (!(categorySet.includes(category))) {
          categorySet.push(item);
      }
    });
  }

  // connect to api_endpoint for a particular category
  // return items returned in that category
  service.getItemsForCategory = function (categoryShortName) {
    itemsInCategory = [];  // reset items array

    api_endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';
    api_endpoint = api_endpoint + categoryShortName;

    return $http({method: "GET", url: (api_endpoint)})
           .then(function (response) {
            itemsInCategory = response.data.menu_items; 
            return itemsInCategory;
    });
  };
}

})();
