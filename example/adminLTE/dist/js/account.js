$(".chang1 .change_pwd").click(function(){
	$(".chang1").css("display","none");
	$(".chang2").css("display","block");
})
$(".chang2 .change_ok").click(function(){
	alert("修改成功")
	$(".chang1").css("display","block");
	$(".chang2").css("display","none");
})