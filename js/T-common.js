/**
 * Created by Administrator on 2017/3/13.
 */
// 引入jquery使用


var validate={
    // 不能为空在下方
    notNull0:function(a,b){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","position":"absolute","top":"29px","left":"46px"})
            $(a).parent().css("position","relative");
            $tip.html(b+"不能为空");
            $tip.addClass("tip");
            if($(a).val()==""){
                $(a).parent().append($tip);
            }else{

            }
        })
    },
    // 不能为空在右边
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
},
    // 手机号验证右边
    phone:function(a){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","marginLeft":"8px"})
            $tip.html("请输入正确手机号！");
            $tip.addClass("tip");
            var valp=$(a).val();
            var tel=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(tel.test(valp)){
                 
            }else{
                $(a).parent().append($tip);
            }
        })
    },
    // 手机号验证下边
    phone1:function(a){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","position":"absolute","top":"29px","left":"18px"});
            $(a).parent().css("position","relative");
            $tip.html("请输入正确手机号！");
            $tip.addClass("tip");
            var valp=$(a).val();
            var tel=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(tel.test(valp)){

            }else{
                $(a).parent().append($tip);
            }
        })
    },
    // 姓名验证
    nameLength:function(a){
        $(a).keyup(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","position":"absolute","top":"29px","left":"18px"});
            $(a).parent().css("position","relative");
            $tip.html("姓名最多40个汉字！");
            $tip.addClass("tip");
            if($(a).val().length<=40){

            }else{
                $(a).parent().append($tip);
            }
        })
    },
    // 电子邮件正则表达式下方提示
    email1:function(a){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","position":"absolute","top":"29px","left":"18px"});
            $(a).parent().css("position","relative");
            $tip.html("请输入正确邮箱！");
            $tip.addClass("tip");
            var valp=$(a).val();
            var tel=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
            if(tel.test(valp)){

            }else{
                $(a).parent().append($tip);
            }
        })
    },
    // 邮政编码验证
    post1:function(a){
        $(a).blur(function(){
            $(".tip").remove();
            var $tip=$("<span></span>");
            $tip.css({"color":"red","position":"absolute","top":"29px","left":"18px"});
            $(a).parent().css("position","relative");
            $tip.html("请输入正确邮编！");
            $tip.addClass("tip");
            var valp=$(a).val();
            var tel=/^[1-9][0-9]{5}$/;
            if(tel.test(valp)){

            }else{
                $(a).parent().append($tip);
            }
        })
    }
}
