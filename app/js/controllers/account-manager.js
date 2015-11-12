
angular.module('myApp',[])
.controller('AccountCreateCtrl',function($scope,MyAccount){
	MyAccount.create($scope.account).success(function(data){
		$scope.message="Created !!";
	}).error(function(){
		$scope.message="Error !!";
	});
});
