angular.module("headerModule", [])
.controller("headerController", function($scope) {

	$scope.demo = "Demo";
	$scope.updateTitle = function() {
		$scope.title = "That's a new title.";
	}

});