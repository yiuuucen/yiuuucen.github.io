$(function(){
	// var regEmail = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;
	// var regEmail = /abc/;
	var regEmail=/^1[3,4,5,7,8]\d{9}$/;
	var ok1=null,ok2=null,not01=null;
		var num=0;
		$('.in1').click(function () {
			num++;
			console.log(num);
			if ( num > 1){
				$('.in1').css({"border-color":"red"});
			}
		})
	
	
	$('.in1').blur(function () {
		var in1=$('.in1').val();
		if (in1=='') {
			$('.wc3').css({"display":"block"});
	        $('.in1').css({"border-color":"red"});
		}else{
			if (in1.search(regEmail) == -1) {
				// alert('错误');
				// $('.wc3').html("请输入正确的用户名");
				
			}else{
				ok1=true;
				console.log(ok1);
			}
		}	
   })


	$('.in2').blur(function () {
		var in2=$('.in2').val();
		if (in2=='') {
			$('.wc33').css({"display":"block"});
	        $('.in2').css({"border-color":"red"});
		}else	{	
			if (in2.length>=6 && in2.length<=12) {
				ok2=true;
				console.log(ok2);
			}else{
				// alert('错误');
				// $('.wc33').html("输入错误");
			}
		}
   })
	$('.in3').click(function() {
		if (ok1 && ok2) {
			$('.wc44').css({"display":"none"});
			alert('正确');
			window.location.href='http://127.0.0.1:8020/%E5%A4%A7%E4%BD%9C%E4%B8%9A/index/index.html?__hbt=1505819751108';
		}
		else{
			$('.wc3').css({"display":"none"});
			$('.wc33').css({"display":"none"});
			$('.wc44').css({"display":"block"});;
		}
	})	



	$('.in13').click(function(){
		var wc9 = $(".wc9");

    if ( wc9.css("display") === "none" ) {

        wc9.show();

    } else {

        wc9.hide();

    }
	})
})
