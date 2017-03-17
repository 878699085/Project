/**
 * Created by a on 2017/3/16.
 */
$(function(){
    change();
    starAgent();
});

function change(){
    var $oLis=$(".right ul li");//可多选业务
    var $Li=$(".right ol li");//单选业务
    var $show=$(".p3 span a i");//单选业务
    var ary=$.merge($show,$oLis);
     //console.log(ary);
    $(ary).each(function(index,item){
        $(item).click(function(){
            if($(this).text()==="自助申请"){
                $(ary).removeClass("bg");
                $(this).addClass("bg");
                //console.log(1)
            }else if($(this).text()==="一键申请"){
                //console.log(2);
                $(ary).removeClass("bg");
                $(this).addClass("bg");
            }else{
                $(ary[0]).removeClass("bg");
                $(ary[1]).removeClass("bg");
                if($(this).hasClass("bg")){
                    $(this).removeClass("bg");
                }else{
                    $(this).addClass("bg");
                }
            }

        });
    });
    $Li.click(function(){
        $(this).addClass("Bg").siblings().removeClass("Bg");
    });

    $(".p4 input").click(function(){
        var arr=[],arr2=[];
        var num,num2;

        var srt="",str1='';
        $(".bg").each(function(){
            console.log($(this).find("span"));
            if($(this).find("span").length!=0){
                arr.push( $(this).find("span").text());
                num=eval(arr.join("+"));
            }else{
                num=0;
            }
         });

        arr2.push($(".Bg span").text());
        num2=eval(arr2.join("+"));
       $(".p2 b em").text(num+num2);
        $("#window8").show()
    });
}
//顶部右侧点击弹出框部分
function starAgent(){
    //$(".star_three").click(function(){
    //    $("#test_agent").show();
    //});
    //$(".PHONE").click(function(){
    //    $(".serverAgent").show();
    //});
    //$(".userAgent a").click(function(){
    //    $(".userAgent").hide();
    //});
    $(".closeC").click(function(){
        $(".window").hide();
        $(".userAgent").hide();
    })
}

