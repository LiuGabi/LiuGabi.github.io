angular.module("HeaderModule", []).controller("HeaderController", function() {

	$scope.title = "Demo";
	$scope.updateTitle = function() {
		$scope.title = "That's a new title.";
	}

});