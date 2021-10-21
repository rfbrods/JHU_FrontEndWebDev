(function () {
'use strict';

angular.module('Data')
.controller('CategoryItemsController', CategoryItemsController);

// Version with resolving to 1 item based on $stateParams in route config
CategoryItemsController.$inject = ['$stateParams', 'MenuDataService'];
function CategoryItemsController($stateParams, MenuDataService) {
  var category = this;
  var categoryName = $stateParams.itemName;

  var promise = MenuDataService.getItemsForCategory(categoryName);
  promise.then(function (response) {
      var item_list = [];
      for (const [key, value] of Object.entries(response)) {
        item_list.push(value);
      }
      console.log("item list:", item_list);
      category.items = item_list;
    });


}

})();