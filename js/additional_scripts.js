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

});

