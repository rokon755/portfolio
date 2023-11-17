/**
 * Jquery.rcounter.js 
 * Version: 1.0.0
 * Author: Sharifur
 * Inspired By Benjamin Intal
 * */

(function($) {
    'use strict';
    $.fn.rCounter = function(options) {
        var settings = $.extend({
            duration: 20,
            easing: 'swing',
        }, options);
        return this.each(function() {
            var $this = $(this);

            var startCounter = function() {
                    var numbers = [];
                    var length = $this.length;
                    var startPoint = $this.attr("data-startpoint");
                    if(!startPoint){
                        startPoint = 0;
                    }
                    startPoint = parseInt(startPoint);

                    // var number = $this.text();
                    var number = $this.attr("data-columns");
                    var isComma = /[,\-]/.test(number);
                    var isFloat = /[,\-]/.test(number);
                    var number = number.replace(/,/g, '');
                    var divisions = settings.duration;
                    var decimalPlaces = isFloat ? (number.split('.')[1] || []).length : 0;
                    // console.log(number2);

                    // make number string to array for displaying counterup
                    for (var rcn = divisions; rcn >= 1; rcn--) {

                        var newNum = parseInt(parseInt(number-startPoint) / divisions * rcn + startPoint);


                        if (isFloat) {
                            newNum = parseFloat(parseFloat(number-startPoint) / divisions * rcn + startPoint).toFixed(decimalPlaces);
                        }
                        if (isComma) {
                            while (/(\d+)(\d{3})/.test(newNum.toString())) {
                                newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                            }
                        }

                        numbers.unshift(newNum);
                    }
                    // console.log(numbers);
                    var counterUpDisplay = function() {
                        $this.text(numbers.shift());
                        setTimeout(counterUpDisplay, settings.duration);
                    };
                    setTimeout(counterUpDisplay, settings.duration);
                } // end function

            //bind with waypoints
            $this.waypoint(startCounter, { offset: '100%', triggerOnce: true });
        });


    }

}(jQuery));