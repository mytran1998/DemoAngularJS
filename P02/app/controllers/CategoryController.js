//var app = angular.module('myApp.controllers', []);
app.controller('categoryController', function categoryController($scope, categoryServices){
   $scope.categories = [];

   categoryServices.getCategories()
   .then(function successCallback(response){
        $scope.categories = response.data;
   }, function(response){
        console.log('Error: ', response);
   });

})