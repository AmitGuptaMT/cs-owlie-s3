var app = angular.module('uploadApp');

app.controller('imageListingController', ['$scope', 'apiFactory', '$rootScope', '$uibModal', '$log', 'allImages', 'confirmationService', 'growl', function($scope, apiFactory, $rootScope, $uibModal, $log, allImages, confirmationService, growl) {

	$rootScope.showHeader = true;
	$scope.imageList = allImages;

	$scope.openFullView = function($index){
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: '../partials/fullImageContent.html',
			controller: 'fullImageCtrl',
			resolve: {
				image : function(){
					return $scope.imageList[$index];
				}
			},
			keyboard : true,
			size : 'lg'

		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	}

	$scope.editImage = function(index){
		console.log("Call API to edit image with index : ", index);
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: '../partials/addTags.html',
			controller: 'addTagsCtrl',
			resolve: {
				image : function(apiFactory){
					return apiFactory.getImage($scope.imageList[index]["id"]);
				}
			}

		});

		modalInstance.result.then(function (response) {
			console.log("Image edited, response : ", response);
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	}

	$scope.deleteImage = function(image, index){
		var modal_details = {
			modal_title: "Delete image",
			modal_body: "Are you sure you want to delete " + image.filename + "?",
			yes_button_text: "Delete",
			no_button_text: "Cancel"
		}
		confirmationService.showConfirmDialog(modal_details)
		.then(function() {
			apiFactory.deleteImage(image.id).then(function(response) {
	            // return response.data;
	            $scope.imageList.splice(index, 1);
	            growl.success("Image deleted successfully", {});
	        }, function(err) {
	            $log.error(err);
	        });			
		})
	}

}])