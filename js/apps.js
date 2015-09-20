//This is the file that controls the partials 

var Parkolo = angular.module('Parkolo', [
  'ngRoute', 
  'parkController',
  'angularUtils.directives.dirPagination'
]);

Parkolo.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/detailed/:itemId', {
		templateUrl: 'partials/detailed.html',
		controller: 'DetailedController'
	}).
	 otherwise({
		 redirectTo: '/list'
	 });
}]);

$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);