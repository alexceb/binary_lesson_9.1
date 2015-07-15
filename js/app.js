(function() {

	angular
		.module('listApp', ['ngResource']);

	//ugly solution... but dint get how to implement in the directive
	document.addEventListener('click', function(e) {
		var target = e.target,
			background = document.getElementById('background');
			picture = document.querySelector('.show');

		if (target === background) {
			target.style.display = 'none';
			picture.classList.remove('show');
		}
		else if (target === picture) {
			background.style.display = 'none';
			target.classList.remove('show');
		}
	});

})();
