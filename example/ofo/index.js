setSize();
function setSize(){
    var desW =750;
    var winW = document.documentElement.clientWidth;
    if(winW>=750){
        winW = 750;
    }
    document.documentElement.style.fontSize = (winW/desW * 100) + "px";
}
window.onresize = setSize;

// 
$(function(){
	$(".up").click(function(){
		$(".up").hide();
		$(".msg").hide();
		$(".upup").show();
		$(".logo").css("height","0.8rem");
	})
	$(".upup").click(function(){
		$(".up").show();
		$(".msg").show();
		$(".upup").hide();
		$(".logo").css("height","0.7rem");
	})
	var flag=true;
	$("#down").click(function(){
		if(flag){
			$("#user").slideUp();
			$("#down").attr("src","img/foot-up.png");
			flag=false;
		}else{
			$("#user").slideDown();
			$("#down").attr("src","img/foot-down.png");
			flag=true;
		}
		
	})

	$("#del").click(function(){
		$(".shang").animate({top:'-25%'});
		$(".xia").animate({top:'100%'});
		
	})
	$("#geren").click(function(){
		
		$(".shang").animate({top:'0'});
		$(".xia").animate({top:'25%'});
	})
})
