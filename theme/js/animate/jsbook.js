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

		zIndex = pages.length - parseInt(current.css("z-index")) - 1;

		prevOdd.css("z-index",zIndex);
		prevEven.css("z-index",zIndex + 1);

		current.removeClass("odd-actionb"); 
		next.removeClass("even-actionb");
		current.addClass("odd-action"); 
		next.addClass("even-action");

		if (current.is(pages.last().prev())) {
			current.css("z-index",7);
			next.css("z-index",8);
		}

	});

	$("#back").click(function(e) {

		// current action page and next page
		var current = pages.filter(".odd-action,.even-action").last();
		var	prev = current.prev();
		var	nextOdd = current.next();
		var	nextEven = nextOdd.next();

		// layout z-index
		var zIndex = 0;

		zIndex = pages.length - parseInt(current.css("z-index"));

		nextOdd.css("z-index",zIndex);
		nextEven.css("z-index",zIndex - 1);

		current.removeClass("even-action"); 
		prev.removeClass("odd-action");
		current.addClass("even-actionb"); 
		prev.addClass("odd-actionb");

		if (current.is(pages.first().next())) {
			current.css("z-index",7);
			prev.css("z-index",8);
		}

	});

});