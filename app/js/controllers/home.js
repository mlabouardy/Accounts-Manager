
angular.module('myApp',[])
.controller('MainCtrl',function($scope, MyAPI){
	MyAPI.getAccounts().success(function(data){
		$scope.accounts=data;
	});
});
