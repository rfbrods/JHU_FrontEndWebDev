(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});

})();