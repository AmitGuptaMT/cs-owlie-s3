var app = angular.module('uploadApp');

app.controller('loginController', function($scope, $state, growl) {
 $scope.user = {};
 var emailId = "a@a.com";
 var password = "a";

 function validateLogin(){
  if(!$scope.user.email || !$scope.user.password || $scope.user.email !== emailId || $scope.user.password !== password)
   return false;
  else
   return true;
 }

 $scope.login = function(){
  if(!validateLogin()){
   growl.error("Invalid login credentials", {});
   return;
   
  }
  else{
   growl.success("Welcome user", {});
   $state.go("images");
  }
 }
})