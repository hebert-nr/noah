//This is the file that controls the partials 

var thePPF = angular.module('thePPF', [
  'ngRoute', 
  'parkController'
]);

thePPF.config(['$routeProvider', function($routeProvider){
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