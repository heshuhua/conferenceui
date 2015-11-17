'use strict';

angular.module('myApp.room', ['ngRoute','roomservice'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/room', {
    templateUrl: 'room/room.html',
    controller: 'RoomCtrl'
  });

}])

.controller('RoomCtrl', function(roomstuff) {

      var vm=this;
      roomstuff.getAll().success(function(data){
        console.log(data);
        vm.rooms=data.Object;
      });

});