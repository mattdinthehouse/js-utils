function matchheights(container) {
	if(container === undefined) {
		// Run on all containers
		$('[data-matchheights]').each(function(_, container) {
			domatching($(container));
		});
	}
	else if(container instanceof jQuery) {
		// Run on supplied container
		domatching(container);
	}
	else {
		// Supplied container is invalid
		console.error('Supplied invalid container to matchheights. Type must be jQuery, got '+(typeof container));
	}

	function domatching(container) {
		// Get all the elements to look at
		var elements = container.find(container.attr('data-matchheights'));
		if(elements.length < 1)
			return;

		// Reset the heights of everything
		elements.filter(':not([data-matchheights-noreset])').css('height', 'auto');

		if(container.attr('data-matchheights-mediaquery') !== undefined) {
			if(!window.matchMedia(container.attr('data-matchheights-mediaquery')).matches) {
				// Doesn't match media query so do now match heights
				return;
			}
		}

		// Find the tallest element
		var maxHeight = 0;
		elements.each(function(_, element) {
			element = $(element);

			var height = element.css('height');
			height = parseInt(height.substr(0, height.length - 2));

			maxHeight = Math.max(maxHeight, height);
		});

		// Apply the height
		elements.filter(':not([data-matchheights-noapply])').css('height', maxHeight+'px');
	}
}
jQuery(window).load(function(event) {
	matchheights()
});
jQuery(document).ready(function($) {
	$(window).resize(function(event) {
		matchheights();
	});
	matchheights();
});
