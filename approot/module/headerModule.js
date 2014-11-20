var app = angular.module("myApp", []);

app.controller("header", function($scope) {

	$scope.home = "Home";
	$scope.demo = "Demo";
	$scope.process = "Process";
	$scope.resume = "Resume";

});