(function(angular) {

	"use strict";
	console.log(history.forward());
	var app = angular.module("app", ["ngRoute", "indexModule"]);

	app
	.controller("header", function($scope, $route, $routeParams, $location){
		$scope.home = "Home";
		$scope.demo = "Demo";
		$scope.process = "Process";
		$scope.resume = "Resume";

		$scope.$route = $route;
     	$scope.$location = $location;
     	$scope.$routeParams = $routeParams;
	})
	.config(function($routeProvider, $locationProvider) {

		$routeProvider
		.when("/", {
			templateUrl: "approot/template/home/index.html",
			controller:"home"
		})
		.when("/demo", {
			templateUrl:"approot/template/demo/index.html",
			controller:"demo"
		})
		.when("/process", {
			templateUrl:"approot/template/process/index.html",
			controller:"process"
		})
		.when("/resume", {
			templateUrl:"approot/template/resume/index.html",
			controller:"resume"
		})
		.otherwise({
			redirectTo:"/"
		});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	});

})(window.angular);