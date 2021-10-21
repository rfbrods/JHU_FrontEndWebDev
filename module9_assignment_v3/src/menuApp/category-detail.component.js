(function () {
'use strict';

angular.module('Data')
.component('categoryDetail', {
  templateUrl: 'src/menuApp/templates/category-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();