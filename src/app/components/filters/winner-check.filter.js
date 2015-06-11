(function (angular) {
	'use strict';
	angular.module('voteApp').filter('winnerCheck', function() {
    return function(input){
      return input + ' is winner: '    
    };
  });
})(angular);