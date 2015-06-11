(function (angular) {
	'use strict';
	angular.module('voteApp').filter('winnerCheck', function() {
		return function(input){
           if(input === '---'){
            return 'There is no winner: ';
           }
           else {
            return input + ' is winner: '
           }
		};
	});	
})(angular);