$(document).ready(function() {
	
  $('.buzz').each(function() {
    $(this).attr('data-buzz', $(this).text());
  });
  
	$('.img_social_icon').each(function() {
        animationHover(this, 'swing');
    });
	
	$('.service_header').each(function() {
		animationHover(this, 'fadeInDown');
	});
	
	$('.img_social_icon_owner').each(function() {
        animationHover(this, 'swing');
    });
	
	$('.img_social_icon_flag').each(function() {
        animationHover(this, 'tada');
    });
	
	$('#back-to-top').each(function() {
        animationHover(this, 'jello');
    });
	
	$('.img-circle').each(function() {
        animationHover(this, 'flip');
    });
	
	
	
	
	
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
		        }, 2000);
		    });
		}
	
	
	
	
	function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
        });
	}
	
	
	
	function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
  
        });
	}    
});
    
	










