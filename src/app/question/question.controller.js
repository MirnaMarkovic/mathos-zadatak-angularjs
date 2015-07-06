(function (angular) {
	'use strict';
	angular.module('poll')
		.controller('QuestionController', ['$scope', '$routeParams', 'pollService',
			function ($scope, $routeParams, pollService) {
				$scope.selectedQuestion = [];
				$scope.winner=" ";
				$scope.sum=0;
				$scope.percent=0;

				$scope.vote = function(id) {
					for(var i in $scope.selectedQuestion.answers)
					 	if ($scope.selectedQuestion.answers[i].id===id){
					 		$scope.selectedQuestion.answers[i].count+=1;
							$scope.sum+=1;
					 	};
					$scope.question = $scope.selectedQuestion;
					$scope.temp = $scope.question.answers[0];
					for(var i in $scope.question.answers){
						if ($scope.question.answers[i].count>$scope.temp.count)
						{
							$scope.temp=$scope.question.answers[i];
							$scope.winner = $scope.question.answers[i].answer;
							$scope.percent=100*($scope.selectedQuestion.answers[i].count/$scope.sum);
						}
						else if ($scope.question.answers[i].count === $scope.temp.count)
							{
								$scope.winner = "Tie";
								$scope.percent=0;
							}
							
						else 
						{
							$scope.winner = $scope.temp.answer;
							$scope.percent=100*($scope.temp.count/$scope.sum);
						}
						
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