var app = angular.module("uploadApp");

app.factory("apiFactory", ['$http', '$q', '$log', function($http, $q, $log){

    //var urlBase = appConfig.apiBaseUrl;
    var urlBase = 'http://localhost:3600/api/v1/';

    var apiFactory = {};

    apiFactory.getAllImages = function() {
        return $http.get(urlBase + "images")
            .then(function(response) {
                return response.data;
            }, function(err) {
                $log.error(err);
                return $q.reject(err);
            });
    };

    apiFactory.getImage = function(id) {
        return $http.get(urlBase + "images/" + id)
            .then(function(response) {
                return response.data;
            }, function(err) {
                $log.error(err);
                return $q.reject(err);
            });
    }; 

    apiFactory.deleteImage = function(id) {
        return $http.delete(urlBase + "images/" + id);
    };

    apiFactory.updateImage = function(id) {
        return $http.get(urlBase + "images/" + id)
            .then(function(response) {
                return response.data;
            }, function(err) {
                $log.error(err);
                return $q.reject(err);
            });
    };            

    return apiFactory;
}])