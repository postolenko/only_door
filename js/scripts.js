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

});

function getCustomizeParams() {

    $(".shape_circle").each(function() {

        $(this).css({
            "width" : $(this).height() + "px",
            "margin-left" : -$(this).height() / 2 + "px"
        });

    });

}