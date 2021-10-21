(function () {
'use strict';

angular.module('Data')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['items'];
function CategoryController(items) {
  var categoryList = this;
  categoryList.items = items;

}

})();
