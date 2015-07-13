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
			$vm[target] = $vm[target] ? false : true;
		}

		vm.removeUser = function(index) {
			$vm.users.splice(index, 1);
		}
	}

})();




