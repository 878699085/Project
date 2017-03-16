$(function(){
	//收起，展开
	$(".less_more").click(function(){
		$("form").stop().toggleClass("hide");
		if($("form").hasClass("hide")){
			$(".less_more i").text("展开");
			$(this).find("img").attr("src","../imgs/more.png");
		}else{
			$(".less_more i").text("收起");
			$(this).find("img").attr("src","../imgs/less.png");
		}
	})
	//显示高级查询
	$(".experts").click(function(){
		$(".expert_search").stop().toggleClass("hide");
		if($(".expert_search").hasClass("hide")){
			$(".experts").text("高级查询");
		}else{
			$(".experts").text("基本查询");
		}
	})
	//显示下拉列表；
	showSelect($(".nav_Tops dl"),$(".nav_Tops dl p"),$(".nav_Tops dl dd"));
	showSelect($(".table dl"),$(".table dl p"),$(".table dl dd"));
	//订单详情弹窗
	order();
})

//显示下拉列表
function showSelect(name1,name2,name3){
	name1.click(function(){
		$(this).find("dd").slideToggle();
	})
	name2.click(function(){
		var find_xu=$(this).parent().siblings("dt").text(); 
		$(this).parent().siblings("dt").text($(this).text());
		$(this).text(find_xu);
		name3.stop().slideUp();
	})
}
//订单详情弹窗
function order(){
    $(".order_detail").click(function(){
        $(".order_window").show();
    });
    $(".voucher_tit  i").click(function(){
        $(".order_window").hide();
    })
}
