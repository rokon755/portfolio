

  $(document).ready(function() {
      //Add Hover effect to menus
	  jQuery('ul.nav > li.dropdown').hover(function() {
		jQuery(this).children('.dropdown-menu').stop(true, true).delay(10).fadeIn("slow");
	  }, function() {
		jQuery(this).children('.dropdown-menu').stop(true, true).delay(10).slideUp("fast");
	  });
	  
	  
	  $('.close').on("click", function(){		 
		  console.log('clicked');
          $('.top-header').slideUp('slow');		  
	  });
	 

		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
		
		// back to top
		if ($('#back-to-top').length) {
		    var scrollTrigger = 100, // px
		        backToTop = function () {
		            var scrollTop = $(window).scrollTop();
		            if (scrollTop > scrollTrigger) {
		                $('#back-to-top').addClass('show');
		            } else {
		                $('#back-to-top').removeClass('show');
		            }
		        };
		    backToTop();
		    $(window).on('scroll', function () {
		        backToTop();
		    });
		    $('#back-to-top').on('click', function (e) {
		        e.preventDefault();
		        $('html,body').animate({
		            scrollTop: 0
		        }, 700);
		    });
		}
			
  	  
  });