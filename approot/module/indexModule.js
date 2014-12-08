var indexModule = angular.module("indexModule", []);

indexModule
.controller("home", function($scope, $routeParams){
	console.log("home");
	$scope.name = "home";
    $scope.params = $routeParams;
})
.controller("demo", function($scope, $routeParams){
	console.log("demo");
	$scope.name = "demo";
    $scope.params = $routeParams;
})
.controller("process", function($scope, $routeParams){
	console.log("process");
	$scope.name = "process";
    $scope.params = $routeParams;
})
.controller("resume", function($scope, $routeParams){
	console.log("resume");
	$scope.name = "resume";
    $scope.params = $routeParams;
});