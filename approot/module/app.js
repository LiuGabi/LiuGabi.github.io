var app = angular.module("myApp", ["ngRoute", "indexModule"]);

app.controller("header", function($scope) {

	$scope.home = "Home";
	$scope.demo = "Demo";
	$scope.process = "Process";
	$scope.resume = "Resume";

});
app
.config([
	"$routeProvider",
	"$locationProvider",
	function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$routeProvider
		.when("/", {
			templateUrl: "approot/template/demo/demo.html",
			controller:"demo"
		})
		.when("/demo", {
			templateUrl:"../",
			controller:""
		})
		.when("index2", {
			templateUrl:"",
			controller:""
		})
		.otherwise({
			redirectTo:""
		});
	}
]);