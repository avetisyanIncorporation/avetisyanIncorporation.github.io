$(document).ready(function() {

    "use strict";

    function set_body_height() {
        $('.backgr').height($(window).height());
        $('.backgr').width($(window).width());
        $('.eye').height($(window).height() * 0.9);
        $('.eye').height($(window).height() * 0.9);
    }
    $(window).bind('resize', set_body_height);
    set_body_height();

    // var eyes = $('div');
    // var animate = function(element) {
    //     element.find('.light').toggleClass('hidden');
    //     element.find('.dark').toggleClass('hidden');
    // };
    //
    // function random() {
    //     var min = 0;
    //     var max = eyes.length + 1;
    //     let rand = min + Math.random() * (max - min + 1);
    //     return Math.round(rand);
    // }



    // var i = 0;
    // for (;i<1000;i++) {
        // setTimeout(animate, 250 * i, $(eyes[random()]));
    // }

    setTimeout(function(){
        $('#coin').addClass('animation1080');
    }, 100);

    $('#coin').on('click', function(){

        $('#coin').removeClass();

        setTimeout(function(){
            $('#coin').addClass('animation1080');
        }, 100);

    });

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