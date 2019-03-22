'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngMaterial',
	'ngMessages',
	'myApp.version'
]);

myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.
	when('/dashboard', {
		templateUrl: 'views/dashboard/dashboard.html',
		controller: 'DashboardController'
	}).
	otherwise({
		redirectTo: '/dashboard'
	});
}]);