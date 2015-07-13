(function() {

	angular
		.module('onlineShop', ['ngRoute']);

	var ShopUser = function(name, age, townOfBirth, avatar) {
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

})();
