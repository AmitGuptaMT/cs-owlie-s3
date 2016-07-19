var app = angular.module("uploadApp", ['ui.router', 'ui.bootstrap', 'flow', 'angular-loading-bar', 'angular-growl', 'ngTagsInput']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'growlProvider', 'flowFactoryProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, growlProvider, flowFactoryProvider, $httpProvider) {

  $httpProvider.interceptors.push('authenticationInterceptor');

  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
  growlProvider.globalTimeToLive(5000);
  growlProvider.globalPosition('top-center');
  growlProvider.globalDisableCountDown(true);
  growlProvider.globalDisableIcons(true);

  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "partials/login.html",
      controller: 'loginController'
    })
    .state('images', {
      url: "/images",
      templateUrl: "partials/imageListing.html",
      controller: 'imageListingController',
      resolve: {
          allImages: ['apiFactory', function(apiFactory) {
              return apiFactory.getAllImages();
          }]
      }
    })
    .state('upload', {
      url: "/upload",
      templateUrl: "partials/imageUploading.html",
      controller: 'imageUploadingController'
    }) 
    // .state('error', {
    //   url: "/error",
    //   templateUrl: "partials/404.html"
    // })      

    flowFactoryProvider.defaults = {
      method: "multipart",
      uploadMethod: "POST",
      chunkSize: 1024*1024*1024,
      testChunks: false,
    };

}]);

app.run(function($rootScope, $state, growl){
  $rootScope.showHeader = false;
  $rootScope.logout = function(){
    $rootScope.showHeader = false;
    growl.info("You have logged out successfully", {});
    $state.go('login');
  }
})

app.filter("singularOrMultiple", function(){
  return function(imageCount, text){
    if(imageCount === 1)
      return '(' + imageCount + ' ' + text + ')';
    else{
      return '(' + imageCount + ' ' + text + "s" + ')';
    }
  }
})

app.factory("authenticationInterceptor", ['$q', function($q) {
    return {
        'request': function(config) {
          console.log("trigger me");
            config.headers['Access-Control-Allow-Origin'] = '*' ;
            // config.headers['Authorization'] = 'Basic ' + window.btoa('devel' + ':' + 'anandsentme');
            config.headers['Authorization'] = "69492b4dd66e1552f953f102d9f83a49.513e67ca450211e68e9106ec478fdbb9";
            return config;
        },
        'responseError': function(response) {
            // console.log("Inside responseError, response : ", response);
            return $q.reject(response);
        }
    }
}])