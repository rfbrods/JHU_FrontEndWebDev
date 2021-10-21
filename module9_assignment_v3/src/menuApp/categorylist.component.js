(function () {
'use strict';

angular.module('Data')
.component('categoryList', {
  templateUrl: 'src/menuApp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
