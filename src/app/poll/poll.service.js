(function (angular) {
	'use strict';
	angular.module('poll')
		.service('pollService',['$http',
			function ($http) {
				var baseUrl = 'http://api.baasic.com/beta/mathos-ng/resources/pollquestion/';

				return {
					fetch: function () {
						return $http.get(baseUrl);
					},
					get: function (id) {
   						return $http.get(baseUrl + id);
					},
					post: function(data) {
						var req = {
						 method: 'POST',
						 url: baseUrl,
						 data: data
						};
						return $http(req);	
					},
					put: function(id, data) {
						var req = {
						 method: 'PUT',
						 url: baseUrl + id,
						 data: data
						};
						return $http(req);
					}
				};
			}]);
})(angular);