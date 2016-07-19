var app = angular.module('uploadApp');

app.controller('fullImageCtrl', function($scope, $state, $rootScope, image, $uibModalInstance) {
	$rootScope.showHeader = true;
	$scope.image = image;
	$scope.ok = function () {
    	$uibModalInstance.close($scope.image);
  	};
})