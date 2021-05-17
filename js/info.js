$(document).ready(function() {

    "use strict";

    function set_body_height() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var isMobile = windowHeight > windowWidth;
        var imgProportion = 1.2335;
        if (isMobile) {
            $('.swiper').css('height', windowWidth / imgProportion - 2);
            $('.swiper').css('width', windowWidth);

            $('.about').css('height', ((windowHeight - (windowWidth / imgProportion - 2))) - windowHeight * 0.05);
            $('.about').css('width', windowWidth);
            $('.about-text-wrapper').css("margin-top", '5%');

            $('.content').css("margin-right", '');
            $('.content').css("margin-left", '');
            $('.content').css("margin-top", '');
        } else {
            $('.swiper').height(windowHeight * 0.8);
            $('.swiper').width(windowHeight * 0.8 * imgProportion);

            $('.about').height(windowHeight * 0.8);
            $('.about').width(((windowWidth - (windowHeight * imgProportion)) * 0.8));
            $('.about-text-wrapper').css("margin-top", '');

            $('.content').css("margin-right", '7%');
            $('.content').css("margin-left", '7%');
            $('.content').css("margin-top", '5%');
        }
    }
    $(window).bind('resize', set_body_height);
    set_body_height();

});