myApp.controller('DashboardController',
	['$scope', 'Weapons', function ($scope, Weapons) {
		$scope.weapons = null;
		$scope.weaponSelected = null;
		
		// Function to get all weapons and assign them to $scope
		Weapons.getAllWeapons().then((response) => {
			$scope.weapons = response.data;
		});

		// Function to show an individual item information
		$scope.showItemInfo = function(weapon) {
			$scope.weaponSelected = weapon;
			console.log(weapon);
		};

		// Weapons.getAllWeapons().then(response => {
		// 	$scope.greatSwords = response.data.filter(weapon => weapon.type === 'great-sword');
		// 	console.log($scope.greatSwords);
		// });
	}]);