(function (angular) {
	'use strict';
	angular.module('voteApp').filter('winnerDescription', function() {
		return function(input){
           if(input >= 50){
           	 return 'Great win!';
           }
           else if (input > 33 && input < 34){
             return 'Vote again for your favorite candidate!'
           }
           else if (input >=34 && input < 50){
             return ' ';
           }
		};
	});	
})(angular);