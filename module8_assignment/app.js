(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);




function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.logFoundItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    
    promise.then(function (response) {
      list.items = response;
      console.log(list.items);
    })
    .catch(function (error) {
      console.log("Error occurred in NarrowItDownController.");
    })
  };

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

}


MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiPath)
    }).then(function (response) {
      var menuItems = response.data.menu_items;
      Object.keys(menuItems).forEach(function(key) {
        var item = menuItems[key];
        var itemName = item['name'];
        if (itemName.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(item);
        }
      });
      return foundItems;
    })
    .catch(function() {
      console.log("Error occurred in MenuSearchService");
    });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return foundItems;
  };

}

})();


