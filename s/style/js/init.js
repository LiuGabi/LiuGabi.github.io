$(document).ready(function() {

	var url = location.hash.replace(/^#/, ''),
		container = $("#container");
	// loadUrl(url, container);

});

// load page
function loadUrl (url, container) {

	$.ajax({
		type: "GET",
		url: url,
		dataType: 'html',
		cache: true,
		beforeSend: function() {
			container.html("<h1><i class='fa fa-cog fa-spin'>Loading...</i></h1>");
			
			if (container[0] == $("#container")) {
				drawBreadCrumb();
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