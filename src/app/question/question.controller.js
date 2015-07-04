(function (angular) {
	'use strict';
	angular.module('poll')
		.controller('QuestionController', ['$scope', '$routeParams', 'pollService',
			function ($scope, $routeParams, pollService) {
				$scope.selectedQuestion = [];
				$scope.winner;

				$scope.vote = function(id) {
					for(var i in $scope.selectedQuestion.answers)
					 	if ($scope.selectedQuestion.answers[i].id===id){
					 		$scope.selectedQuestion.answers[i].count+=1;
					 	};
					$scope.question = $scope.selectedQuestion;
					$scope.temp = $scope.question.answers[0];
					for(var i in $scope.question.answers){
						if ($scope.question.answers[i].count>$scope.temp.count)
							$scope.winner = $scope.question.answers[i].answer;
						else if ($scope.question.answers[i].count === $scope.temp.count)
							$scope.winner = "Tie";
						else $scope.winner = $scope.temp.answer;
					}	
				};
				
				function fetch() {
					pollService.get($routeParams.id).success(function(data) {
						$scope.selectedQuestion = data;		
					});
				};
				fetch();
			 }]);
})(angular);