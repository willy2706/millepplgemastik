var milleCtrl = angular.module('milleApp.controllers', [])

milleCtrl.controller('bodyCtrl', [ '$scope', '$location',
	function ($scope, $location) {
		if ($location.path() == '/' || $location.path() == '') {
			$scope.isGuest = true;
		} else {
			$scope.isGuest = false;
		}
	}
])