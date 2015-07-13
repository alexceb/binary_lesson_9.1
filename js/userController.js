(function() {

	angular.module('onlineShop')
		.controller('userController', userController);

	function userController() {

		var vm = this;
		vm.users = [];

		vm.userModel = {
			userName: "",
			userAge: null,
			userTown: "",
			userAvatar: ""
		}

		vm.showNewUserForm = false;
		vm.showUserList = true;

		vm.addUser = function() {

			var $ = vm.userModel;

			vm.users.push(new ShopUser(
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

		vm.toggle = function(target) {
			vm[target] = vm[target] ? false : true;
		}

		vm.removeUser = function(index) {
			vm.users.splice(index, 1);
		}
	}

	function ShopUser(name, age, townOfBirth, avatar) {
		this.name = name || "noname";
		this.age = age || getRandomNmbr(16, 100);
		this.town = townOfBirth || "-";
		this.avatar = avatar || "../lesson_8/img/defaultAvatar.jpg";

		var shopCart = [];

		//future feature
		function addToMyCart(item) {
			shopCart.push(item);
		}

		return {
			name: this.name,
			age: this.age,
			town: this.town,
			avatar: this.avatar
		};
	}

	function getRandomNmbr(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

})();




