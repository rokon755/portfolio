// Loading Text
$(document).ready(function(){
    setTimeout(function() {
    $("#preloader").fadeOut();
  },2000);
});



// Add New Class
$(window).scroll(function (){
  var scroll=$(window).scrollTop();
  //console.log(scroll);
  if(scroll >=1){
    $(".rupayan_navigation_menu").removeClass("rupayan_navigation_menu").addClass("darkHeader")
  }else{
    $(".darkHeader").removeClass("darkHeader").addClass("rupayan_navigation_menu")
  }
});



// Bootstrap Dropdown Hover =============================================================>
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
});

 

//Slick Slider Main Home Slider =============================================================>
$('.rupayan_main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  fade:true,
  dots:false,
  infinite: true,
  speed: 1200,
  lazyLoad: 'ondemand',
  nav : false,
  pauseOnHover: false,
  focusOnSelect: true,
  accessibility: false,
  mobileFirst: true
});



// back to top ==========================================================================>
        if ($('#back-to-top').length) {
            var scrollTrigger = 300, // px
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




    //Message Form Slider
    $('.messages_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      focusOnSelect: true,
      accessibility: true,
      mobileFirst: true,
      speed: 1000,
      dots:true
    });


    //SUB PAGE SLIDER
    $('.sub-page_slider-item').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      mobileFirst: true,
      speed: 1000,
      dots:true,
      fade: true
    });



//Gallery Filtering

$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});







// Office address slider

$('.responsive').slick({
  dots: true,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  focusOnSelect: true,
  accessibility: true,
  mobileFirst: true,
  nav: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








//Magnifying Image

!function ($) {
    "use strict"; 

    /* MAGNIFY PUBLIC CLASS DEFINITION */

    var Magnify = function (element, options) {
        this.init('magnify', element, options)
    }
    Magnify.prototype = {
        constructor: Magnify, 
        init: function (type, element, options) {
            var event = 'mousemove', 
            eventOut = 'mouseleave';
            this.type = type
            this.$element = $(element)
            this.options = this.getOptions(options)
            this.nativeWidth = 0
            this.nativeHeight = 0

            this.$element.wrap('<div class="magnify" \>');
            this.$element.parent('.magnify').append('<div class="magnify-large" \>');
            this.$element.siblings(".magnify-large").css("background","url('" + this.$element.attr("src") + "') no-repeat");

            this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
            this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
        }, 
        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay, hide: options.delay
                }
            }
            return options
        }, 
        check: function (e) {
            var container = $(e.currentTarget);
            var self = container.children('img');
            var mag = container.children(".magnify-large");

            // Get the native dimensions of the image
            if(!this.nativeWidth && !this.nativeHeight) {
                var image = new Image();
                image.src = self.attr("src");

                this.nativeWidth = image.width;
                this.nativeHeight = image.height;

            } else {
                var magnifyOffset = container.offset();
                var mx = e.pageX - magnifyOffset.left;
                var my = e.pageY - magnifyOffset.top;

                if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                    mag.fadeIn(100);
                } else {
                    mag.fadeOut(100);
                }

                if(mag.is(":visible")){
                    var rx = Math.round(mx/container.width()*this.nativeWidth - mag.width()/2)*-1;
                    var ry = Math.round(my/container.height()*this.nativeHeight - mag.height()/2)*-1;
                    var bgp = rx + "px " + ry + "px";

                    var px = mx - mag.width()/2;
                    var py = my - mag.height()/2;
                    mag.css({left: px, top: py, backgroundPosition: bgp});
                }
            }

        }
    }


    /* MAGNIFY PLUGIN DEFINITION */
    $.fn.magnify = function ( option ) {
        return this.each(function () {
            var $this = $(this), 
                data = $this.data('magnify'), 
                options = typeof option == 'object' && option
            if (!data) $this.data('tooltip', (data = new Magnify(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.magnify.Constructor = Magnify

    $.fn.magnify.defaults = {
        delay: 0
    }

    /* MAGNIFY DATA-API */

    $(window).on('load', function () {
        $('[data-toggle="magnify"]').each(function () {
            var $mag = $(this);
            $mag.magnify()
        })
    })
} ( window.jQuery );









$(document).ready(function(){

  var original_width = 0;
  var original_height = 0;


  $(".magnify").mousemove(function(e){
    if(!original_width && !original_height)
    {
      var image_obj = new Image();
      image_obj.src = $(".small").attr("src");
      original_width = image_obj.width;
      original_height = image_obj.height;
      $("#col1").html("orig width=" + original_width + "<br>" + "orig height=" + original_height );
    }
    else
    {
      var magnify_offset = $(this).offset();
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;
      $("#col2").html("pagex="+e.pageX +"<br>"+ "pageY="+ e.pageY);
      $("#col3").html("offset_L=" + magnify_offset.left +"<br>"+"offset_T=" + magnify_offset.top);
      $("#col4").html("mx="+ mx+"<br>"+"my=" +my);
      if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
      {
        $(".large").fadeIn(100);
      }
      else
      {
        $(".large").fadeOut(100);
      }
      if($(".large").is(":visible"))
      {
        //The background position of .large will be changed according to the position
        //of the mouse over the .small image. So we will get the ratio of the pixel
        //under the mouse pointer with respect to the image and use that to position the 
        //large image inside the magnifying glass
        var rx = Math.round(mx/$(".small").width()*original_width - $(".large").width()/2)*-1;
        var ry = Math.round(my/$(".small").height()*original_height - $(".large").height()/2)*-1;
        var bgp = rx + "px " + ry + "px";
        
        //Time to move the magnifying glass with the mouse
        var px = mx - $(".large").width()/2;
        var py = my - $(".large").height()/2;
        //Now the glass moves with the mouse
        //The logic is to deduct half of the glass's width and height from the 
        //mouse coordinates to place it with its center at the mouse coordinates
        
        //If you hover on the image now, you should see the magnifying glass in action
        $(".large").css({left: px, top: py, backgroundPosition: bgp});
      }
    }
  })


})



