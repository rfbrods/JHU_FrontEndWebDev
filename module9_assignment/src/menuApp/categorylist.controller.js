(function () {
'use strict';

angular.module('Data')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories;
  console.log("printing categories:", categories);
}

})();