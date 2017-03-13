$(function(){
	$(".detail").click(function(){
		$(".pay_details").toggle();
	        if($(".pay_details").hasClass("hide")){
	            $(".detail img").prop("src","../imgs/top_trigle.png")
	        }else{
	            $(".detail img").prop("src","../imgs/bottom_trigle.png")
	        }
	})
})
