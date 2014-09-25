$(function() {

	/*
	 cover
	 back-cover
	 directory
	 page-number
	 */

	$("#forward").click(function(e) {
		
		var pages = $(".page").not(".forward,.back");

		var first = pages.first(),
			second = pages.eq(1);
		
		first.addClass("forward");
		second.addClass("back");

	});

});