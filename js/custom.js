(function(jQuery) {

    "use strict";
	
    jQuery(document).ready(function() {
		
		// PRELOADER
        jQuery("body").toggleClass("loaded");
        setTimeout(function() {
            jQuery("body").addClass("loaded");
        }, 3000);
		
		// PORTFOLIO DIRECTION AWARE HOVER EFFECT
		var item = jQuery("#bl-work-items>div");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			jQuery(item[i]).hoverdir();
		}
		
		// TEXT ROTATOR
		jQuery("#selector").animatedHeadline({
             animationType: "clip"
        });
		
		// BOX LAYOUT
        Boxlayout.init();
		
		// REMOVE # FROM URL
		jQuery("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));

        // AJAX CONTACT FORM
        jQuery(".contactform").on("submit", function() {
            jQuery(".output_message").text("Loading...");

            var form = jQuery(this);
            jQuery.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        jQuery(".contactform").find(".output_message").addClass("success");
                        jQuery(".output_message").text("Message Sent!");
                    } else {
                        jQuery(".contactform").find(".output_message").addClass("error");
                        jQuery(".output_message").text("Error Sending!");
                    }
                }
            });

            return false;
        });

		// MATERIAL CAROUSEL
        jQuery(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true,
        });
		
		// RESUME CARDS ANIMATION
		if (jQuery(window).width() > 800) {
			jQuery(".resume-list-item, .resume-card").on("click", function() {
				jQuery(".resume-list-item").removeClass("is-active");
				var e = parseInt(jQuery(this).data("index"),10);
				jQuery("#resume-list-item-" + e).addClass("is-active");
				var t = e + 1,
					n = e - 1,
					i = e - 2;
				jQuery(".resume-card").removeClass("front back up-front up-up-front back-back"), jQuery(".resume-card-" + e).addClass("front"), jQuery(".resume-card-" + t).addClass("back"), jQuery(".resume-card-" + n).addClass("back-back"), jQuery(".resume-card-" + i).addClass("back")
			});
		}
		
    });

})(jQuery);