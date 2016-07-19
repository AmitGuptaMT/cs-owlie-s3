var app = angular.module('uploadApp');

app.controller('imageUploadingController', function($scope, $state, $rootScope, growl) {
	$rootScope.showHeader = true;
	$scope.uploadOptions = {
        testChunks: false,
		target: 'http://localhost:3600/api/v1/images',
		headers: {'Authorization' : '0ff49f8cadc2bd2cec87b17364d6184c'}
	};


	$scope.assetUploadSuccess = function ( $file, $message, $flow ) {
		growl.success("Image uploaded successfully", {});
		$state.go('images');
		// console.log("File : ", $file);
		// console.log("$message : ", $message);
		// console.log("$flow : ", $flow);
	};

    $scope.assetUploadError = function ( $file, $message, $flow ) {
        growl.error("Error in image uploading", {});
    };

    $scope.assetUploadingComplete = function () {
    	console.log("assetUploadingComplete");
    };
})