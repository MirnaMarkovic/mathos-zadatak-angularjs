(function (angular) {
	'use strict';
	angular.module('poll')
		.directive('answers', [
			function () {
				return {
	                restrict: "EA",
	                replace: true,
					scope: {
	                    selectedQuestion: '=',
	                    selectedQuestionClick: '&',
	                    winner: '=',
						percent: '='
	                },
					templateUrl: 'app/components/directives/answers/answers.html' 	                
				}
			 }]);
})(angular);