var link = {
	 /*
	 * ListMain 列表内容的容器
	 * viewInput 展示区域
	 *	一级列表class OneClass
	 *	二级列表class TwoClass
	 *	三级级列表class ThreeClass
	 */
	Code : "",
	Code1 : "",
	linkage :  function(ListMain,viewInput,OneClass,TwoClass,ThreeClass){
		var suggestWrap=ListMain;
		var input=viewInput;
		var highLightIndex=-1;
		var ids;
		var txt;
		var timeoutId;
		var	param;
		//初始化
		var init=function(){
			input.bind("keyup",sendKeyWord);
			$(document).click(function(){
				hideSuggest();
				suggestWrap.empty();
			})
		}
		//渲染下拉列表;
		var renderFn=function(){
			$.ajax({
				type:'post',
				data:param,
				url:'/dictionary/listnationality',
				dataType:'json',
				success:function(result){
					var result = eval(result.body);
					//console.log(result);
					var str="<p id=''>请选择</p>";
					try {
						$.each(result,function(index,value){
							str+='<p id='+value.addrCode+'>'+value.addrName+'</p>';
						});
						suggestWrap.empty();
						suggestWrap.append(str);
						suggestWrap.show();
						changeLight();
						changeText();
					}catch (err){};
				},
				error:function(){
					hideSuggest();
				}
			})
		}
		//发送请求,根据关键字在后台查询;
		var sendKeyWord=function(event){
			//键盘选择下拉项;
			var myEvent = event || windows.event; 
	        var keyCode = myEvent.keyCode; 
	        //输入是字母，或者退格键则需要重新请求 
	        if(keyCode ==8){ 
	           highLightIndex = -1;
	           suggestWrap.empty();
	           //处理上下键(up,down) 
	         }else if(keyCode == 38 || keyCode == 40){ 
	              processKeyUpAndDown(keyCode);
	              //按下了回车键 
	         }else if(keyCode == 13){
	              processEnter();
	         }
		}
		var processKeyUpAndDown=function(keyCode){
			var words = suggestWrap.children(); 
	        var num = words.length; 
	        if(num <= 0) return; 
	        changeToWhite(); 
	        highLightIndex = ((keyCode != 38 ? num + 1:num - 1)+highLightIndex) % num; 
	        words.eq(highLightIndex).addClass("hover");
	        ids=words.eq(highLightIndex).attr("id");
	        txt=words.eq(highLightIndex).text()
	        input.val(txt); 
	        input.attr("code",ids);
		}
		//鼠标滑过每一项高亮显示;
		var changeLight=function(){
			suggestWrap.find("p").hover(function(){
				suggestWrap.find("p").removeClass("hover");
				$(this).addClass("hover");
			},function(){
				$(this).removeClass("hover");
			})
		}
		
		
		//鼠标点击每一项时,显示剩余的内容;
		var changeText=function(){
			suggestWrap.find("p").click(function(){
				input.val($(this).text());
				if($(this).parents('.'+OneClass).attr("class") == OneClass){
					link.Code = $(this).attr("id");
					if(link.Code == "CHN"){
						$('.'+TwoClass).show();
					}else{
						$('.'+TwoClass+',.'+ThreeClass).hide();
					};
					$('.'+TwoClass+' div,.'+ThreeClass+' div').empty();
					$('.'+TwoClass+' input,.'+ThreeClass+' input').val("");
				}else if($(this).parents('.'+TwoClass).attr("class") == TwoClass){
					link.Code1 = $(this).attr("id");
					if(!$.isEmpty($(this).parents("."+TwoClass).find("input").val()) && $(this).parents('.'+TwoClass).find("input").val() != "请选择"){
						$('.'+ThreeClass).show();
					}else{
						$('.'+ThreeClass).hide();
					}
					$('.'+ThreeClass+' div').empty();
					$('.'+ThreeClass+' input').val("");
				}else if($(this).parents("."+ThreeClass).attr("class") == ThreeClass){
					input.attr("code",$(this).attr("id"));
				}
				
				hideSuggest();
				suggestWrap.empty();
			})
		}
		
		var processEnter=function(){
			if(highLightIndex != -1){
				hideSuggest();
				suggestWrap.empty(); 
			}
		}
		//input聚焦事件;
		input.bind("click",function(){
				suggestWrap.empty();
				if($(this).parent().attr("class") == OneClass){
					suggestWrap=$('.'+OneClass+' div');
					input=$('.'+OneClass+' input');
					param = {superAddrCode : 0 };
					$('.'+TwoClass+' div,.'+ThreeClass+' div').empty();
				}else if($(this).parent().attr("class") == TwoClass){
					suggestWrap=$('.'+TwoClass+' div');
					input=$('.'+TwoClass+' input');
					param = {superAddrCode : link.Code };
					
				}else if($(this).parent().attr("class")  == ThreeClass ){
					param = {superAddrCode : link.Code1 };
					suggestWrap=$('.'+ThreeClass+' div');
					input=$('.'+ThreeClass+' input');
				}
				renderFn();
		})
		
		/*判断为国家的时候添加模糊搜索*/
		 $('.'+OneClass+' input').on("propertychange input",function(){
   			suggestWrap.empty();
   			var InputVal = $(this).val();
			param={superAddrCode : 0 ,addrName : InputVal};
			renderFn();
	       });
		//隐藏下拉框
		var hideSuggest=function(){
			suggestWrap.hide();
		}
		//改变高亮显示;
		var changeToWhite=function(){
			if(highLightIndex != -1){ 
	            suggestWrap.children().eq(highLightIndex).removeClass('hover'); 
	        } 
		}
		init();
	}
}


