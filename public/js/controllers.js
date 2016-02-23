var myApp = angular.module('myApp', ['angular.filter']);

myApp.controller('MyController', function MyController($scope, $http) {
   $http.get('js/new_data.json').success(function(data) {
       $scope.nodebox = data;
   }); 
});