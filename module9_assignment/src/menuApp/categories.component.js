(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});

})();