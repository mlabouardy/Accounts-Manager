
angular.module('myApp')
 .factory('MyAPI', function ($http) {
	var baseUrl="http://localhost:3000";
	  return {
	    	getAccounts:function(){
				return $http.get(baseUrl+"/account");
			},
			getAccount:function(id){
				return $http.get(baseUrl+"/account/"+id);
			}
	};
});
