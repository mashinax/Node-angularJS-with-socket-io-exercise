var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http) {
   $http.get('js/small_data.json').success(function(data) {
       $scope.nodebox = data;
   }); 
});