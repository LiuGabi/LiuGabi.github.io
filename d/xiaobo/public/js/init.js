$(document).ready(function() {

	var url, container;
	$("#nav > li > a").click(function(e) {

		e.preventDefault();
		url = $(this).attr("href");
		container = $("#content");
		loadUrl(url, container);
	});

});

function loadUrl (url, container) {

	$.ajax({
		type: "GET",
		url: url,
		dataType: 'html',
		cache: true,
		beforeSend: function() {
			container.html("<h1><i class='fa fa-cog fa-spin'>Loading...</i></h1>");
			
			if (container[0] == $("#content")) {
				// drawBreadCrumb();
				$("html").animate({
					scrollTop: 0
				}, "fast");
			}
		},
		success: function(data) {
			container.css({
				opacity: "0.0"
			}).html(data).delay(50).animate({
				opacity: "1.0"
			}, 300);
		},
		error: function(xhr, ajaxOptions, thrownError) {
			container.html("<h1>404!</h1>");
		},
		async: false
	});

}