$(function() {

	/*
	 cover
	 back-cover
	 directory
	 page-number

	 question:layout
	 question:odd even
	 */

	 // all pages in the book
		var pages = $(".page");

		// for()

	$("#forward").click(function(e) {

		// current action page and next page
		var current = pages.not(".odd-action,.even-action").first(),
			next = current.next(),
			prevEven = current.prev(),
			prevOdd = prevEven.prev();

		// layout z-index
		var zIndex = 0;

		zIndex = 300 - parseInt(current.css("z-index")) - 1;

		prevOdd.css("z-index",zIndex);
		prevEven.css("z-index",zIndex + 1);

		current.addClass("odd-action"); 
		next.addClass("even-action");

	});

	$("#back").click(function(e) {

		// current action page and next page
		var current = pages.filter(".odd-action,.even-action").first(),
			prev = current.prev(),
			nextOdd = current.next(),
			nextEven = nextOdd.next();

		// layout z-index
		var zIndex = 0;

		zIndex = 300 - parseInt(current.css("z-index")) + 1;

		nextOdd.css("z-index",zIndex);
		nextEven.css("z-index",zIndex + 1);

		current.removeClass("even-action"); 
		prev.removeClass("odd-action");

	});

});