var shopModule = angular.module('onlineShop', [])

	.controller('userController', function($scope) {
		$scope.users = [];

		$scope.userModel = {
			userName: "",
			userAge: null,
			userTown: "",
			userAvatar: ""
		}

		$scope.showNewUserForm = false;
		$scope.showUserList = true;

		$scope.addUser = function() {

			var $ = $scope.userModel;

			$scope.users.push(new ShopUser(
				$.userName,
				$.userAge,
				$.userTown,
				$.userAvatar
			));

			$.userName = "";
			$.userAge = "";
			$.userTown = "";
			$.userAvatar = "";
		};

		$scope.toggle = function(target) {
			$scope[target] = $scope[target] ? false : true;
		}

		$scope.removeUser = function(index) {
			$scope.users.splice(index, 1);
		}
	})

	.controller('shopController', function($scope) {
		$scope.items = [{name: "apple", price: 20},
						{name: "carrot", price: 10},
						{name: "melon", price: 15}];

		$scope.itemModel = {
			name: "",
			price: null
		};

		$scope.showNewItemForm = false;
		$scope.showItemList = true;

		$scope.addItem = function() {
			
			var $ = $scope.itemModel;

			$scope.items.push(new shopItem(
				$.name,
				$.price
			));

			$.name = "";
			$.price = "";
		};

		$scope.toggle = function(target) {
			$scope[target] = $scope[target] ? false : true;
		}

		$scope.removeItem = function(index) {
			$scope.items.splice(index, 1);
		}
	});

var ShopUser = function(name, age, townOfBirth, avatar) {
	this.name = name || "noname";
	this.age = age || getRandomNmbr(16, 100);
	this.town = townOfBirth || "-";
	this.avatar = avatar || "../lesson_8/img/defaultAvatar.jpg";

	var shopCart = [];

	function addToMyCart(item) {
		shopCart.push(item);
	}

	return {
		name: this.name,
		age: this.age,
		town: this.town,
		avatar: this.avatar
	};
};

var shopItem = function(name, price) {
	this.name = name;
	this.price = price || getRandomNmbr(1, 100);

	return {
		name: this.name,
		price: this.price
	}
};

var getRandomNmbr = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};