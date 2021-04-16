$(document).ready(function() {

    "use strict";

    // function set_body_height() {
    //     $('body').height($(window).height());
    // }
    // $(window).bind('resize', set_body_height);
    // set_body_height();

    var eyes = $('td');
    var animate = function(element) {
        element.find('.light').toggleClass('hidden');
        element.find('.dark').toggleClass('hidden');
    };

    function random() {
        var min = 0;
        var max = eyes.length + 1;
        let rand = min + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    var i = 0;
    for (;i<1000;i++) {
        setTimeout(animate, 500 * i, $(eyes[random()]));
    }

    // $('body').on('click', '.lightTumbler', function () {
    //     if ($(this).hasClass('light')) {
    //         $(this).addClass('hidden');
    //         $('.dark').removeClass('hidden');
    //     } else if ($(this).hasClass('dark')) {
    //         $(this).addClass('hidden');
    //         $('.light').removeClass('hidden');
    //     }
    // });

});