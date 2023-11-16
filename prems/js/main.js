$(document).ready(function(){
    
    //sticky nav
    $(".navbar").sticky({topSpacing:0});
    
    // yamm menu
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    })
    
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });
    
    //tootltip
    $('[data-toggle="tooltip"]').tooltip();
    
    //Popover
    $('[data-toggle="popover"]').popover();
    
   
    
    //owl carousel 3 Columns
    $(".owl-carousel.column-3").owlCarousel({
        nav : true, // Show next and prev buttons
        navText: false,
        dots: false,
        items: 3,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        margin: 15,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    //owl slider
    $('.slider').owlCarousel({
        animateOut: 'zoomOut',
        nav : true, // Show next and prev buttons
        navText: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        smartSpeed: 1000
    });
    
    //owl next prev icons
    $(".owl-carousel .owl-next").addClass("fa fa-angle-right");
    $(".owl-carousel .owl-prev").addClass("fa fa-angle-left");
    


    //CountDown
    $('.countdown').downCount({
        date: '10/21/2017 12:00:00',
        offset: +1
    }, function () {
        //alert('WOOT WOOT, done!');
    });
    
    //CountDown
    $('.countdown-product').downCount({
        date: '10/21/2017 12:00:00',
        offset: +1
    }, function () {
        //alert('WOOT WOOT, done!');
    });
    

    
    //back to top
    $('body').append('<a href="javascript:void(0);" id="back-to-top"><i class="fa fa-angle-up"></i></a>');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 1000);
    });
    
    //wow for animate.css
    new WOW().init();
    
    
});





