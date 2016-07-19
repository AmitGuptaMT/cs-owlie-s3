//var confirmDialogPath = require('shared/');
var app = angular.module('uploadApp');

app.service('confirmationService', ['$uibModal', '$q', function($uibModal, $q) {
    function showConfirmDialog(modal_details) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../../partials/confirm-dialog.html',
            controller: 'confirmationController',
            resolve: {
                modal_details :function(){
                    return modal_details;
                }
            }
        });

        return modalInstance.result;
    }

    this.showConfirmDialog = function(modal_details){
        return showConfirmDialog(modal_details)
            .catch(function(err) {
                return $q.reject(err);
            });
    }    
}])

/*var confirmationService = (function ($modal, $q) {

});
confirmationService.$inject = ['$modal', '$q'];
module.exports = confirmationService;*/