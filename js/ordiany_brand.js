/**
 * Created by a on 2017/3/18.
 */

$(function(){
    showCss();
});

function showCss(){
    $(".p3 span i").click(function(){
        $(this).addClass("bg").siblings().removeClass("bg");
    })
}