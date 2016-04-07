var app = angular.module('myApp', []);

console.log('app.js running');

app.controller('MainController', function($scope){
  $scope.toDo = '';
  // $scope.toDoList = [];
  $scope.toDoObject = {};
  $scope.count = 0;

  $scope.runClick = function(){
    $scope.count++;
    $scope.itemName = 'item' + $scope.count;
    $scope.toDoObject[$scope.itemName] = {item: $scope.toDo, remove: false};
    console.log($scope.toDoObject);
    $scope.toDo = '';
  }

  $scope.removeItem = function(){
    for (item in $scope.toDoObject){
      $scope.item = $scope.toDoObject[item];
      if($scope.item.remove == true){
        delete $scope.toDoObject[item];
      }
    }
    $scope.toDo = '';
  }
});
