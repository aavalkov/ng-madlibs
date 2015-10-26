angular.module('myApp', [])
	.controller('MyCtrl', function($scope){
		$scope.maleName = "";
		$scope.jobTitle = "";
		$scope.tediousTask = "";
		$scope.dirtyTask = "";
		$scope.celebrity = "";
		$scope.uselessSkill = "";
		$scope.obnoxiuousCelebrity = "";
		$scope.hugeNumber = "";
		$scope.adjective = "";
		$scope.madLibsForm = "";
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
			$scope.data.maleName = "";
			$scope.data.jobTitle = "";
			$scope.data.tediousTask = "";
			$scope.data.dirtyTask = "";
			$scope.data.celebrity = "";
			$scope.data.uselessSkill = "";
			$scope.data.obnoxiuousCelebrity = "";
			$scope.data.hugeNumber = "";
			$scope.data.adjective = "";
			$scope.data.madLibsForm = "";
			$scope.madLibsForm.$setPristine();
			$scope.showForm = true;
		}
	});
