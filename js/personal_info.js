$(function(){
	$(".identity b,.attention b").click(function(){
		$(this).toggleClass("hover");
	})
	
	//实例化输入提示的JS,参数为进行查询操作时要调用的函数名 
	commom.searchSuggest($(".countrys div"),$(".country"),"../../js/test.json"); 
	commom.searchSuggest($(".primarys div"),$(".primary"),"../../js/test.json"); 
	commom.searchSuggest($(".secondarys div"),$(".secondary"),"../../js/test.json"); 
})


