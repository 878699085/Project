$(function(){

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
	
	$(".join_trade b").click(function(){
		$(this).toggleClass("hover");
	})
	
	link.linkage($(".placeOne div,.placeTwo div,.placeThree div"),$(".placeOne input,.placeTwo input,.placeThree input"),"placeOne","placeTwo","placeThree");
})
