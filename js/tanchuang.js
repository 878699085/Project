$(function(){
	apply.init();
   $(".button .leftn").click(function(){
	   $(".apply_window").show();
   })
	$(".apply_window .close").click(function(){
		$(".apply_window").hide();
	});

	var num=0;
	setInterval(function(){
		if(num==3){
			num=-1;
		}
		num++;
		$(".posit img").prop("src","../imgs/a"+num+".png")
	},500);
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