(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true,
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.addItems = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      list.items = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}


MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getMatchedMenuItems = function (searchTerm) {
    if ((searchTerm === undefined) || (!searchTerm)) {
      // reset items to empty list
      items = [];
    }
    else {
      return $http({
        method: "GET",
        url: (ApiPath)
        }).then(function (response) {
          var menuItems = response.data.menu_items; 
          appendFoundItems(menuItems, searchTerm);
          return items;
      });
    }
  };
  
  function appendFoundItems(menuItems, searchTerm) {
    Object.keys(menuItems).forEach(function(key) {
      var item = menuItems[key];
      var description = item['description'];
      if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          items.push(item);
      }
    });

  }

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}


})();
