var indexModule = angular.module("indexModule", []);

indexModule
.controller("indexCtl", function(){

})
.controller("demo", function(){
	
})
.controller("index2Ctl", function(){
	
})
.run([
	"$rootScope",
	"$location",
	function($rootScope, $location) {

		$rootScope.path = $location.path();

		$rootScope.$on("$routeChangeSuccess", function(newVal) {
			$rootScope.path = $location.path();
		});

	}
]);