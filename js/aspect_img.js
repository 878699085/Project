$(function(){
	
	
	//显示下拉列表
	showSelect($(".main_img dl"),$(".main_img dl p"));
	
	changeColor();
	deletes();
	
	//点击添加
	$(".add").click(function(){
		var str="";
		str+='<li >'+
				'<input type="text" placeholder="主视图" class="imgName"/>'+'<label for="">未上传</label>'+
				'<a href="#" class="upload"><input type="file" size="30" name="" id="" value="上传" class="upload_file"/>上传</a>'+'<a href="#" class="del">删除</a>'+
				'<dl>'+
					'<dt>主视图</dt>'+
					'<dd>'+
						'<p>后视图</p>'+
						'<p>左视图</p>'+
						'<p>右视图</p>'+				
						'<p>俯视图</p>'+
						'<p>仰视图</p>'+
						'<p>立体图</p>'+
						'<p>使用状态图</p>'+
						'<p>使用状态参考图</p>'+				
					'</dd>'+
				'</dl>'+
			'</li>'
		$(".main_img ul").append(str);
		
		changeColor();
		deletes();
		
	})
	
	
})
//显示下拉列表
function showSelect(name1,name2){
	name1.click(function(){
		$(this).find("dd").slideToggle();
	})
	name2.click(function(){
		var find_xu=$(this).parent().siblings("dt").text(); 
		$(this).parent().siblings("dt").text($(this).text());
		$(this).text(find_xu);
		/*name3.stop().slideUp();*/
	})
}
function changeColor(){
	//点击添加背景色
		$(".main_img ul li").click(function(){
			$(this).addClass("hover").siblings().removeClass("hover");
		})
}
//删除
function deletes(){
	$(".del").click(function(){
		console.log($(this).parent());
		$(this).parent().remove();
	})
}
