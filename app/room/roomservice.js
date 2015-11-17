/**
 * Created by heshuhua on 2015/11/16.
 */

angular.module('roomservice',[])
    .factory('roomstuff',function($http){
        var roomFactory={};
        roomFactory.getAll=function(){
            return $http.get('http://localhost:5000/rooms?api_key=777');

        }
        return roomFactory;
    })



