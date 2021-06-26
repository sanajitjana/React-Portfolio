(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);

    /*============================= Navigation Section ==============================*/

    

    /*============================= Smoothscroll js ==============================*/
    
    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*====================================== jquery scroll spy ========================================*/
    
    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });

    /*====================================== Fancybox ========================================*/

    $('.fancybox-buttons').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    /*====================================== Fancybox-script ========================================*/

    $(".fancybox").fancybox();

    /*====================================== Mixit-up ========================================*/

    var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

    /*====================================== Parallex ========================================*/

    $('.parallax').scrolly({bgParallax: true});


})(jQuery);


/*============================= Preload==============================*/

$(window).on('load' ,function () {
    "use strict";
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    ;
});


/*======================================counter-up ========================================*/

$('.Count').each(function () {
    "use strict";
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});