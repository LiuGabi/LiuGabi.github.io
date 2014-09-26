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
		var first = pages.not(".odd-action,.even-action").first(),
			second = first.next();
		
		if(first.not(".cover")) {

		}

		first.addClass("odd-action");
		second.addClass("even-action");

	});

});