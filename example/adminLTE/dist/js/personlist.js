// 2个弹窗效果
$(".content-header .up-one").click(function(){
	$(".submit_fail").css("display","block");
})
$(".box_top img").click(function(){
	$(".submit_fail").css("display","none");
})
$(".lessclose").click(function(){
	$(".submit_fail").css("display","none");
})
$("#lessbtn").click(function(){
	$(".submit_fail").css("display","none");
})



$(".content-header .up-some").click(function(){
	$(".submit_btn").css("display","block");
})
$(".box_top img").click(function(){
	$(".submit_btn").css("display","none");
})
$("#myform div:last-child").click(function(){
	$(".submit_btn").css("display","none");
})