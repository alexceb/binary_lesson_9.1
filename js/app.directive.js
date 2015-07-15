(function() {

	angular
		.module('listApp')
		.directive('showFullPicture', showFullPicture);

	function showFullPicture() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {

				var background = document.getElementById('background');

				element.on('click', function(e) {
					background.style.display = 'block';
					this.nextElementSibling.classList.add('show');
				});
			}
		}
	}

})();




