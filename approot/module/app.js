var app = angular.module("app", ["ngRoute", "indexModule"]);

app
.controller("header", function($scope){
	$scope.home = "Home";
	$scope.demo = "Demo";
	$scope.process = "Process";
	$scope.resume = "Resume";
})
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
			templateUrl: "approot/template/home/home.html",
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
			templateUrl:"approot/template/process/process.html",
			controller:"resume"
		})
		.otherwise({
			redirectTo:"/"
		});

	}
])
.run([
	"$rootScope",
	"$location",
	function($rootScope, $location) {
		console.log("ok ok");
		$rootScope.path = $location.path();

		$rootScope.$on("$routeChangeSuccess", function(newVal) {
			$rootScope.path = $location.path();
		});

	}
]);