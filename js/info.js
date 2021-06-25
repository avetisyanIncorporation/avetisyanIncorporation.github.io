$(document).ready(function() {

    "use strict";

    function set_body_height() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var isMobile = windowHeight > windowWidth;
        var imgProportion = 1.33;
        if (isMobile) {
            $('.swiper').css('height', windowWidth / imgProportion - 2);
            $('.swiper').css('width', windowWidth);

            $('.about').css('height', (((windowHeight - (windowWidth / imgProportion - 2))) - windowHeight * 0.05) * 0.8);
            $('.about').css('width', windowWidth);

            $('.about-text-wrapper').css("margin-top", '7%');
            $('.swiper').css("margin-right", '1%');
            $('.content').css("margin-right", '');
            $('.content').css("margin-left", '1%');
            $('.content').css("margin-top", '1%');
        } else {
            $('.swiper').height(windowHeight * 0.8 + 45);
            $('.swiper').width(windowHeight * 0.8 * imgProportion);

            $('.about').height(windowHeight * 0.8);
            $('.about').width(((windowWidth - (windowHeight * imgProportion)) * 0.85));

            $('.about-text-wrapper').css("margin-top", '');
            $('.swiper').css("margin-right", '');
            $('.content').css("margin-right", '7%');
            $('.content').css("margin-left", '7%');
            $('.content').css("margin-top", '5%');
        }
    }
    $(window).bind('resize', set_body_height);
    set_body_height();

    $('.contacts').hover(function () {
        $(this).toggleClass('active');
    });
});