/**
 * Created by Administrator on 2017/3/16.
 */
$(function(){

    category();
    //选择所在领域下拉框
    $(".lingyu .ly1 .sele").click(function(){
        $(".lingyu .ly1 ul").toggle();
    })
    $(".lingyu .ly1 li").click(function(){
        $(".lingyu .ly1 ul").hide();
    })
    //点击删除按钮 删除本条记录
    $(".sleibie .s .s33").click(function(){
        $(this).parent().remove();
        var $idx = $(this).parent().attr("index");
        $(".leibiao li").eq($idx).removeClass("disabled");
        $(".leibiao li").eq($idx).find("i").removeClass("disable");
    })
    //       点自动选择核心保护类别隐藏
    var count = 0;
    $(".lbr").click(function(){
        $(this).addClass("current1");
        $(".lbl").removeClass("current1");
        $(".leibiao").show();
        $(".jxj img").prop("src", "../../imgs/T/T-wless.png");
        if(count < 1){
            $(".sleibie .s .s33").trigger("click");
        } else {

        }
        count++;
    })
    var arr=[];
    $(".sleibie .s").each(function(){
        var $idx = $(this).attr("index");
        arr.push($idx);
    })

    $(".lbl").click(function(){
        $(".lingyu .ly1 .sele").click();
        $(this).addClass("current1");
        $(".lbr").removeClass("current1");
        for(var i=0;i<arr.length;i++){
            if( !$(".leibiao li").eq(arr[i]).hasClass("disabled")){
                $(".leibiao li").eq(arr[i]).click();
            }

        }
    })
    $(".leibiao li").click(function(){
        if($(this).hasClass("disabled")){
            $(this).removeClass("disabled");
            $(this).find("i").removeClass("disable");
            $(this).addClass("added");
            $(this).find("i").addClass("add");
            $(".sleibie .re" + $(this).index()).remove();
        } else {
            $(this).addClass("disabled");
            $(this).find("i").addClass("disable");
            $(this).removeClass("added");
            $(this).find("i").removeClass("add");
        }
    })

    $(".leibiao li").hover(function(){
        if(!$(this).hasClass("disabled")){
            $(this).addClass("added");
            $(this).find("i").addClass("add");
        }
    }, function(){
        $(this).removeClass("added");
        $(this).find("i").removeClass("add");
    })

    $(".jxj").click(function(){
        $(".leibiao").slideToggle();
        if($(".leibiao").height() == 1){
            $(".jxj img").prop("src", "../../imgs/T/T-wless.png");
        } else {
            $(".jxj img").prop("src", "../../imgs/T/T-wl.png");
        }
    })

    validate.notNull(".mingCheng", "商标名称")
    /*$(".yuan").click(function(){
     $(this).html("•").siblings().html("");
     })*/
})
//自动添加类别
var $cln0 = $(".sleibie .s:eq(0)");

function category(){
    $(".leibiao li").each(function(){
        var $idx = $(this).index();
        $(this).click(function(){
            if($(this).hasClass("disabled")){

            } else {
                var $cln = $cln0.clone(true);
                $cln.find(".s11").html("自助选择类别");
                $cln.removeClass("re" + $cln.attr("index"));
                $cln.removeAttr("index");
                $cln.find(".s22").html($(this).text());
                $cln.attr("index", $idx);
                $cln.addClass("re" + $idx);
                $(".sleibie").append($cln);
                $(".sleibie .s .s33").click(function(){
                    $(this).parent().remove();
                    var $idx = $(this).parent().attr("index");
                    $(".leibiao li").eq($idx).removeClass("disabled");
                    $(".leibiao li").eq($idx).find("i").removeClass("disable");
                })
            }
        })
    })
}