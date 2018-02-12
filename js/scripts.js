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

    getSelectWidth();

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

        getSelectWidth();

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

    $(function() {

        $(".top_btn").click(function(e) {

            e.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 700);

        });

    });

    $(function() {

        $(".count-box button").click(function(e) {

            e.preventDefault();

            parentBlock= $(this).closest(".count-box");

            var countInput = parentBlock.find(".count-num input");

            var countVal = countInput.val();

            if(countVal == "") {

                countVal = 1;

            }

            if( $(this).hasClass("minus-btn") && countVal > 1 ) {

                countVal--;

            } else if( $(this).hasClass("plus-btn")) {

                countVal++;

            }

            countInput.val(countVal);

        });

    });

    $(function() {

        $(".sidebar-box").each(function() {

            $(this).find(".slide-box").each(function() {

                parentBlock = $(this).closest(".sidebar-box");

                if( $(this).is(":visible") ) {

                    parentBlock.addClass("visible");

                } else {

                    parentBlock.removeClass("visible");

                }

            });

        });

        $(".sidebar-box").each(function() {

            $(this).find(".slide-box").each(function() {

                parentBlock = $(this).closest(".sidebar-box");

                if( parentBlock.hasClass("visible") ) {

                    parentBlock.slideDown(300);

                } else {

                    parentBlock.slideUp(300);

                }

            });

        });


        $(".sidebar-box .slide-btn").click(function(e) {

            parentBlock = $(this).closest(".sidebar-box");

            var slideBox = parentBlock.find(".slide-box");

            if( slideBox.is(":hidden") ) {

                slideBox.slideDown(300);
                parentBlock.addClass("visible");

            } else {

                slideBox.slideUp(300);
                parentBlock.removeClass("visible");

            }

        });

        var nav2BtnTempl = "<button type='button' class='nav-2-btn'></button>";

        $(".nav-2").each(function() {

            $(this).find("li").each(function() {

                if( $(this).find("ol").length > 0 ) {

                    $(this).prepend(nav2BtnTempl);

                }

            });

        });

        $(".nav-2 .nav-2-btn").click(function(e) {

            e.preventDefault();

            parentBlock = $(this).closest("li");

            var innerNav = parentBlock.children("ol");

            if( innerNav.is(":hidden") ) {

                innerNav.slideDown(300);
                parentBlock.addClass("active");

            } else {

                innerNav.slideUp(300);
                parentBlock.removeClass("active");

            }

        });

    });

    $(function() {

        $(".close-tag").click(function(e) {

            e.preventDefault();

            parentBlock = $(this).closest(".tag");

            parentBlock.fadeOut(300);

        });

    });

    $(function() {

        $(".articles-thumbnails").each(function() {

            var thumb = $(this).find(".article-thumb");

            thumb.each(function() {

                var indexThumb = $(this).index(".article-thumb");

                if( indexThumb%5 == 0 ) {

                    $(this).addClass("five");

                }

            });

        });

    });

    $(function() {



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

    });

}

function getSelectWidth() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : "auto"
        });

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

}

// getSumPrice();

// function getSumPrice() {

//     var priceTotal;
//     // var basketTable;
//     var sumPriceNum = 0;

//     $(".basket-table").find(".price-total").each( function(){

//         // basketTable = $(this).closest(".basket-table");

//         priceTotal = parseInt( $(this).find(".price-total-num").text() );

//         sumPriceNum += priceTotal;

//         console.log(sumPriceNum);
        
//     });

//     $(".sum-price-num").html(sumPriceNum);

    

// }