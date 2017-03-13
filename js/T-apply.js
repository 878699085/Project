/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
    patent.init();
	unWrite();
})

var patent = {
	init :function(){
		this._array();
		this._validate();
		this._layout();
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
		/*
		 * form的ID
		 * 主要验证新增发明人
		 */
		$("#addInventor").validate({
			focusInvalid: true, //当为false时，验证无效时，没有焦点响应  
	        onkeyup: false,   
	        submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form   
	        	form.Submit();
	        },
	        rules : {
	        	inventNameCn : {
	        		required:true,
	        		maxlength:40
	        	},
	        	inventNameEn : {
	        		required:true
	        	},
	        	three : {
	        		required:true
	        	},
	        	orgLogo : {
	        		required:true
	        	},
	        	orgLicenceUrl : {
	        		required:true
	        	},
	        	orgBussLicenceUrl : {
	        		required:true,
	        	},
	        	orgCodeLicenceUrl : {
	        		required:true
	        	},
	        	orgTaxationLicenceUrl : {
	        		required:true
	        	},
	        	serviceTypes : {
	        		required:true
	        	}
	        },
	        messages : {
	        	inventNameCn : {
	        		required:"不能为空",
	        		maxlength:"最多40个汉字"
	        	},
	        	inventNameEn : {
	        		required:"不能为空"
	        	},
	        	three : {
	        		required:"不能为空"
	        	},
	        	orgLogo : {
	        		required:"不能为空"
	        	},
	        	orgLicenceUrl : {
	        		required:"不能为空"
	        	},
	        	orgBussLicenceUrl : {
	        		required:"不能为空"
	        	},
	        	orgCodeLicenceUrl : {
	        		required:"不能为空"
	        	},
	        	orgTaxationLicenceUrl : {
	        		required:"不能为空"
	        	},
	        	serviceTypes : {
	        		required:"请至少选择一项"
	        	}
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
		$(".countrys").click(function(){
			if($(".citizenship").val()=="中国"){
				
			}
		})
		
		/*申请人*/
		$(".proposer-btn").click(function(){
			$(".lay-out,.addproposer").show();
		});
		$(".addproposer h3 b,.addproposer .submit input:nth-child(2)").click(function(){
			$(".lay-out,.addproposer").hide();
			$(".addproposer input").not(".submit input").val("");
		});
	}
}
function unWrite(){
	$("input").not("#pat1").attr("readonly","true");
	$("#pat1").blur(function(){
		if($("#pat1").val()==""){
			$("input").not("#pat1").attr("readonly","true");
		}else{
			$("input").not("#pat1").removeAttr("readonly");

		}
	})
}
