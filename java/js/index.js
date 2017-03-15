<!--订单详情弹窗-->
$(function(){
    order();
});
function order(){
    $(".order_detail").click(function(){
        $(".order_window").show();
    });
    $(".voucher_tit  i").click(function(){
        $(".order_window").hide();
    })
}
