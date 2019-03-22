myApp.factory('Weapons',
	['$http',
		function ($http) {

			var myObject;
			var weaponsUrl = 'https://mhw-db.com/weapons/';

			myObject = {
				getAllWeapons: function () {
					return $http.get(weaponsUrl);
				}

			}; //return

			return myObject;

		}
	]); //factory