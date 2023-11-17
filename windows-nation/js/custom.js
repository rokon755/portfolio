$(window).on('load', function () {
    var progress_status = false;
    var status_change = false;

    var single_equivalent = false;
    var single_status = false;

    var multi_equivalent = false;
    var multi_status = false;

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function () {
        $('.progress--bar').each(function () {


            if ($(this).isInViewport()) {
                status_change = (!progress_status) ? true : false;

                progress_status = true;

                if (progress_status && status_change) {
                    document.querySelectorAll(".progress--bar--bg").forEach(function (currentElement, index) {
                        var elem = currentElement;
                        var width = 1;
                        var id = setInterval(frame, 25);

                        function frame() {
                            if (width >= currentElement.getAttribute('data-progress')) {
                                clearInterval(id);
                                i = 0;
                            } else {
                                width++;
                                elem.style.width = width + "%";
                            }
                        }
                    });
                }


            } else {
                status_change = (progress_status) ? true : false;
                progress_status = false;
            }
        });

        $('#single_equivalent').each(function () {

            if ($(this).isInViewport()) {
                single_status = (!single_equivalent) ? true : false;

                single_equivalent = true;

                if (single_equivalent && single_status) {
                    if (jQuery("#single_equivalent").length) {
                        let number = jQuery("#single_equivalent").data('equivalent');
                        let wed = 0;
                        if (number < 4) {
                            wed = 100 / number;
                        } else {
                            wed = 25;
                        }
                        let html = `<img class="" src="img/single--gas.png" alt="" style="width: ${wed}%; height: auto;">`;
                        // for(let i = 1; i <= number; i++) {
                        //     jQuery("#single_equivalent").append(html);
                        // }
                        let counter = 0;
                        jQuery("#single_equivalent").html("");
                        let id = setInterval(frame, 180);

                        function frame() {
                            if (counter >= number) {
                                clearInterval(id);
                                i = 0;
                            } else {
                                counter++;
                                jQuery("#single_equivalent").append(html);
                            }
                        }
                    }
                }
            } else {
                single_status = (single_equivalent) ? true : false;
                single_equivalent = false;
            }
        });

        $('#multiple_equivalent').each(function () {

            if ($(this).isInViewport()) {
                multi_status = (!multi_equivalent) ? true : false;

                multi_equivalent = true;

                if (multi_equivalent && multi_status) {
                    if (jQuery("#multiple_equivalent").length) {
                        let number = jQuery("#multiple_equivalent").data('equivalent');
                        let wed = 0;
                        if (number < 27) {
                            wed = 100 / number;
                        } else {
                            wed = 100 / 27;
                        }
                        let html = `<img class="" src="img/single--gas.png" alt="" style="width: ${wed}%; height: auto;">`;
                        // for(let i = 1; i <= number; i++) {
                        //     jQuery("#multiple_equivalent").append(html);
                        // }
                        let counter = 0;
                        jQuery("#multiple_equivalent").html("");
                        let fraction_value = 0;
                        let is_fraction_value = false;
                        let devisor = 0;
                        let id = setInterval(frame, 20);

                        let count_number = number;
                        if(number%27 != 0){
                            devisor = (Math.floor(number/27)+1)
                            count_number = devisor*27;
                            is_fraction_value = true;
                            fraction_value = number % devisor;
                        }

                        function frame() {
                            let f_counter = true;
                            if (counter >= count_number) {
                                clearInterval(id);
                            } else {
                                counter++;
                                if(is_fraction_value){
                                    for(let i = 1; i <= devisor; i++) {
                                        if(i>fraction_value && counter==(i*27)){
                                            jQuery("#multiple_equivalent").append(`<span style="width: ${wed}%; height: auto;">&nbsp;</span>`);
                                            f_counter = false;
                                        }
                                    }
                                }
                                if(f_counter){
                                    jQuery("#multiple_equivalent").append(html);
                                }
                            }
                        }
                    }
                }
            } else {
                multi_status = (multi_equivalent) ? true : false;
                multi_equivalent = false;
            }
        });


    });
})



document.querySelector('html').classList.remove('no-js');
if (!window.Cypress) {
    const scrollCounter = document.querySelector('.js-scroll-counter');

    AOS.init({
        mirror: true
    });

    document.addEventListener('aos:in', function(e) {
        console.log('in!', e.detail);
    });

    // window.addEventListener('scroll', function() {
    //   scrollCounter.innerHTML = window.pageYOffset;
    // });
}

    jQuery(function(){
    jQuery('.counterText').rCounter({
        duration: 40
    });
});

