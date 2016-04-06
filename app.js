var app = angular.module('myApp', []);

console.log('app.js running');

app.controller('MainController', function($scope){
  $scope.toDo = '';
  $scope.toDoList = [];

  $scope.runClick = function(){
    $scope.toDoList.push($scope.toDo);
    console.log($scope.toDoList);
    $scope.toDo = '';
  }

  $scope.removeItem = function(item){
    console.log(item);
    $scope.toDoList.pop();
    $scope.toDo = '';
  }


});
