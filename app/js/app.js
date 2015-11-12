

angular.module('myApp',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
	     })
		.when('/account/:id', {
				templateUrl: 'views/account-create.html',
				controller: 'AccountCreateCtrl'
	      })
		.when('/create/account', {
				templateUrl: 'views/account-view.html',
				controller: 'AccountCtrl'
	     })
	    .otherwise({
				redirectTo: '/'
	    });
});

