$(document).ready(function() {

    "use strict";

    function set_body_height() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var isMobile = windowHeight > windowWidth;
        $('.backgr').height($(window).height());
        $('.backgr').width($(window).width());

        $('.eye').css('height', '');
        $('.eye').css('width', '');

        if (isMobile) {
            $('.light.eye').height(windowHeight * 0.9);
            $('.dark.eye').height(windowHeight * 0.95);

            $('.revert').removeClass('hidden');
            $('.straight').addClass('hidden');
        } else {
            $('.light.eye').width(windowWidth * 0.9);
            $('.dark.eye').width(windowWidth * 0.95);

            $('.straight').removeClass('hidden');
            $('.revert').addClass('hidden');
        }
    }
    $(window).bind('resize', set_body_height);
    set_body_height();

    function showAnimation() {
        setTimeout(function() {
            $('#coin').addClass('animation1080');
        }, 100);
    }
    showAnimation();

    $('#coin').on('click', function() {
        $('#coin').removeClass();
        showAnimation();
    });
});