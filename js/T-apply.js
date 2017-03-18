/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
    patent.init();
    //unWrite();
    validate.nameLength("#l-name1");
    sureDel();
    leading();
});

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
            zIndex:3000
        })
    },
    _array : function(){
        $(".input").click(function(){
            $(this).find("img").toggleClass("hide");
        })
        $(".more .p11").click(function(){
            $(".Tog").toggleClass("hide");
            if($(".Tog").hasClass("hide")){
                $(".more .p11 img").prop("src","../imgs/T/T-more.png")
            }else{
                $(".more .p11 img").prop("src","../imgs/T/T-less.png")
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

            var List=$(".inventor-list tr").length+1;
            var NameVal=$(".inventNameCn").val();
            var publishName;
            var FirstInventor;
            var NameEnVal=$(".inventNameEn").val();
            var certificate=$(".certificate").val();
            var CounVal=$(".citizenship").val();
            var credNo=$(".credNo ").val();
            var Imgsrc1=$(".upload-wrap").eq(0).find("img").attr("src");
            var Imgsrc2=$(".upload-wrap").eq(1).find("img").attr("src");
            if($(".publishName").hasClass("hover")){
                publishName="否";
            }else{
                publishName="是";
            };
            if(!$(".FirstInventor").hasClass("hover")){
                FirstInventor="0";
            }else{
                FirstInventor="1";
            };

            /*判断是否通过验证*/
            if($(".addInventor label").length!=0){
                //阻止默认事件
                e.preventDefault();
            }else{
                patent.Inventor.add(List,NameVal,publishName,FirstInventor,NameEnVal,certificate,CounVal,credNo,Imgsrc1,Imgsrc2,66);
                $(".lay-out,.addInventor").hide();
               patent.clearCont($(".Inventor-public input"),$(".Inventor-public b"));
            }
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
            
            var List=$(".proposer-list tr").length+1;
            var NameVal=$(".proposer-name").val();
            var FirstProposer;
            var regnation=$(".reg-nation").val();
            var credNo=$(".card-no").val();
            if(!$(".FirstProposer").hasClass("hover")){
                FirstProposer="0";
            }else{
                FirstProposer="1";
            };
            
            /*判断是否通过验证*/
            if($(".addproposer label").length!=0){
                //阻止默认事件
                e.preventDefault();
            }else{
            	$(".lay-out,.addproposer").hide();
            	patent.proposer.add(List,NameVal,FirstProposer,regnation,credNo,66);
                patent.clearCont($(".proposer-public input"),$(".proposer-public b"));
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
    /* 清空弹窗内容
     *@param input
     *       b
     */
    clearCont : function(input,b){
        input.not(".submit input").val("");
        b.removeClass("hover");
        $(".Inventor-public label").remove();
    },
    _layout : function(){
        /*发明人*/
        $(".inventor-btn").click(function(){
            $(".lay-out,.addInventor").show();
        });
        $(".addInventor h3 b,.addInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.addInventor").hide();
            patent.clearCont($(".Inventor-public input"),$(".Inventor-public b"));
        });
        /*  修改发明人 */
        $(".revampInventor h3 b,.revampInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.revampInventor").hide();
            patent.clearCont($(".Inventor-public input"),$(".Inventor-public b"));
        });
        /*  查看发明人 */
        $(".lookInventor h3 b,.lookInventor .submit input:nth-child(2)").click(function(){
            $(".lay-out,.lookInventor").hide();
            patent.clearCont($(".Inventor-public input"),$(".Inventor-public b"));
        });
        /*姓名转换为大写（只有在内容改变时转换）*/
       $(".inventNameCn").on("propertychange input",function(){
       		var str=pinyin.getFullChars(this.value).toLocaleUpperCase();
   			$(".inventNameEn").val(str);
       });
        $(".proposer-name").on("propertychange input",function(){
       		var str=pinyin.getFullChars(this.value).toLocaleUpperCase();
   			$(".proposer-nameEn").val(str);
       });
        /*申请人*/
        $(".proposer-btn").click(function(){
            $(".lay-out,.addproposer").show();
        });
        $(".addproposer h3 b,.addproposer .submit input:nth-child(2)").click(function(){
            $(".lay-out,.addproposer").hide();
            patent.clearCont($(".proposer-public input"),$(".proposer-public b"));
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
            patent.clearCont($(".proposer-public input"),$(".proposer-public b"));
        });
        /*查看申请人*/
        $(".lookproposer-btn").click(function(){
            $(".lay-out,.lookproposer").show();
        });
        $(".lookproposer h3 b,.lookproposer .submit input:nth-child(2)").click(function(){
            $(".lay-out,.lookproposer").hide();
            patent.clearCont($(".proposer-public input"),$(".proposer-public b"));
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
    },
    resetInventor : function($this){
        var $this = $($this);
        if($($this).text()=="修改"){
            $(".lay-out,.revampInventor").show();
        }else{
            $(".lay-out,.lookInventor").show();
        }
        var valFind=$this.parents("tr").find("td");
        var valFind1=$this.parents("tr").find("input");
        var inventNameCn=valFind.eq(1).text();
        var publish=valFind.eq(4).text();
        var First=valFind1.eq(2).val();
        var inventNameEn=valFind1.eq(0).val();
        var citizenship=valFind.eq(2).text();
        var credType=valFind1.eq(1).val();
        var credNo=valFind.eq(3).text();
        var Imgsrc1=valFind1.eq(3).val();
        var Imgsrc2=valFind1.eq(4).val();
        patent.Inventor.reset(inventNameCn,publish,First,inventNameEn,citizenship,credType,credNo,Imgsrc1,Imgsrc2,66);
    },
    Inventor : {
        /* 添加发明人 添加
         * @param
         *   listNo 序号
         *   inventNameCn 姓名
         *   publish 是否
         *   First 标记为第一发明人
         *   inventNameEn 姓名（英文）
         *   citizenship 国籍
         *   credType  证件类型
         *   credNo 证件号码
         *   Imgsrc1 证件图片路径
         *   Imgsrc2 证件图片路径
         *   inventId  当前信息Id
         */
        add : function(listNo,inventNameCn,publish,First,inventNameEn,citizenship,credType,credNo,Imgsrc1,Imgsrc2,inventId){
            var listStr = '<tr><td>'+ listNo+'</td><td>'+inventNameCn+'</td><td>'+citizenship+'</td><td>'+credNo+'</td> <td>'+publish+'</td>'+
                    '<input type="hidden" value='+inventNameEn+' /><input type="hidden" value='+credType+' /> <input type="hidden" value='+First+' />'+
                    '<input type="hidden" value='+Imgsrc1+' /> <input type="hidden" value='+Imgsrc2+' /> '+
                    '<td><a class="delete0" href="javascript:void('+inventId+');" >删除</a>'+
                    '<a href="javascript:void('+inventId+');" class="revampInventor-btn" onClick="patent.resetInventor(this)">修改</a>' +
                    '<a href="javascript:void('+inventId+');" class="lookInventor-btn" onClick="patent.resetInventor(this)">查看</a></td></tr>';
            $(".inventor-list").append(listStr);
            patent._sureDel();
        },
        reset : function(inventNameCn,publish,First,inventNameEn,citizenship,credType,credNo,Imgsrc1,Imgsrc2,inventId){
            $(".Inventor-public .inventNameCn").val(inventNameCn);
            $(".Inventor-public .inventNameEn").val(inventNameEn);
            $(".Inventor-public .citizenship").val(citizenship);
            $(".Inventor-public .certificate").val(credType);
            $(".Inventor-public .credNo").val(credNo);
            $(".upload-wrap").eq(0).find("img").attr("src",Imgsrc1);
            $(".upload-wrap").eq(1).find("img").attr("src",Imgsrc2);
            if(publish=="否"){
                $(".Inventor-public .publishName").addClass("hover");
            }
            if(First=="1"){
                $(".Inventor-public .FirstInventor").addClass("hover");
            }
        }
    },
    proposer : {
        /* 添加申请人 添加
         * @param
         *   listNo 序号
         *   proposerNameCn 姓名
         *   First 第一申请人
         *   citizenship 国籍
         *   credNo 证件号码
         *  inventId  当前信息Id
         */
        add : function(listNo,proposerNameCn,First,citizenship,credNo,inventId){
            var listStr = '<tr><td>'+ listNo+'</td><td>'+proposerNameCn+'</td><td>'+citizenship+'</td><td>'+credNo+'</td> <td>是</td>'+
                    '<input type="hidden" value='+First+' /> '+
                    '<td><a class="delete0" href="javascript:void('+inventId+');" >删除</a>'+
                    '<a href="javascript:void('+inventId+');" class="revampInventor-btn" onClick="patent.resetInventor(this)">修改</a>' +
                    '<a href="javascript:void('+inventId+');" class="lookInventor-btn" onClick="patent.resetInventor(this)">查看</a></td></tr>';
            $(".proposer-list").append(listStr);
            patent._sureDel();
        },
        reset : function(listNo,proposerNameCn,First,citizenship,credNo,inventId){
            $(".Inventor-public .inventNameCn").val(proposerNameCn);
            $(".Inventor-public .inventNameEn").val(inventNameEn);
            $(".Inventor-public .citizenship").val(citizenship);
            $(".Inventor-public .certificate").val(credType);
            $(".Inventor-public .credNo").val(credNo);
            $(".upload-wrap").eq(0).find("img").attr("src",Imgsrc1);
            $(".upload-wrap").eq(1).find("img").attr("src",Imgsrc2);
            if(publish=="否"){
                $(".Inventor-public .publishName").addClass("hover");
            }
            if(First=="1"){
                $(".Inventor-public .FirstInventor").addClass("hover");
            }
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
                $(".l-phone label").remove();
            }
        })
        $(".l-email input").blur(function(){
            if($(".l-email input").val()==""){
                $(".l-email label").remove();
            }
        })
        $(".l-post input").blur(function(){
            if($(".l-post input").val()==""){
                $(".l-post label").remove();
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
