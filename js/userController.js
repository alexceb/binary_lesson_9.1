(function() {

	angular.module('onlineShop')
		.controller('userController', userController);

	function userController() {

		var vm = this;
		vm.users = [];

		vm.userModel = {
			name: "",
			age: null,
			town: "",
			avatar: ""
		};

		vm.showNewUserForm = false;
		vm.showUserList = true;

		vm.addUser = function() {

			var $ = vm.userModel;

			vm.users.push(new shopUser($));

			for (var prop in $) {
				$[prop] = "";
			}
		};

		vm.toggle = function(target) {
			vm[target] = vm[target] ? false : true;
		}

		vm.removeUser = function(index) {
			vm.users.splice(index, 1);
		}
	}

	function shopUser(model) {

		var templateModel = {
			name: "noname",
			age: getRandomNmbr(16, 100),
			town: "-",
			avatar: "../lesson_8/img/defaultAvatar.jpg"
		};
		var shopCart = [];

		for (var prop in model) {
			this[prop] = model[prop] ? model[prop] : templateModel[prop];
		}

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




