angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){

		$routeProvider.when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'TemplatesCtrl' 
		})

		.when('/templates/:id', {
			templateUrl: 'templates/template-details.html',
			controller: 'TemplateDetailsCtrl'
		});
}])


.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http){

		$http.get('http://localhost:3000/templates').then(function(response){
			$scope.templates = response.data;
		});
}])

.controller('TemplateDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

		var id = $routeParams.id;
		var requestUrl = 'http://localhost:3000/templates/'+id;

		$http.get(requestUrl).then(function(response){
			$scope.template = response.data;
		
			console.log($scope.template);
		});

		
}]);