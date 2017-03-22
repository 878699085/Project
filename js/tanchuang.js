$(function(){
	apply.init();
	
	
})
var apply={
		init:function(){
			/*所在地*/
        	commom.searchSuggest($(".placeOne div"),$(".placeOne input"),"../js/test1.json");
        	commom.searchSuggest($(".placeTwo div"),$(".placeTwo input"),"../js/test1.json");
		},
		shows:function(){
			$(".placeOne").click(function(){
	            /*judge.judge_one($(".placeOne"),$(".placeOne input"));*/
	            if($(".placeOne input").val()=="北京") {
	                $(".placeTwo").show();
	            }else{
	                $(".placeTwo").hide();
	            }
       	 	});
		}
	}