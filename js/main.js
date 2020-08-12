'use strict';
$(document).ready(function () {
    $(".slider__works").slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
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


    AOS.init({
        // Global settings:
        disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


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

    // Modal
    let modalClose = $("[data-close]");

    modalClose.on("click", function (event) {
        event.preventDefault();

        let modalParent = $(this).parents(".modal");
        modalParent.removeClass("show");
        $("body").removeClass("no-scroll");
    });

    // Calculator

    const span = document.getElementById('final__price');
    let price = 0;

    $('#calculator').on('keyup', function (){
        price =
            document.getElementById('width').value/100 *
            document.getElementById('height').value/100 *
            document.getElementById('deep').value * 150;
        if(document.getElementById('width').value && document.getElementById('height').value && document.getElementById('deep').value){
            span.innerHTML = price
        }
    })



});
