(function (angular){
	'use strict';
	angular.module('voteApp')	
		.controller('MainController',['$scope',
			function ($scope){

				$scope.candidates=[{
                     name:'Elephant',
                     votesNumber: 0
				},
				{
					name: 'Donkey',
                    votesNumber: 0
				},
				{
					name: 'No one',
					votesNumber: 0
				}];

				$scope.winner={
                    winnerName:'--',
                    winnerVotes: 0,
                    percentage: 0
				};
				$scope.counter={
					sum:0
		        };

				$scope.selected=function (candidate){
					this.candidate.votesNumber+=1;
					$scope.win();
					$scope.count();
				};
				$scope.win=function (){
					var winCandidate=$scope.winner;
					for (var i in $scope.candidates){
						if($scope.candidates[i].votesNumber>winCandidate.winnerVotes){
							$scope.winner.winnerName=$scope.candidates[i].name;
							$scope.winner.winnerVotes=$scope.candidates[i].votesNumber;
						};
					};

				};
				$scope.count=function (){
					$scope.counter.sum+=1;
					$scope.winner.percentage= $scope.winner.winnerVotes/$scope.counter.sum * 100;
				};
			}]);
})(angular);


