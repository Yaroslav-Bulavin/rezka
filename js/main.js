'use strict';
$(document).ready(function () {
    $(".slider__works").slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".slider__reviews").slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#input__tel").mask("+38(999)999-9999");


    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ){
            header.addClass("fixed");
            $("#nav").addClass("active");
            $(".header__logo").addClass("active");
            $(".nav-toggle").addClass("fixed");
        } else {
            header.removeClass("fixed");
            $("#nav").removeClass("active");
            $(".header__logo").removeClass("active");
            $(".nav-toggle").removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".menu").removeClass("active");
        $(".content").removeClass("active");
        $("#nav-toggle").removeClass("active");
        $(".nav.active a").removeClass("active");
        $this.addClass("active");
        $("html,body").animate({
            scrollTop: blockOffset }, 500);
    });

    // Nav toggle
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $(".content").toggleClass("active");
    });

    // Calculator

    const inputs = document.getElementsByTagName('input');
    const span = document.getElementById('final__price');

    window.addEventListener("keyup", (event) => {

        for (let i = 0; i < inputs.length; i++){
            if(event.target === inputs[i]){
                span.innerHTML = inputs[i].value;
            }
        }
    })

});
