
angular.module('myApp',[])
.controller('AccountCtrl',function($scope, $routeParams, MyAPI){
	MyAPI.getAccount($routeParams.id).success(function(data){
		$scope.account=data;
	});
});
