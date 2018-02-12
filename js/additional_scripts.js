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
        focusOnSelect: true
    });

    var articleSlider = $('.article-slider').slick({
        dots: false,
        arrows: true,
        // autoplay: true,
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

        // Listen to keydown events on the input field.
        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function(){
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function( e ) {

                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = keypressSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch ( e.which ) {

                    case 13:
                        setSliderHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if ( position === false ) {
                            position = 1;
                        }

                        // null = edge of slider
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

});

