/**
 * Created by Administrator on 2017/3/13.
 */
// 引入jquery使用


var validate={
    // 不能为空
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
    // 手机号验证
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
    // 姓名验证
    nameLength:function(a){
        
    }
}