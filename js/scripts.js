var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var thumb;
var thumbsHeightArr = [];
var thumbHeight;
var maxThumbHeight;

var popupName;
var hide_element;
var popupBlock;

var itemNum;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    getCustomizeParams();

    getTHumbsHeight();

    $(".num-mark").each(function() {

        itemNum = 0;

        $(this).find("li").each(function() {

            itemNum++;

            $(this).prepend("<span class='item-num'>" + itemNum + ".</span>");

        });

    });

});

$(document).ready(function() {
   
    $(window).resize(function() {

        getCustomizeParams();

        // ------------------
        $(".set_height .thumb .inner").css({"height" : "auto"});

        getTHumbsHeight();

        // ------------------

        $(".popup-wrapp").each(function(){

            if( $(this).hasClass("active") ) {

                $(this).find(".popup").css({
                    "margin-top" : ( $(window).height() - popupBlock.find(".popup").outerHeight(true) ) / 2 + "px"
                });

            }

        });

        

    });

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

function getTHumbsHeight() {

    $(".set_height").each(function() {

        thumbsHeightArr = [];

        thumb = $(this).find(".thumb");

        thumb.each(function() {

            thumbHeight = $(this).find(".inner").height();

            thumbsHeightArr.push(thumbHeight);

        });

        maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

        thumb.find(".inner").height(maxThumbHeight);

        console.log(maxThumbHeight);

    });

}