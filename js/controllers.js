//this variable (Parkolo) will have all the code for our app. This is also called Namespacing.
//its a way to protect our application code and no other script is going to interfere with our app. 
var parkController = angular.module('parkController', ['ngAnimate']);

parkController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data1.json').success(function(data){
		$scope.data = data;
		$scope.parkOrder = 'parkName'; 
	});
}]);

parkController.controller('DetailedController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data1.json').success(function(data){
	 $scope.data = data;
	 $scope.whichItem = $routeParams.itemId; //This is a variable (whichItem) that allows the routeParams to get the url and any data being passed to it.
	
	//this checks to see which is the first and last items, and if they are, you can nav forward or back respectively.
	if ($routeParams.itemId > 0){
		$scope.prevItem = Number($routeParams.itemId)-1;//$routeParams come in as a String so we must cast it to a number
	} else{
		$scope.prevItem = $scope.data.length-1;
	}
	
	if ($routeParams.itemId < $scope.data.length-1){
		$scope.nextItem = Number($routeParams.itemId)+1; //casting to a number
	} else{
		$scope.nextItem = 0;
	}
  });
}]);