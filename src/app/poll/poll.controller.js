(function (angular){
	'use strict';
	angular.module('poll')	
		.controller('MainController',['$scope', 'pollService',
			function ($scope, pollService){
				this.view=false;
				$scope.questions = [];
				$scope.selectedQuestion = [];

          		this.close = function () {
          			this.view=false;
          			$scope.selectedQuestion=[];
          		};

				$scope.select = function(question) {
					this.view=true;
					$scope.selectedQuestion=question;
				};

				function fetch(){
					pollService.fetch().success(function (data) {
						$scope.questions = data.item;
					});
				};
				fetch();
			}]);
})(angular);

