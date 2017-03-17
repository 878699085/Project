/**
 * Created by Administrator on 2017/3/13.
 */
// 引入jquery使用
// 从申请人导入
function leading(){
    $(".connector .p1 .right2").click(function(){
        $('.sel-T').show();
    })
    $(".sel-T span").click(function(e){
        e.stopPropagation();
        $(".sel-T").hide();
        $("#l-name1").val($(this).html());
    })
}
//添加新申请
function newApply(){
    $(".tr-mid .p1 .un-add").click(function(){
        $('.sel-T').show();
    })
    $(".sel-T span").click(function(e){
        e.stopPropagation();
        $(".sel-T").hide();
    })
}
//是否确认删除
function sureDel(){
    $(".sure-del .p1 img").click(function(){
        $(".lay-out").hide();
        $(".sure-del").hide();
    })
    $(".sure-del .p3 .no").click(function(){
        $(".sure-del .p1 img").click();
    })
    $(".delete0").click(function(){
        var $this = $(this);
        $(".lay-out").show();
        $(".sure-del").show();
        $(".sure-del .p3 .yes").click(function(){
            $this.parent().parent().remove();
            $(".sure-del .p1 img").click();
        })
    });
}
//是否确认删除1
function sureDel1(){
    $(".sure-del .p1 img").click(function(){
        $(".lay-out").hide();
        $(".sure-del").hide();
    })
    $(".sure-del .p3 .no").click(function(){
        $(".sure-del .p1 img").click();
    })
    $(".delete0").click(function(){
        var $this = $(this);
        $(".lay-out").show();
        $(".sure-del").show();
        $(".sure-del .p3 .yes").click(function(){
            $this.parent().parent().parent().remove();
            $(".sure-del .p1 img").click();
        })
    });
}
// 验证

var validate = {
    // 不能为空在下方
    notNull0 : function(a, b){

        $(a).blur(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "position" : "absolute", "top" : "29px", "left" : "46px"})
            $(a).parent().css("position", "relative");
            $tip.html(b + "不能为空");
            if($(a).val() == ""){
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            } else {
                $(a).parent().find("label").remove();
            }
        })
    },
    // 不能为空在右边

    notNull : function(a, b){
        $(a).blur(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "marginLeft" : "8px"})
            $tip.html(b + "不能为空");

            if($(a).val() == ""){
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            } else {
                $(a).parent().find("label").remove();
            }
        })
    },
    // 手机号验证右边
    phone : function(a){
        $(a).blur(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "marginLeft" : "8px"})
            $tip.html("请输入正确手机号！");

            var valp = $(a).val();
            var tel = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(tel.test(valp)){
                $(a).parent().find("label").remove();
            } else {
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            }
        })
    },
    // 手机号验证下边
    phone1 : function(a){
        $(a).blur(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "position" : "absolute", "top" : "29px", "left" : "18px"});
            $(a).parent().css("position", "relative");
            $tip.html("请输入正确手机号！");

            var valp = $(a).val();
            var tel = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(tel.test(valp)){
                $(a).parent().find("label").remove();
            } else {
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            }
        })
    },
    // 姓名验证
    nameLength : function(a){
        $(a).keyup(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "position" : "absolute", "top" : "29px", "left" : "18px"});
            $(a).parent().css("position", "relative");
            $tip.html("姓名最多40个汉字！");

            if($(a).val().length <= 40){
                $(a).parent().find("label").remove();
            } else {
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            }
        })
    },
    // 电子邮件正则表达式下方提示
    email1 : function(a){
        $(a).blur(function(){

            var $tip = $("<libel></libel>");
            $tip.css({"color" : "#ff3300", "position" : "absolute", "top" : "29px", "left" : "18px"});
            $(a).parent().css("position", "relative");
            $tip.html("请输入正确邮箱！");

            var valp = $(a).val();
            var tel = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
            if(tel.test(valp)){
                $(a).parent().find("label").remove();
            } else {
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }

            }
        })
    },
    // 邮政编码验证
    post1 : function(a){
        $(a).blur(function(){

            var $tip = $("<label></label>");
            $tip.css({"color" : "#ff3300", "position" : "absolute", "top" : "29px", "left" : "18px"});
            $(a).parent().css("position", "relative");
            $tip.html("请输入正确邮编！");

            var valp = $(a).val();
            var tel = /^[1-9][0-9]{5}$/;
            if(tel.test(valp)){
                $(a).parent().find("label").remove();
            } else {
                if($(a).parent().find("label").length == 0){
                    $(a).parent().append($tip);
                }
            }
        })
    }
}
