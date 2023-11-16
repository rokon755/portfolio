



(function ($) {
    'use strict';

    jQuery(document).on("ready", function () {




        //Slick Slider
        $('.single-item').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: true,
          dots: true,
          speed: 2000,
          fade: true
        });


        /*
        ===================================================
         STEP HOME PAGE TWO SLIDER ANIMATION
        ===================================================
        */
        $(".slider-active-home-one").on("translate.owl.carousel", function () {
            $(".slide-content h2").removeClass("animated fadeIn").css("opacity", "0");
            $(".slide-content p").removeClass("animated flipInX").css("opacity", "0");
            $(".slide-content a.btn-mr").removeClass("animated flipInX").css("opacity", "0");
            $(".slide-content a.btn-mr.white").removeClass("animated flipInX").css("opacity", "0");
        });

        $(".slider-active-home-one").on("translated.owl.carousel", function () {
            $(".slide-content h2").addClass("animated fadeIn").css("opacity", "1");
            $(".slide-content p").addClass("animated flipInX").css("opacity", "1");
            $(".slide-content a.btn-mr").addClass("animated flipInX").css("opacity", "1");
            $(".slide-content a.btn-mr.white").addClass("animated flipInX").css("opacity", "1");
        });

        /*
        ===================================================
         STEP OWL CAROSEL ACTIVATION
        ===================================================
        */

        // slider activatin
        $('.slider-active-home-one').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout: 7000,
            smartSpeed: 2000,
            nav: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            mouseDrag: false,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
        //Step tem 01
        $('.team-active1').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 2
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });
        //Step tem 03
        $('.team-active1-three').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 2
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 4
                }
            }
        });
        //product carosel active
        $('.product-carosel-active').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            mouseDrag: true,

            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 4
                },
                768: {
                    items: 4
                },
                980: {
                    items: 5
                },
                1199: {
                    items: 6
                }
            }
        });
        //product carosel active
        $('.testimonials-active').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
        //projects-detials-active
        $('.projects-detials-active').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-double-right"></i>', '<i class="fa fa-angle-double-left"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
        //event carosel active
        $('.events-carosel-acitve').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
        //team details active
        $('.team-detils-active').owlCarousel({
            loop: true,
            margin: 0,
            mouseDrag: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });
        //event gallery active
        $('.evenet-gallery-active').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 2
                },
                980: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        });
        //related-project-active
        $('.related-project-active,.portfolio-carosel-active').owlCarousel({
            loop: true,
            nav: true,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 3
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });


        /*
        ===================================================
         STEP DATE PICKER
        ===================================================
        */
        $("#datepicker").datepicker();




        /*
        ===================================================
         STEP SCROLL TO UP
        ===================================================
        */


        $.scrollUp({
            scrollText: '<i class="fa fa-angle-double-up"></i>'

        });


        /*
        ===================================================
            MAGNIFIPOPUP ACTIVATION
        ===================================================
        */


        $('.img-poppu').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });



        /*
        ==========================================
        STEP STICKY  MENU JS
        ==========================================
        */

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".step-header.home-two,.mian-menu-area,.step-header.home-three").removeClass("sticky slideInDown animated");
            } else {
                $(".step-header.home-two,.mian-menu-area,.step-header.home-three").addClass("sticky slideInDown animated");
            }
        });
        /*
        ==========================================
            FULLSCREEN MENU ACTIVATION
        ==========================================
        */

        $(".menu-bar a").on("click", function () {
            $(".step-fullscreenmenu").toggleClass("show-menu");
            $("span.open-close").toggleClass("colse");
            return false
        });

        /*
        ==========================================
        SWIPPER SLIDER ACTIVATION
        ==========================================
        */

        var animEndEv = 'webkitAnimationEnd animationend';

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 0,
            direction: 'vertical',
            autoplayDisableOnInteraction: false,
            loop: true,
            mousewheelControl: false,
            onSlideChangeStart: function (s) {
                var currentSlide = $(s.slides[s.activeIndex]);
                var elems = currentSlide.find(".animated")
                elems.each(function () {
                    var $this = $(this);
                    var animationType = $this.data('animation');
                    $this.addClass(animationType, 100).on(animEndEv, function () {
                        $this.removeClass(animationType);
                    });
                });

            },
            onSlideChangeEnd: function (s) {
                var currentSlide = $(s.slides[s.activeIndex]);

            }
        });

        /*
        ==========================================
        ISOTOP ACTIVATION
        ==========================================
        */
        $('.grid').imagesLoaded(function () {
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });
        });

        //main filter activation
        $('.filter-list').on('click', 'li',
            function () {
                $('.filter-list li').removeClass(
                    'active');
                $(this).addClass('active');
                var filterValue = $(this).attr(
                    'data-filter');
                $('.grid').isotope({
                    filter: filterValue
                });
                $(window).trigger('resize');
            });


        /*
        ==========================================
        MOBILE MENU AND OFFCANVAS MENU
        ==========================================
        */
        $(".menu-click,a.mobile-menu-step").on('click', function () {
            $(".home3-offcanvas-menu-rapper,.offcanvas-overlay,.mobile-menu-offcanvas,.mobile-menu-overlay").toggleClass("active");
            return false;
        });
        $(".menu-close-ion,.offcanvas-overlay,.mobile-offcanvas-close a,.mobile-menu-overlay").on('click', function () {
            $(".home3-offcanvas-menu-rapper,.offcanvas-overlay,.mobile-menu-offcanvas,.mobile-menu-overlay").removeClass("active");
            return false;
        });
        $(".has-child-2,.has-child-3").on('click', function () {


            $(this).children("ul.sub-menu-2,ul.sub-menu-3").slideToggle("vs");
            $(this).toggleClass("chang-icon");

        });

        // sildetoggole click problem solution	

        $("ul.sub-menu-2 li,ul.sub-menu-3 li").on("click", function (p) {
            p.stopPropagation();
        });
        // change span icon toogle class
        $(".menu-click").on('click', function () {
            $(".menu-click").toggleClass("cg");

        });
        // change span icon remove class
        $(".offcanvas-overlay,.menu-close-ion i.fa").on('click', function () {
            $(".menu-click").removeClass("cg");

        });

        /*
        ==========================================
        OFFCANVAS COMMING SOON 
        ==========================================
        */
        $("a.coming-soon-menu,.coming-soon-body-content a.lrn-more").on('click', function () {
            $(".comming-soon-ovvcanvas-rapper,.comb-overlay").toggleClass("active");
            return false;
        });
        $(".comg-cls,.comb-overlay").on('click', function () {
            $(".comming-soon-ovvcanvas-rapper,.comb-overlay").removeClass("active");
            return false;
        });
        /*
        ==========================================
        SEARCH OPTION 
        ==========================================
        */
        $(".click-serach-step").on('click', function () {
            $(".search-rapper-step").toggleClass("active");
            return false;
        });
        $("a.serc-clse").on('click', function () {
            $(".search-rapper-step").removeClass("active");
            return false;
        });

        /*
        ==========================================
        COMMING SOON PAGE NOTIFY 
        ==========================================
        */
        $(".coming-soon-body-content a.mr-modal").on('click', function () {
            $(".notyfy-me-segment-rapper").toggleClass("active");
            return false;
        });
        $(".notifay-close a.noti-close").on('click', function () {
            $(".notyfy-me-segment-rapper").removeClass("active");
            return false;
        });



        /*
        ==========================================
        PRELODER ACTIVATION
        ==========================================
        */

        jQuery(window).on("load", function () {
            jQuery(".step-preloader-rapper").fadeOut(300);
        });


        /*
        ==========================================
        PROGRESSBAR ACTIVATION
        ==========================================
        */

        $(".progress").each(function () {
            var e = $(this).attr("data-percent"),
                t = $(this).prev(".progress-title"),
                a = $(this).children(".progress-title");
            t.length > 0 ? t.css("width", e) : a.length > 0 && a.css("width", e), $(this).appear(function () {
                $(this).find(".progress-bar").animate({
                    width: e
                }, 500)
            })
        });

        /*
        ==========================================
        PRICE TABLE HOVER EFFECTS
        ==========================================
        */

        $(".single-price-table-1,.single-pricing-table").on("mouseover", function () {

            $(".single-price-table-1,.single-pricing-table").removeClass("active");
            $(this).addClass("active");
        });




        /*
        ==========================================
        RIPPLE ACTIVATIN FOR COMMING SOON PAGE
        ==========================================
        */
        var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
        var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
        var ripple = $('#page-ripple');

        if (ripple.length && !isMobile && !isTouch) {
            ripple.ripples({
                resolution: 512,
                dropRadius: 10, //px
                perturbance: 0.04,
                interactive: false
            });

            setInterval(function () {
                var $el = ripple;
                var x = Math.random() * $el.outerWidth();
                var y = Math.random() * $el.outerHeight();
                var dropRadius = 20;
                var strength = 0.04 + Math.random() * 0.04;

                $el.ripples('drop', x, y, dropRadius, strength);
            }, 3000);
        };

        /*
        ==========================================
        RANGE SLIDER ACTIVATION
        ==========================================
        */
        $("#slider-range").slider({
            range: true,
            min: 40,
            max: 600,
            values: [60, 570],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));

        /*
        ==========================================
        HOME TWO MOBILE MENU
        ==========================================
        */

        if ($(window).width() < 767) {
            // for mobile menu

            $(".has-menu").on("click", function () {

                $(this).children("ul.drop-menu").slideToggle();
                $(this).toggleClass("mnt");

            });


        };







    });

})(jQuery);