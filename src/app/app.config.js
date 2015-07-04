(function (angular) {
	'use strict';
	angular.module('poll')
		.config(['$routeProvider',
			function ($routeProvider) {
			 
			$routeProvider
				.when('/', { 
					templateUrl: 'app/poll/poll.html', 
					title: 'Question List',
					controller: 'MainController',
					controllerAs: 'main' 
				})
				.when('/question/:id', { 
					templateUrl: 'app/question/question.html', 
					title: 'Question Answer', 
					controller: 'QuestionController'
				})				
				.otherwise({ redirectTo: '/' });
			
		}]);	
})(angular);