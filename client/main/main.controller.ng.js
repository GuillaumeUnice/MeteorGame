'use strict'

//var Users = new Mongo.Collection.get('users');
//console.log(Users.find({}, { sort: { createdAt: -1 } }));
angular.module('testYoApp')
.controller('MainCtrl', function($scope, $meteor) {
  /*$scope.$meteorSubscribe('users');

  $scope.users = $meteor.collection( function() {
      return Users.find({}, { sort: { createdAt: -1 } })
    }
  );*/

      $scope.attaquer = function () {
      $meteor.call('attaquer');
    };
  //console.log($scope.users);
  /*
  //$scope.users = $meteor.collection('users').find();/*$meteor.collection('users', function() {
      users.find()
        //return Users.find($scope.getReactively('query'), { sort: { createdAt: -1 } })
      }
    );*/

  //Users.find//$meteor.collection(users);
/*
  $scope.attaquer = function() {
    alert('lol');
    //return Things.find({}, {sort:$scope.getReactively('sort')});
  };*/




























  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.things = $scope.$meteorCollection(function() {
    return Things.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $scope.$meteorSubscribe('things', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.thingsCount = $scope.$meteorObject(Counts, 'numberOfThings', false);
    });
  });

  $meteor.session('thingsCounter').bind($scope, 'page');
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.things.save($scope.newThing);
      $scope.newThing = undefined;
    }
  };
      
  $scope.remove = function(thing) {
    $scope.things.remove(thing);
  };
    
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
    
  $scope.$watch('orderProperty', function() {
    if($scope.orderProperty) {
      $scope.sort = {name_sort: parseInt($scope.orderProperty)};
    }
  });
});