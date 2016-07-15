function matchheights() {
	$('[data-matchheights]').each(function(_, container) {
		container = $(container);
		var elements = container.find(container.attr('data-matchheights'));

		// Reset the heights of everything
		elements.css('height', 'auto');

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
		elements.css('height', maxHeight+'px');
	});
}
jQuery(window).load(matchheights); // For chrome
jQuery(document).ready(function($) {
	$(window).resize(matchheights);
	matchheights();
});
