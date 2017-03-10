/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
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
    
    patent.init();
})

var patent = {
	init :function(){
		this._validate();
	},
	_validate : function(){
		/*
		 * form的ID
		 * 主要验证新增发明人
		 */
		$("#capitalHolder").validate({
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
	        	secondary : {
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
	        	secondary : {
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
	}
}
