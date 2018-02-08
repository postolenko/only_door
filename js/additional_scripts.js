$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

    $(".scroll-box").mCustomScrollbar();

});

$(document).ready(function() {

	$(".slider_1").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 2
    });

    $(".slider_2").not(".slick-initialized").slick({
        dots: true,
        appendArrows: $(".slider-2_arrows"),
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 3
    });

    $(".slider_2_2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 3
    });

    $(".slider-3").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 4
    });

    $(".card-slider-big").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.card-slider-miniatures'
    });

    $('.card-slider-miniatures').slick({
        slidesToScroll: 1,
        slidesToShow: 10,
        asNavFor: '.card-slider-big',
        dots: false,
        focusOnSelect: true
    });

    $("select").select2({
        minimumResultsForSearch: Infinity
    });

});

