(function() {

	angular.module('onlineShop')
		.controller('shopController', shopController);

	function shopController() {
		var vm = this;
		vm.items = [{name: "apple", price: 20},
					{name: "carrot", price: 10},
					{name: "melon", price: 15}];

		vm.itemModel = {
			name: "",
			price: null
		};

		vm.showNewItemForm = false;
		vm.showItemList = true;

		vm.addItem = function() {
			
			var $ = vm.itemModel;

			vm.items.push(new shopItem($));

			for (var prop in $) {
				$[prop] = "";
			}
		};

		vm.toggle = function(target) {
			vm[target] = vm[target] ? false : true;
		}

		vm.removeItem = function(index) {
			vm.items.splice(index, 1);
		}
	}

	function shopItem(model) {
		var templateModel = {
			name: "???",
			price: getRandomNmbr(16, 100)
		};

		for (var prop in model) {
			this[prop] = model[prop] ? model[prop] : templateModel[prop];
		}

		return {
			name: this.name,
			price: this.price
		}
	}

	function getRandomNmbr(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
})();