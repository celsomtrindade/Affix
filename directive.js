.directive('affixMe', ['$document','$window', function($document,$window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var child = element.children(0);

			function checkPosition() {
				var 
					scrollHeight 	= $document.prop( 'height' ),
					scrollTop 		= angular.element($window).prop("pageYOffset"),
					positionTop 	= attrs.offsetTop ? attrs.offsetTop : element.prop('offsetTop');

				if (scrollTop >= positionTop) {
					child.addClass('affix');
				} else {
					child.removeClass('affix');
				};
			};

			function resizeChild(e, c) {
				e.css({height: c[0].offsetHeight + 'px'});
				c.css({width: e[0].offsetWidth + 'px'});
			};

			angular.element($window).bind('scroll', checkPosition);
			angular.element($window).on('resize', function() {
				resizeChild(element, child);
			});
			angular.element($document).ready(function() {
				resizeChild(element, child);
			});
		}
	};
}])
