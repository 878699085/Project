/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
    patent.init();
	unWrite();
	validate.nameLength("#l-name1");
})

var patent = {
	init :function(){
		this._array();
		this._validate();
		this._layout();
		this._empty();
		this._phone();
		this._sureDel();
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
		$(".countrys").click(function(){
			var shipStr=$(".citizenship").val();
			if($(".FirstInventor").hasClass("hover")){
				if(shipStr=="请选择" || $.isEmpty(shipStr) ){
					if($(".countrys").find("label").length==0){
						$(".countrys").append("<label>不能为空</label>");
					}
				}else{
					$(".countrys").find("label").remove();
				}
			}
		});
		
		$(".credNo").focus(function(){
			if($(".citizenship").val()=="中国"&&$(".FirstInventor").hasClass("hover")){
				if($.isEmpty($(".credNo").val()) && $(".credNos").find("label").length==0){
					$(".credNos").append("<label>不能为空</label>");
				}
			}
		});
		$(".credNo").blur(function(){
			if(!$.isEmpty($(".credNo").val())){
				$(".credNos").find("label").remove();
			}
		})
		
		
		$(".submit input:nth-child(1)").click(function(event){
			if($.isEmpty($(".inventNameCn").val())&&$(".inventNameCn").parents("li").find("label").length==0){
				$(".inventNameCn").parents("li").append("<label>不能为空</label>");
				event.preventDefault();
				NameCn=0;
			}else{
				$(".inventNameCn").parents("li").find("label").remove();
				NameCn=1;
				$(this).submit();
			}
			
			var ship,credNo,NameCn,NameEn;
			var shipStr=$(".citizenship").val();
			if($(".FirstInventor").hasClass("hover")){
				if(shipStr=="请选择" || $.isEmpty(shipStr) ){
					if($(".countrys").find("label").length==0){
						$(".countrys").append("<label>不能为空</label>");
						ship=0;
					}
				}else{
					$(".countrys").find("label").remove();
					ship=1;
				}
			}
			
			if($(".citizenship").val()=="中国"&&$(".FirstInventor").hasClass("hover")){
				if($.isEmpty($(".credNo").val()) && $(".credNos").find("label").length==0){
					$(".credNos").append("<label>不能为空</label>");
					credNo=0;
				}
			}else{
				$(".credNos").find("label").remove();
				credNo=1;
			}
		})
		
	},
	/*
	 * 验证必填项
	 */
	_empty : function(){
		$(".empty").blur(function(){
			console.log($(this).val());
			if($.isEmpty($(this).val())&&$(this).parents("li").find("label").length==0){
				$(this).parents("li").append("<label>不能为空</label>");
			}else{
				$(this).parents("li").find("label").remove();
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
		
		
		/*姓名转换为大写*/
		$(".inventNameCn").blur(function(){
			var str=pinyin.getFullChars(this.value).toLocaleUpperCase();
			$(".inventNameEn").val(str);
		});
		
		/*申请人*/
		$(".proposer-btn").click(function(){
			$(".lay-out,.addproposer").show();
		});
		$(".addproposer h3 b,.addproposer .submit input:nth-child(2)").click(function(){
			$(".lay-out,.addproposer").hide();
			$(".addproposer input").not(".submit input").val("");
		});
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
