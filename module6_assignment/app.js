(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.message = "";
  $scope.textcolor="black";
  $scope.bordercolor="white";

  $scope.checkInput = function () {
    var inputList = $scope.input.split(',');

    if ($scope.input === "") {
      $scope.message = "Please enter data first";
      $scope.textcolor="red";
      $scope.bordercolor="red";
    } else {
      var inputLength = getNumberInputs(inputList);
      if (inputLength <= 3) {
        $scope.message = "Enjoy!";
        $scope.textcolor = "green";
        $scope.bordercolor= "green";
      } else {
        $scope.message = "Too much!";
        $scope.textcolor = "green";
        $scope.bordercolor="green";
      }
    }
  };

  function getNumberInputs(inputList) {
    var length = 0
    
    for (var i=0; i<inputList.length; i++) {
      var inputVal = inputList[i].trim();
      if (inputVal) {
        length += 1;
      } 
    }
    return length;
  };

}

})();