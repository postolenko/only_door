var popupName;
var hide_element;
var popupBlock;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    getCustomizeParams();

});

$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
   
    $(window).resize(function() {

        getCustomizeParams();

        // ------------------

        $(".popup-wrapp").each(function(){

            if( $(this).hasClass("active") ) {

                $(this).find(".popup").css({
                    "margin-top" : ( $(window).height() - popupBlock.find(".popup").outerHeight(true) ) / 2 + "px"
                });

            }

        });

        

    });
    
    // var thumb;
    // var thumbsHeightArr = [];
    // var thumbHeight;
    // var maxThumbHeight;

    // $(".thumbnails_3").each(function() {

    //     thumbsHeightArr = [];

    //     thumb = $(this).find(".thumb_3");

    //     thumb.each(function() {

    //         thumbHeight = thumb.find(".desc_wrapp").height();

    //         thumbsHeightArr.push(thumbHeight);

    //     });

    //     maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

    //     thumb.css({
    //         "height" : maxThumbHeight + "px"
    //     });

    // });

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-show-popup");
            popupBlock = $("#"+popupName);

            if( !popupBlock.hasClass("active") ) {

                popupBlock.addClass("active");

                popupBlock.animate({
                    "opacity" : 1
                }, 400);

                popupBlock.find(".popup").animate({
                    "margin-top" : ( $(window).height() - popupBlock.find(".popup").outerHeight(true) ) / 2 + "px"
                }, 400);

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".popup-wrapp").each(function() {

                    if ( $(this).hasClass("active") ) {

                        $(this).animate({
                            "opacity" : 0
                        }, 400);

                        setTimeout(function() {

                            $(this).removeClass("active");

                        }, 700);

                    }

                });

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup-wrapp");

            popupBlock.animate({
                "opacity" : 0
            }, 400);

            setTimeout(function() {

                popupBlock.removeClass("active");

            }, 700);

        });

        $(document).mouseup(function (e){

            hide_element = $('.popup');

            popupBlock = hide_element.closest(".popup-wrapp");

            if (!hide_element.is(e.target)
                && hide_element.has(e.target).length === 0 
                && popupBlock.hasClass("active") ) {

                popupBlock.animate({
                    "opacity" : 0
                }, 400);

                setTimeout(function() {

                    popupBlock.removeClass("active");

                }, 700);
            }

        });

    });

    $(".top_btn").click(function(e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

});

function getCustomizeParams() {

    $(".shape_circle").each(function() {

        $(this).css({
            "width" : $(this).height() + "px",
            "margin-left" : -$(this).height() / 2 + "px"
        });

    });

}