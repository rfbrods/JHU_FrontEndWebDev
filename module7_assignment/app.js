(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.filter('angularCurrency', AngularCurrencyFilter)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListCheckOffService.getItems();

  itemAdder.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  alreadyBought.getPrice = function(item) {
    return ShoppingListCheckOffService.getPrice(item);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy
  var items = [ { name: "cookies", quantity: 10, pricePerItem: 2}, 
                     { name: "milk", quantity: 2, pricePerItem: 3}, 
                     { name: "chocolates", quantity: 5, pricePerItem: 5},
                     { name: "brownie mix", quantity: 3, pricePerItem: 2.5},
                     { name: "wine", quantity: 1, pricePerItem: 12},
                     { name: "cupcakes", quantity: 10, pricePerItem: 3},
                     { name: "whipped cream", quantity: 2, pricePerItem: 4}];

  var boughtItems = [];


  service.buyItem = function (itemIndex) {
    var boughtItem = items[itemIndex];
    items.splice(itemIndex, 1);
    boughtItems.push(boughtItem);
  };

  service.getPrice = function(item) {
    var quantity = item.quantity;
    var pricePerItem = item.pricePerItem;
    console.log(quantity * pricePerItem);
    return quantity * pricePerItem;
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

function AngularCurrencyFilter() {
  return function (input) {
    input = input || "";
    input = "$$$" + input + ".00";
    return input;
  };
}

})();
