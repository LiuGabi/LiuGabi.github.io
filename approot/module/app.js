(function(angular) {

	"use strict";

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
			templateUrl: "approot/template/layout/banner.html",
			controller:"home"
		})
		.when("/demo", {
			templateUrl:"approot/template/demo/demo.html",
			controller:"demo"
		})
		.when("/process", {
			templateUrl:"approot/template/process/process.html",
			controller:"process"
		})
		.when("/resume", {
			templateUrl:"approot/template/resume/resume.html",
			controller:"resume"
		})
		.otherwise({
			redirectTo:"/"
		});

		$locationProvider.html5Mode(true);

	});

})(window.angular);