
/**
 * @example
 *   $(document).ready(function(){
 *      var slider = $(this).slider({
 *          sidebar: $("#menu"),
 *          container: $("#container"),
 *          direction: 'left',
 *          closefunction: function() {}
 *      });
 *      $("#button").click(function(){
 *          slider.start();
 *      })
 *    });
 */

(function($) {
    $.fn.slider = function(settings) {

        var option = $.extend({}, $.fn.slider.defaults, settings || {});
		var switchStatus = false;

        var slide = {

            adjust: function(){
                $(window).on('orientationchange', function() {
					slide.stop();
                });
            },

            start: function(){

				if (switchStatus === true) {
					slide.stop();
					return;
				}

				switchStatus = true;

				if (option.statfunction && typeof option.statfunction == 'function') {
                    option.statfunction.call();
                }

                if ('left' === option.direction) {
					option.sidebar.addClass('slide-in')
					option.container.addClass('shift-right');
                }

                if (option.cover) {
                    option.wrapper.find("#js-cover").show();
                }

                option.wrapper.find("#js-cover").off('click MSPointerDown touchstart touchmove').on('click MSPointerDown touchstart touchmove', function(){
                    slide.stop();
                    return;
                });

            },
            
            stop: function(){

				switchStatus= false;
                
				option.container.removeClass('shift-right');
				option.sidebar.removeClass('slide-in');

                if (option.closefunction && typeof option.closefunction == 'function') {
                    option.closefunction.call();
                }

                option.wrapper.find("#js-cover").hide(); 

            }
        }

        this.adjust = function(){
            slide.adjust();
        };
        this.start = function(){
            slide.start();
        };
        this.stop = function(){
            slide.stop();
        };

        slide.adjust();

        return this;
    };

    $.fn.slider.defaults = {
        direction: 'left',
        closefunction: false
    };

})(jQuery);