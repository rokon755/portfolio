// Add New Class
$(window).scroll(function (){
	var scroll=$(window).scrollTop();
	//console.log(scroll);
	if(scroll >=144){
	  $(".navigation-menu_section").removeClass("navigation-menu_section").addClass("darkHeader")
	}else{
	  $(".darkHeader").removeClass("darkHeader").addClass("navigation-menu_section")
	}
});



// back to top ==========================================================================>
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



//Home Slider =======================================>
    var $slider = $("#home-slider");
    $(document).ready(function() {
        $slider.slick({
            autoplay: true,
            autoplaySpeed: 14000,
            dots: true,
            infinite: true,
            fade: true,
            arrows: false,
            pauseOnHover: false,
            speed: 1500,
        });
        $(
            "#home-slider-container .slider-controls .slider-prev"
        ).on("click", function() {
            $slider.slick("slickPrev");
        });
        $(
            "#home-slider-container .slider-controls .slider-next"
        ).on("click", function() {
            $slider.slick("slickNext");
        });

        $slider
            .find(".slider-content")
            .css({ height: $(window).height(), eidth: $(window).width() });
    });

        $(window).resize(function() {
            $slider
                .find(".slider-content")
                .css({ height: $(window).height(), eidth: $(window).width() });
        });




    //About Us Slider
    $('.about_bcsa-slider-here').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        fade: false,
        arrows: false,
        pauseOnHover: true,
        speed: 800,
    });





$(".home_main-slider").vegas({
    delay: 20000,
    timer: false,
    animation: 'random',
    shuffle: false,
    firstTransition: 'blur',
    firstTransitionDuration: 2000,
    transition: ['blur2', 'zoomIn', 'zoomOut', 'swirlLeft', 'swirlRight', 'burn2', 'flash'],
    transitionDuration: 5000,
    loop: true,
    autoplay: true,
    cover: true,
    slides: [
        { src: "img/slide1.jpg" },
        { src: "img/slide2.jpg" },
        { src: "img/slide3.jpg" },
        { src: "img/pic1.jpg" },
        { src: "img/maxresdefault.jpg" },
        { src: "img/C-bhcLpUwAEusgO.jpg" },
        { src: "img/Ispahani_End,_Sher-e-Bangla_Cricket_Stadium.jpg" }

    ],
    overlay: true
});



