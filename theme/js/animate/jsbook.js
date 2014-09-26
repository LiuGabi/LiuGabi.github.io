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
		var oddPages =pages.has(".page-odd");
		var evenPages = pages.has(".page-even");

	$("#forward").click(function(e) {

		// current action page and next page
		var current = pages.not(".odd-action,.even-action").first(),
			next = current.next(),
			prev = current.prev(),
			last = pages.last();

		// layout z-index
		var zIndex = 0;

		if (prev.css("z-index")) {
			zIndex = prev.css("z-index") - last.css("z-index");
		}

		prev.css("z-index",zIndex);
		
		if(current.not(".cover")) {

		}
		
		current.addClass("odd-action");

		next.addClass("even-action");

	});

});