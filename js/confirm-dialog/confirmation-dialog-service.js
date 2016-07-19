var app = angular.module('uploadApp');

app.service('ConfirmationDialogService', function($http, $modal) {
	return angular.extend($modal, {});
})