//this variable (Parkolo) will have all the code for our app. This is also called Namespacing.
//its a way to protect our application code and no other script is going to interfere with our app. 
var parkController = angular.module('parkController', ['ngAnimate']);

parkController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data1.json').success(function(data){
		$scope.data = data;
		$scope.parkOrder = 'parkName'; 
	});
	$scope.save = function () { sessionStorage['SearchItem'] = JSON.stringify($scope.query); };
            $scope.getSettings = function () {
                if (sessionStorage['SearchItem'] != null) { $scope.query = JSON.parse(sessionStorage['SearchItem']); }
                if (sessionStorage['SearchItem'] == null) { $scope.query = {  "SearchItem": Park }; $scope.save(); }
                
            };

}]);

parkController.controller('DetailedController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data1.json').success(function(data){
	 $scope.data = data;
	 $scope.whichItem = $routeParams.itemId; //This is a variable (whichItem) that allows the routeParams to get the url and any data being passed to it.
	
  });
}]);

// creating Angular Module
  var websiteApp = angular.module('websiteApp', []);
  // create angular controller and pass in $scope and $http
  websiteApp.controller('FormController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
});