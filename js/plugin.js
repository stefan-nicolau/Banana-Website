/*global $, console, WOW, run, JsPDF, iScrollPos*/
$(document).ready(function () {
    "use strict";
   
    //heights
    $('header, .colors, .inside, .dont-throw, .dishes, .our-product, .try-banana').css({
        minHeight: $(window).height()
    });
    //arrow
    $('header .fa-chevron-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.colors').offset().top
        });
    });
    
    
    //navigation
    $('.navigation li').on('click', function () {
        $('html, body').stop('true').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 500).delay(10).queue(function () {
            $(this).finish();
        });
        $(this).children('i').css({
            opacity: 1,
            borderColor: '#a0801b'
        });
        $(this).siblings().children('i').css({
            opacity: '.3',
            borderColor: 'transparent'
        });
    });
//////////////////////
    

    var position = $(window).scrollTop(),
        height = $(window).height() / 40;
    if ($(window).width() > 769) {
        //////////////////////////////////////
        $('.colors img').css({
            top: -($(window).height() / 2)
        });
        $('.inside img').css({
            top: -($(window).height() / 2.5)
        });
        $('.dont-throw img').css({
            top: -($(window).height() / 2.3)
        });
        $('.our-product img').css({
            top: -($(window).height() / 2)
        });
        $('.try-banana img').css({
            top: -($(window).height() / 2.2)
        });
        ///////////////////////////////////////
        $(window).scroll(function () {
            var scroll = $(window).scrollTop(),
                windowScrollTop = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > position) {
                //down
                if (windowScrollTop > 1 && windowScrollTop < ($('.colors').offset().top - 1)) {
                    //colors
                    $('.navigation li:nth(1)').click();
                    $('.colors img').animate({top: '+=10'}, 15, 'swing');
                    $('header img.center-block').animate({top: '+=20'}, 15, 'swing');
                } else if (windowScrollTop > ($('.colors').offset().top + 1) && windowScrollTop < $('.inside').offset().top - 1) {
                    //inside
                    $('.navigation li:nth(2)').click();
                    $('.inside img').animate({top: '+=10'}, 15, 'swing');
                    $('.colors img').css({
                        top: 0
                    });
                    $('header img.center-block').css({
                        top: ($(window).height())
                    });
                } else if (windowScrollTop > ($('.inside').offset().top + 1) && windowScrollTop < $('.dont-throw').offset().top - 1) {
                    //don't throw
                    $('.navigation li:nth(3)').click();
                    $('.dont-throw img').animate({top: '+=10'}, 15, 'swing');
                    $('.inside img').css({
                        top: 0
                    });
                } else if (windowScrollTop > ($('.dont-throw').offset().top + 1) && windowScrollTop < $('.dishes').offset().top - 1) {
                    //dishes
                    $('.navigation li:nth(4)').click();
                    $('.dishes').animate({
                        backgroundPositionY: '+=10'
                    }, 10, 'swing');
                    $('.dont-throw img').css({
                        top: 0
                    });
                } else if (windowScrollTop > ($('.dishes').offset().top + 1) && windowScrollTop < $('.our-product').offset().top - 1) {
                    //our product
                    $('.navigation li:nth(5)').click();
                    $('.our-product img').animate({top: '+=10'}, 15, 'swing');
                    $('.dishes img').css({
                        top: 0
                    });
                } else if (windowScrollTop > ($('.our-product').offset().top + 1) && windowScrollTop < $('.try-banana').offset().top - 1) {
                    //try banana
                    $('.navigation li:nth(6)').click();
                    $('.try-banana img').animate({top: '+=10'}, 15, 'swing');
                    $('.our-product img').css({
                        top: 0
                    });
                } else if (windowScrollTop > ($('.try-banana').offset().top + 10) && windowScrollTop < $('footer').offset().top - 10) {
                    //footer
                    $('.navigation li:nth(7)').click();
                }


            } else {
                //up
                if (windowScrollTop > 1 && windowScrollTop < ($('.colors').offset().top - 1)) {
                    //colors
                    $('.navigation li:nth(0)').click();
                    $('.colors img').animate({top: '-=10'}, 15, 'swing');
                    $('header img.center-block').animate({top: '-=20'}, 15, 'swing');
                } else if (windowScrollTop > ($('.colors').offset().top + 1) && windowScrollTop < $('.inside').offset().top - 1) {
                    //inside
                    $('.navigation li:nth(1)').click();
                    $('.inside img').animate({top: '-=10'}, 15, 'swing');
                } else if (windowScrollTop > ($('.inside').offset().top + 1) && windowScrollTop < $('.dont-throw').offset().top - 1) {
                    //don't throw
                    $('.navigation li:nth(2)').click();
                    $('.dont-throw img').animate({top: '-=10'}, 15, 'swing');
                } else if (windowScrollTop > ($('.dont-throw').offset().top + 1) && windowScrollTop < $('.dishes').offset().top - 1) {
                    //dishes
                    $('.navigation li:nth(3)').click();
                    $('.dishes').animate({
                        backgroundPositionY: '-=10'
                    }, 10, 'swing');
                } else if (windowScrollTop > ($('.dishes').offset().top + 1) && windowScrollTop < $('.our-product').offset().top - 1) {
                    //our product
                    $('.navigation li:nth(4)').click();
                    $('.our-product img').animate({top: '-=10'}, 15, 'swing');
                } else if (windowScrollTop > ($('.our-product').offset().top + 1) && windowScrollTop < $('.try-banana').offset().top - 1) {
                    //try banana
                    $('.navigation li:nth(5)').click();
                    $('.try-banana img').animate({top: '-=10'}, 15, 'swing');
                } else if (windowScrollTop > ($('.try-banana').offset().top + 10) && windowScrollTop < $('footer').offset().top - 10) {
                    //footer
                    $('.navigation li:nth(6)').click();
                }



            }

            position = scroll;
        });
     
        ////////////////////////////////////
        //if window < 1
    }
    

});
