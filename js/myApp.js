angular.module('myApp', ['ngAnimate'])
	.controller('MyCtrl', function($scope){
		$scope.showForm = true;
		$scope.submit = function(){
			if ($scope.madLibsForm.$valid){
				console.log('The form is valid');
				$scope.showForm = false;
			} else {
				console.log('The form is invalid');
			}
		};
		$scope.startOver = function(){
			$scope.showForm = true;
			$scope.data = [];
			$scope.madLibsForm.$setPristine();
			$scope.showForm = true;
		}
	});
