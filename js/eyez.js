$(document).ready(function() {

    "use strict";

    $('body').on('click', '.lightTumbler', function () {
        if ($(this).hasClass('light')) {
            $(this).addClass('hidden');
            $('.dark').removeClass('hidden');
        } else if ($(this).hasClass('dark')) {
            $(this).addClass('hidden');
            $('.light').removeClass('hidden');
        }
    });

});