(function (angular) {
	'use strict';
	angular.module('poll').filter('winnerPercent', function() {
		return function(input) {
			if (input !== undefined && input) {
				return ', ' + input + '%';
			}
			return ' ';
		};
	});	
})(angular);