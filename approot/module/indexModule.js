var indexModule = angular.module("indexModule", []);

indexModule
.controller("home", function($scope){
	console.log("home");
})
.controller("demo", function($scope){
	console.log("demo");
})
.controller("process", function($scope){
	console.log("process");
})
.controller("resume", function($scope){
	console.log("resume");
});