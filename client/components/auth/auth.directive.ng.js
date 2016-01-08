'use strict'

angular.module('testYoApp')
.directive('auth', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/components/auth/auth.view.ng.html',
    replace: true,
 	controller: function ($scope) {
 		$scope.test = 'lol';
    }

  };
});