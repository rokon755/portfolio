$(document).ready(function() {
	
 
	
	$('.img_social_icon').each(function() {
		animationHover(this, 'swing');
	});
	
	$('.main_logo').each(function() {
		animationHover(this, 'pulse');
	});
	
	
	
	
	
	
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












