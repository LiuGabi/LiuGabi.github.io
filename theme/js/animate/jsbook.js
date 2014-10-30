// $(function() {

// 	/*
// 	 cover
// 	 back-cover
// 	 directory
// 	 page-number

// 	 question:layout
// 	 question:odd even
// 	 */

// 	 // all pages in the book
// 		var pages = $(".page");

// 		// for()

// 	$("#forward").click(function(e) {

// 		// current action page and next page
// 		var current = pages.not(".odd-action,.even-action").first(),
// 			next = current.next(),
// 			prevEven = current.prev(),
// 			prevOdd = prevEven.prev();

// 		prevEven.hide();
// 		prevOdd.hide();

// 		current.removeClass("odd-actionb"); 
// 		next.removeClass("even-actionb");
// 		current.addClass("odd-action"); 
// 		next.addClass("even-action");

// 	});

// 	$("#back").click(function(e) {

// 		// current action page and next page
// 		var current = pages.filter(".odd-action,.even-action").last();
// 		var	prev = current.prev();
// 		var	nextOdd = current.next();
// 		var	nextEven = nextOdd.next();

// 		// layout z-index
// 		var zIndex = 0;

// 		zIndex = pages.length - parseInt(current.css("z-index"));

// 		nextOdd.css("z-index",zIndex);
// 		nextEven.css("z-index",zIndex - 1);

// 		current.removeClass("even-action"); 
// 		prev.removeClass("odd-action");
// 		current.addClass("even-actionb"); 
// 		prev.addClass("odd-actionb");

// 	});

// });


(function($) {

	"use strict";

	var has3d,

		hasRot,

		vendor = "",

		PI = Math.PI,

		A90 = PI/2,

		turnOptions = {

			acceleration: true,

			display: "double",

			duration: 600,

			page: 1,

			gradients: true,

			turnCorners: "bl,br",

			when: null

		},

		turnMethods = {

			init: function(options) {

				has3d = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style;
				hasRot = rotationAvailable();
				vendor = getPrefix();

				var i,
					that = this,
					pageNum = 0,
					data = this.data(),
					ch = this.children();

				options = $.extend({
					width: this.width(),
					height: this.height(),
					direction: this.attr("dir") || this.css("direction") || "ltr"
				}, turnOptions, options);

				data.opts = options;
				data.pageObjs = {};
				data.pages = {};
				data.pageWrap = {};
				data.pageZoom = {};
				data.pagePlace = {};
				data.pageMv = {};
				data.zoom = 1;
				data.totalPages = options.pages || 0;
				data.eventHandlers = {
					touchStart: $.proxy(turnMethods._touchMove, this),
					touchMove: $.proxy(turnMethods._touchStart, this),
					touchEnd: $.proxy(turnMethods._touchEnd, this),
					start: $.proxy(turnMethods._eventStart, this)
				};

				if (options.when) {

					for(i in options.when) {

						 if(has(i, options.when)) {

						 	this.bind(i, options.when[i]);

						 }

					}

				}

				this.css({position: "relative", width: options.width, height: options.height});

				this.turn("display", options.display);

			},

			_touchStart: function() {

			},

			_touchMove: function() {

			},

			_touchEnd: function() {

			},

			_eventStart: function() {

			}

		},

	// entend $.fn
	$.entend($.fn, {

		flip: function() {

		},

		turn: function() {

		},

		transform: function() {

		},

		animate: function() {

		}

	});

})(jQuery);