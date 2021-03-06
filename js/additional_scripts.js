var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

    $(".scroll-box").mCustomScrollbar();

    initCustomScrollbar();

});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    initCustomScrollbar();

});

$(document).ready(function() {

	$(".slider_1").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".slider_2").not(".slick-initialized").slick({
        dots: true,
        appendArrows: $(".slider-2_arrows"),
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                appendArrows: $(".slider-2_arrows-resp"),
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".slider-2_arrows-resp")
              }
            }
          ]
    });

    $(".slider_2_2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });

    $(".slider-3").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });

    $(".card-slider-big").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.card-slider-miniatures'
    });

    $('.card-slider-miniatures').slick({
        slidesToScroll: 1,
        slidesToShow: 10,
        asNavFor: '.card-slider-big',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 12,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 10,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            }
          ]
    });

    var articleSlider = $('.article-slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        fade: true
    });

    $("[data-slider-count]").each(function() {

        var sliderName = $(this).attr("data-slider-count");

        var slidesLength = $("[data-slider = "+ sliderName +"] .slide").length;

        $(this).find(".slides-length").text(slidesLength);

    });

    articleSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){

        var sliderName = $(this).attr("data-slider");

        var currentSlideBox = $("[data-slider-count = "+ sliderName +"] .current-slide");

        currentSlideBox.text(currentSlide + 1);

    });

    $("select").select2({
        minimumResultsForSearch: Infinity
    });

    // $(".scroll-menu").each(function() {

    //     new PerfectScrollbar(this, {
    //       wheelSpeed: .5
    //     });

    // });

    //  Слайдер диапазона цен 

    if( $(".range-slider").length > 0 ) {

        var keypressSlider = document.getElementById('range_slider');
        var input0 = document.getElementById('range_1');
        var input1 = document.getElementById('range_2');
        var inputs = [input0, input1];

        noUiSlider.create(keypressSlider, {
            start: [40000, 540000],
            connect: true,
            range: {
                'min': 40000,
                'max': 800000
            }
        });

        keypressSlider.noUiSlider.on('update', function( values, handle ) {
            inputs[handle].value = parseInt(values[handle]);
        });

        function setSliderHandle(i, value) {
            var r = [null,null];
            r[i] = value;
            keypressSlider.noUiSlider.set(r);
        }

        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function(){
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function( e ) {

                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);

                var steps = keypressSlider.noUiSlider.steps();

                var step = steps[handle];

                var position;

                switch ( e.which ) {

                    case 13:
                        setSliderHandle(handle, this.value);
                        break;

                    case 38:

                        position = step[1];

                        if ( position === false ) {
                            position = 1;
                        }

                        if ( position !== null ) {
                            setSliderHandle(handle, value + position);
                        }

                        break;

                    case 40:

                        position = step[0];

                        if ( position === false ) {
                            position = 1;
                        }

                        if ( position !== null ) {
                            setSliderHandle(handle, value - position);
                        }

                        break;
                }
            });
        });

    }

    $(function() {

        if( $("#sidebar").length > 0 ) {

            $("#sidebar").swipe({

                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

                    if(direction == "left") {

                        $("#sidebar").animate({
                            "left" : -100 + "%"
                        }, 500);

                        $(".sidebar_bg").fadeOut(500);
                    }

                }

            });

        }
    });

});

function initCustomScrollbar() {

    if( bodyWidth < 900 ) {

        $(".catalog-nav_wrapp").mCustomScrollbar();

    } else {

        $(".catalog-nav_wrapp").mCustomScrollbar('destroy');

    }

}

