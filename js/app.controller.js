(function() {

	angular
		.module('listApp')
		.controller('listController', listController);

	function listController(DataFromAPI) {
		var vm = this;

		vm.items = DataFromAPI.getDataResource(20, 25);
	}
	
})();