var app = angular.module('uploadApp');

app.controller('confirmationController', function($scope, $uibModalInstance, modal_details) {
    $scope.ok = function (str) {
        $uibModalInstance.close('ok');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel'); 
    };
    
    $scope.modal_details = modal_details; 
})