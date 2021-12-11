(function () {
"use strict";


angular.module('public')
.controller('RegistrationController', RegistrationController)
.service('RegistrationService', RegistrationService);

RegistrationController.$inject = ['menuItems', 'RegistrationService'];
function RegistrationController(menuItems, RegistrationService) {
  var reg = this;
  reg.triedToSubmit = false;
  reg.registered = false;
  reg.hasItem = false;
  reg.showInValid = false;

  // on submit get the dish from the form 
  reg.submit = function () {
    var shortName = reg.user.dish;
    var first = reg.user.firstname;
    var last = reg.user.lastname;
    var email = reg.user.email;
    var phone = reg.user.phone;
    var items;
    var selected_item;
    
    reg.triedToSubmit = true;    // has the user tried to submit the form?
    reg.hasItem = false;         // does the user dish's short name exist in the menu items?
    reg.showInValid = false;

    Object.keys(menuItems).forEach(function eachKey(key) { 
        items = menuItems[key];});
    Object.keys(items)
      .forEach(function eachKey(key) { 
        var item = items[key]; 
        Object.keys(item).forEach(function eachKey(key) {
          var item_short_name = item['short_name'];
          if (shortName === item['short_name']) {
            selected_item = item;
            reg.hasItem = true;
          } 
        });
      });

    if (reg.hasItem) {
      // register the User
      RegistrationService.RegisterUser(first, last, email, phone, shortName, selected_item);
    }

  };

  function IsInItemsList(menuItems, item_short_name) {

  };

}

function RegistrationService() {
  var service = this;

  service.is_registered = false;
  service.first = '';
  service.last = '';
  service.email = '';
  service.phone = '';
  service.dish = '';
  var selected_dish;

  service.RegisterUser = function(first, last, email, phone, dish, item) {
    service.first = first;
    service.last = last;
    service.email = email;
    service.phone = phone;
    service.dish = dish;
    selected_dish = item;
    service.is_registered = true;
  };

  service.isRegistered = function() {
    return service.is_registered;
  };

  service.GetFirst = function() {
    return service.first;
  };

  service.GetLast = function() {
    return service.last;
  };

  service.GetEmail = function() {
    return service.email;
  };

  service.GetPhone= function() {
    return service.phone;
  };

  service.GetDish = function() {
    return service.dish;
  };

  service.GetSelectedDishItem = function() {
    return selected_dish;
  };


}

})();


