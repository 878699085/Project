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
	showSelect($(".nav_Tops dl"),$(".nav_Tops dl p"));
	showSelect($(".table dl"),$(".table dl p"));
	//订单详情弹窗
	order();
	//添加邮寄弹窗
	posts();
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
//添加邮寄弹窗
function posts(){
	$(".User_Info .add").click(function(){
		$(".post_window").show();
	});
	$(".add_post .close").click(function(){
		$(".post_window").hide();
	})
}
