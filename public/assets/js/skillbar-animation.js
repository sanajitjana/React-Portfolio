// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
	var $elem = $(elem);

	// If the element doesn't exist, it's not in the viewport
	if (!$elem.length) return false;

	// Get the scroll position of the page.
	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html');
	var viewportTop = $(scrollElem).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	// Get the position of the element on the page.
	var elemOffset = $elem.offset();
	if (!elemOffset) return false;
	var elemTop = Math.round(elemOffset.top);
	var elemBottom = elemTop + $elem.outerHeight();

	return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
	var $elems = $(".Web, .Graphics, .Developing, .Photoshop, .Photography");

	$elems.each(function() {
		var $el = $(this);
		if (isElementInViewport(this)) {
			$el.addClass('start');
		} else {
			$el.removeClass('start');
		}
	});
}

// Capture scroll events
$(window).on('scroll', function(){
	checkAnimation();
});

// Trigger on load and on resize to set initial state
$(window).on('load resize', function(){
	checkAnimation();
});