//form validation





// back to top
        if ($('#back-to-top').length) {
            var scrollTrigger = 450, // px
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
                }, 1000);
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


$(window).scroll(function (){
	var scroll=$(window).scrollTop();
	//console.log(scroll);
	if(scroll >=110){
	  $(".navigation_bar").removeClass("navigation_bar").addClass("darkHeader")
	}else{
	  $(".darkHeader").removeClass("darkHeader").addClass("navigation_bar")
	}
});



//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    autoplay:true,
    responsiveClass:true,
    autoplayHoverPause:true,
    margin:10,
    nav:false,
    lazyLoad:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})




//Slick Slider
$(document).ready(function(){
  $('.your-class').slick({
    autoplay:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    mobileFirst:true,
    swipeToSlide:true,
    dots:true
  });
});




// service banner another
$(document).ready(function(){
     $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          autoplay:true,
          asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay:true,
      centerMode: true,
      centerPadding: '60px'
    });
});



//Testimonials Slider

$(document).ready(function(){
    $('.single-item').slick({
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        mobileFirst:true,
        swipeToSlide:true,
        dots:true
    });
});