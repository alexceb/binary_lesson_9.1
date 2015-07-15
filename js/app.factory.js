(function() {

	angular
		.module('listApp')
		.factory('DataFromAPI', DataFromAPI);

	function DataFromAPI($resource, $http) {

		return {
			getDataHTTP: getDataHTTP,
			getDataResource: getDataResource
		}

		//getting data from API using $http
		function getDataHTTP(from, to) {
			var data = [],
				photosHttp,
				i;

			for (i = from; i < to; i+=1) {
				photosHttp = $http.get('http://jsonplaceholder.typicode.com/photos/' + i)
							.then(function (response) {
								data.push(response.data);
							})
							.catch(function(err) {
								console.log('ERROR ', err);
							});
			}

			return data;
		}

		//getting data from API using #resource
		function getDataResource(from, to) {
			var data = [],
				Posts = $resource('http://jsonplaceholder.typicode.com/photos/:id', {id: '@id'}),
				photosResource,
				i;

			for (i = from; i < to; i+=1) {
				photosResource = Posts.get({id: i}
								,function(response) {
									data.push(response);
								}
								,function(err) {
									console.log('ERROR ', err);
								});
			}

			return data;
		}
	}

})();