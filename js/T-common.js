/**
 * Created by Administrator on 2017/3/13.
 */
// 引入jquery使用
// 不能为空

var validate={

    notNull:function(a,b){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","marginLeft":"8px"})
            $tip.html(b+"不能为空");
            $tip.addClass("tip");
            if($(a).val()==""){
                $(a).parent().append($tip);
            }else{

            }
        })
}}