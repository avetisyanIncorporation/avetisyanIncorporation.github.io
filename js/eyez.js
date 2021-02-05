$(document).ready(function() {

    "use strict";

    $('body').on('click', '#lightTumbler', function () {
        if ($(this).hasClass('dark-theme')) {
            $('.light').removeClass('hidden');
            $('.dark').addClass('hidden');
            $(this).removeClass('dark-theme');
        } else {
            $('.light').addClass('hidden');
            $('.dark').removeClass('hidden');
            $(this).addClass('dark-theme');
        }
    });

});