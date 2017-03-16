/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
    patent.init();
    //unWrite();
    validate.nameLength("#l-name1");
    sureDel();
    leading();
})

var patent = {
    init :function(){
        this._jeDate("formerdate");
        this._jeDate("dateinfo");
        this._array();
        this._validate();
        this._layout();
        this._empty();
        this._phone();
        /*新增发明人*/
        /*国籍或者地区*/
        commom.searchSuggest($(".countrys div"),$(".citizenship"),"../js/test.json");
        /*证件类型*/
        commom.searchSuggest($(".certificates div"),$(".certificate"),"../js/test.json");
        /* 新增申请人 */
        /* 从发明人导入*/
        commom.searchSuggest($(".Importinventors div"),$(".Importinventor"),"../js/test.json");
        /*申请人类型*/
        commom.searchSuggest($(".add-types div"),$(".add-type"),"../js/test.json");
        /*证件类型*/
        commom.searchSuggest($(".card-types div"),$(".card-type"),"../js/test.json");
        /*国籍或者注册国家（地区）*/
        commom.searchSuggest($(".reg-nations div"),$(".reg-nation"),"../js/test.json");
        /*经常居住地或营业所所在地*/
        commom.searchSuggest($(".placeOne div"),$(".placeOne input"),"../js/test.json");
        commom.searchSuggest($(".placeTwo div"),$(".placeTwo input"),"../js/test.json");
        commom.searchSuggest($(".placeThree div"),$(".placeThree input"),"../js/test.json");

    },
    /*  日期控件
     *  param
     *  DateID  控件绑定id
     */
    _jeDate : function(DateID){
        $("#"+DateID).jeDate({
            isinitVal:true,
            festival:false, //是否显示农历
            ishmsVal:false,
            minDate: '1970-07-31 23:59:59',
            maxDate: $.nowDate(0),
            format:"YYYY-MM-DD hh:mm",
            zIndex:3000,
        })
    },
    _array : function(){
        $(".input").click(function(){
            $(this).find("img").toggleClass("hide");
        })
        $(".more .p1").click(function(){
            $(".Tog").toggleClass("hide");
            if($(".Tog").hasClass("hide")){
                $(".more .p1 img").prop("src","../imgs/T/T-more.png")
            }else{
                $(".more .p1 img").prop("src","../imgs/T/T-less.png")
            }
        })
    },
    _validate : function(){
        /*             新增发明人                      */
        /*国籍*/
        $(".countrys").click(function(){
            //判断是否选择第一发明人
            if($(".FirstInventor").hasClass("hover")){
                //判断国籍是否为空
                judge.judge_one($(".countrys"),$(".citizenship"));
            }else{
                $(".countrys").find("label").remove();
            }
        });
        /*证件类型*/
        $(".certificates").click(function(){
            //判断是否选择第一发明人
            if($(".FirstInventor").hasClass("hover")){
                //判断国籍为中国
                if($(".citizenship").val()=="中国" ){
                    //判断证件类型是否为空
                    judge.judge_one($(".certificates"),$(".certificate"));
                }else{
                    $(".certificates").find("label").remove();
                }
            }else{
                $(".certificates").find("label").remove();
            }


            if($(".certificate").val()=="身份证"){
                $(".card-fan").show();
            }else{
                $(".card-fan").hide();
            }
        });
        /*证件号码*/
        $(".credNo").blur(function(){
            //判断国籍为中国 并且选中第一发明人
            if($(".citizenship").val()=="中国"&&$(".FirstInventor").hasClass("hover")){
                judge.judge_one($(".credNos"),$(".credNo"));
                //判断证件号码是否为空
            }else if($(".certificate").val()!="请选择" && !$.isEmpty($(".certificate").val())){
                judge.judge_one($(".credNos"),$(".credNo"));
            }else{
                $(".credNos").find("label").remove();
            }
        });

        $(".Inventor-submit").click(function(e){
          //  e.preventDefault();
            $(".empty").blur();
            $(".countrys").click();
            $(".certificates").click();
            $(".credNo").blur();
            patent.Inventor.add(1,1,1,1,1)
            /*if($(".addInventor label").length!=0){
                //阻止默认事件
                e.preventDefault();
            }*/
        });

        /*             新增申请人                      */
        $(".proposer-submit").click(function(e){
            $(".empty").blur();
            $(".add-types").click();
            $(".card-types").click();
            $(".reg-nations").click();
            $(".placeOne").click();
            $(".placeTwo").click();
            $(".placeThree").click();
            if($(".addproposer label").length!=0){
                //阻止默认事件
                e.preventDefault();
            }
        });
        /*申请人类型*/
        $(".add-types").click(function(){
            judge.judge_one($(".add-types"),$(".add-type"));
        });
        /*证件类型*/
        $(".card-types").click(function(){
            judge.judge_one($(".card-types"),$(".card-type"));
        });
        /*国籍或者注册国家（地区）*/
        $(".reg-nations").click(function(){
            judge.judge_one($(".reg-nations"),$(".reg-nation"));
        });
        /*经常居住地或营业所所在地*/
        $(".placeOne").click(function(){
            judge.judge_one($(".placeOne"),$(".placeOne input"));
            if($(".placeOne input").val()=="中国") {
                $(".placeTwo,.placeThree").show();
            }else{
                $(".placeTwo,.placeThree").hide();
            }

            if($(".placeOne input").val()!="中国"  && $(".placeOne input").val()!="请选择") {
                $(".addressEn").show();
            }else{
                $(".addressEn").hide();
                $(".placeTwo label,.placeThree label").remove();
            }
        });
        $(".placeTwo").click(function(){
            judge.judge_one($(".placeTwo"),$(".placeTwo input"));
        });
        $(".placeThree").click(function(){
            judge.judge_one($(".placeThree"),$(".placeThree input"));
        });

        var judge={
            /*
             * param obj  input的父级元素
             *		objChild  input
             */
            judge_one : function(obj,objChild){
                if($.isEmpty(objChild.val()) || objChild.val()=="请选择"){
                    if(obj.find("label").length==0){
                        obj.is(":visible")?obj.append("<label>不能为空</label>"):obj.find("label").remove();
                    }
                }else{
                    obj.find("label").remove();
                }
            },
            /*
             * param obj  input的父级元素
             *		objChild  input
             */
            judge_two : function(){
                if($.isEmpty(objChild.val()) ){
                    if(obj.find("label").length==0){
                        obj.is(":visible")?obj.append("<label>不能为空</label>"):obj.find("label").remove();
                    }
                }else{
                    obj.find("label").remove();
                }
            }
        };
    },
    /*
     * 验证必填项
     */
    _empty : function(){
        $(".empty").blur(function(){
            if($.isEmpty($(this).val())){
                if($(this).parent().find("label").length==0){
                    if($(this).parent().is(":visible")){
                        $(this).parent().append("<label>不能为空</label>");
                    }else{
                        $(this).parent().find("label").remove();
                    }
                }
            }else{
                $(this).parent().find("label").remove();
            }
        })
    },
    _layout : function(){
        /*发明人*/
        $(".inventor-btn").click(function(){
            $(".lay-out,.addInventor").show();
        });
        $(".addInventor h3 b,.addInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.addInventor").hide();
            $(".addInventor input").not(".submit input").val("");
        });
        $(".addInventor ul li b").click(function(){
            $(this).toggleClass("hover");
        });
        /*  修改发明人 */
        $(".revampInventor-btn").click(function(){
            $(".lay-out,.revampInventor").show();
        });
        $(".revampInventor h3 b,.revampInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.revampInventor").hide();
            $(".revampInventor input").not(".submit input").val("");
        });
        $(".revampInventor ul li b").click(function(){
            $(this).toggleClass("hover");
        });
        /*  查看发明人 */
        $(".lookInventor-btn").click(function(){
            $(".lay-out,.lookInventor").show();
        });
        $(".lookInventor h3 b,.lookInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.lookInventor").hide();
            $(".lookInventor input").not(".submit input").val("");
        });
        $(".lookInventor ul li b").click(function(){
            $(this).toggleClass("hover");
        });
        /*姓名转换为大写*/
        $(".inventNameCn").blur(function(){
            var str=pinyin.getFullChars(this.value).toLocaleUpperCase();
            $(".inventNameEn").val(str);
        });
        $(".proposer-name").blur(function(){
            var str=pinyin.getFullChars(this.value).toLocaleUpperCase();
            $(".proposer-nameEn").val(str);
        });
        /*申请人*/
        $(".proposer-btn").click(function(){
            $(".lay-out,.addproposer").show();
        });
        $(".addproposer h3 b,.addproposer .submit input:nth-child(2)").click(function(){
            $(".lay-out,.addproposer").hide();
            $(".addproposer input").not(".submit input").val("");
        });
        $(".toggle").click(function(){
            $(this).toggleClass("hover");
        });
        $(".toggle-if").click(function(){
            $(this).toggleClass("hover");
            if($(this).hasClass("hover")){
                $(".toggle-show").show();
                $(".slow-down input:nth-child(1)").prop("checked","checked");
            }else{
                $(".slow-down input:nth-child(1)").prop("checked","");
                $(".toggle-show").hide();
                $(".toggle-show label").remove();
            };
        });
        /*修改申请人*/
        $(".revampproposer-btn").click(function(){
            $(".lay-out,.revampproposer").show();
        });
        $(".revampproposer h3 b,.revampproposer .submit input:nth-child(2)").click(function(){
            $(".lay-out,.revampproposer").hide();
            $(".revampproposer input").not(".submit input").val("");
        });
        /*查看申请人*/
        $(".lookproposer-btn").click(function(){
            $(".lay-out,.lookproposer").show();
        });
        $(".lookproposer h3 b,.lookproposer .submit input:nth-child(2)").click(function(){
            $(".lay-out,.lookproposer").hide();
            $(".lookproposer input").not(".submit input").val("");
        });
        /*正式提交*/
        $(".official-submit").click(function(){
            $(".lay-out,.detection").show();
        });
        $(".detection h3 b,.detection .submit input:nth-child(2)").click(function(){
            $(".lay-out,.detection").hide();
        });
        $(".detection .submit input:nth-child(1)").click(function(){
            alert("提交成功");
            $(".lay-out,.detection").hide();
        });


        $("#yyyy").click(function(){
            $("body").append( $(".addInventor").clone(true));
        })
    },
    Inventor : {
        /*
         * @param
         *   listNo 序号
         *   inventNameCn 姓名
         *   citizenship 国籍
         *   credNo 身份证
         *   publish 是否
         *
         */
        add : function(listNo,inventNameCn,citizenship,credNo,publish){
            var listStr = '<tr><td>'+ listNo+'</td><td>'+inventNameCn+'</td><td>'+citizenship+'</td><td>'+credNo+'</td> <td>'+publish+'</td>'+
                '<td><a class="delete0" href="javascript:void(0);">删除</a>'+
                '<a href="javascript:void(0);" class="revampInventor-btn">修改</a>' +
                '<a href="javascript:void(0);" class="lookInventor-btn">查看</a></td></tr>';
            $(".inventor-list").append(listStr);
            patent._sureDel();
            patent._layout();
        },
        reset : function(){
            var listStr = '<tr><td>'+listNo+'</td><td>'+inventNameCn+'</td><td>'+citizenship+'</td><td>'+credNo+'</td> <td>'+publish+'</td>'+
                '<td><a class="delete0" href="javascript:void(0);">删除</a>'+
                '<a href="javascript:void(0);" class="revampInventor-btn">修改</a>' +
                '<a href="javascript:void(0);" class="lookInventor-btn">查看</a></td></tr>';
        }
    },
    //是否确认删除
    _sureDel:function(){
        $(".sure-del .p1 img").click(function(){
            $(".lay-out").hide();
            $(".sure-del").hide();
        })
        $(".sure-del .p3 .no").click(function(){
            $(".sure-del .p1 img").click();
        })
        $(".delete0").click(function(){
            var $this=$(this);
            $(".lay-out").show();
            $(".sure-del").show();
            $(".sure-del .p3 .yes").click(function(){
                $this.parent().parent().remove();
                $(".sure-del .p1 img").click();
            })
        });
    },
    // 电话如果不为空验证
    _phone:function(){
        validate.phone1(".l-phone input");
        validate.email1(".l-email input");
        validate.post1(".l-post input");
        $(".l-phone input").blur(function(){
            if($(".l-phone input").val()==""){
                $(".tip").remove();
            }
        })
        $(".l-email input").blur(function(){
            if($(".l-email input").val()==""){
                $(".tip").remove();
            }
        })
        $(".l-post input").blur(function(){
            if($(".l-post input").val()==""){
                $(".tip").remove();
            }
        })
    }
}
function unWrite(){
    $("#pat35").hover(function(){
        $(".pat_law35").show();
    },function(){
        $(".pat_law35").hide();
    });
    $("#pat51").hover(function(){
        $(".pat_law51").show();
    },function(){
        $(".pat_law51").hide();
    });
    validate.notNull("#pat1","专利名称");
    $("#pat1").focus(function(){
        $(".pat_req").show();
    })
    $("input").not("#pat1").attr("readonly","true");
    $("#pat1").blur(function(){
        $(".pat_req").hide();

        if($("#pat1").val()==""){
            $("input").not("#pat1").attr("readonly","true");
        }else{
            $("input").not("#pat1").removeAttr("readonly");
        }
    })
}
