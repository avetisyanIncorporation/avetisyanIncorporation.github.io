$(document).ready(function() {

    "use strict";

    var imagesDir = 'images/eyez/';
    function set_body_height() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var isMobile = windowHeight > windowWidth;
        $('.backgr').height(windowHeight);
        $('.backgr').width(windowWidth);

        $('.eye').css('height', '');
        $('.eye').css('width', '');

        if (isMobile) {
            if (!$('.revert.light.eye').attr('src')) {
                $('.revert.light.eye').attr('src', imagesDir + 'eyeRev.png');
                $('.revert.light.backgr').attr('src', imagesDir + 'backRev.png');
                $('.revert.dark.eye').attr('src', imagesDir + 'eyeRevn.png');
                $('.revert.dark.backgr').attr('src', imagesDir + 'backRevn.png');
            }

            $('.light.eye').height(windowHeight * 0.9);
            $('.dark.eye').height(windowHeight * 0.95);

            $('.revert').removeClass('hidden');
            $('.straight').addClass('hidden');
        } else {
            if (!$('.straight.light.eye').attr('src')) {
                $('.straight.light.eye').attr('src', imagesDir + 'eyeStr.png');
                $('.straight.light.backgr').attr('src', imagesDir + 'backStr.png');
                $('.straight.dark.eye').attr('src', imagesDir + 'eyeStrn.png');
                $('.straight.dark.backgr').attr('src', imagesDir + 'backStrn.png');
            }

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

    // $('#coin').on('click', function() {
    //     $('#coin').removeClass();
    //     showAnimation();
    // });
});