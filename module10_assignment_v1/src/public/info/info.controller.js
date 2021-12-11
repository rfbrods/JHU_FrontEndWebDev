(function () {
"use strict";


angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegistrationService'];
function InfoController(RegistrationService) {
  var info = this;
  info.registered = RegistrationService.isRegistered();

  info.first = RegistrationService.GetFirst();
  info.last = RegistrationService.GetLast();
  info.email = RegistrationService.GetEmail();
  info.phone = RegistrationService.GetPhone();
  info.dish = RegistrationService.GetDish();
  info.dish_item = RegistrationService.GetSelectedDishItem();


}


})();


