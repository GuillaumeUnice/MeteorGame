'use strict';

angular.module('testYoApp')

.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}).run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case 'AUTH_REQUIRED':
      case 'FORBIDDEN':
      case 'UNAUTHORIZED':
        $state.go('main');
        break;
    }
  });
}]);


    Accounts._loginButtonsSession.set('dropdownVisible', true);
    $(".login-close-text").hide();      

  Accounts.ui.config({

    passwordSignupFields: "USERNAME_ONLY"

  });