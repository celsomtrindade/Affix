	.directive('affixMe', ['$timeout','$window', function($timeout, $window) {
		return {
			restrict: 'A',
			link: function(scope, element) {
				scope.width = element.prop('offsetWidth');
				var elWidth = scope.width + 'px',
					elChild = angular.element(element[0].querySelector(':first-child'));
					elChild.css('width', elWidth);
				angular.element($window).bind("scroll", function() {
					var affixElement = document.getElementById('affix'),
						xPosition = 0,
						yPosition = 0;
					function getPosition(element) {
						while(element) {
							yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
							element = element.offsetParent;
						}
					}
					getPosition(affixElement);
					if (yPosition >= 0) {
						elChild.removeClass('affix');
					} else if ( yPosition < 0) {
						elChild.addClass('affix');
					};
				});
			}
		};
	}])
