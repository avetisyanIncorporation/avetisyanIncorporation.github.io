$(document).ready(function() {

    "use strict";

    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        loop: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.swiper-wrapper').css('transform', 'rotateY(-45deg)');

});