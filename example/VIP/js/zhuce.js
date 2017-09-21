// $(function(){
// 	$('.f5').focus(function(){
// 		var pattern=/^1[3,4,5,7,8]\d{9}$/;
// 		$('.f55').css({"display":"block"});
// 		var f5=$('.f5').val();
// 		if(f5==''){
// 			$('.f55').html("手机号码不能为空!");
// 			$('.f55').css({"color":"#F00"});
// 		}else if(!pattern.test(f5)){
// 			$('.f55').html("手机格式不正确!");
// 			$('.f55').css({"color":"#F00"});
// 		}else{
// 			$('.f55').html("输入正确!");
// 			// $('.f55').css({"display":"none"});
// 			$('.f55').css({"color":"#F00"});
// 		}	
// 	})
// 	$('.f5').blur(function(){
// 		$('.f55').css({"display":"none"});
// 		// $('.f55').html("手机号码不能为空!");
// 	})
// // 密码


// $('.f6').focus(function(){
// 	$('.f77').css({"display":"none"});
// 		$('.f66').css({"display":"block"});
// 		var f6=$('.f6').val();
// 		$('.f66').html("密码为必须填");
// 		if (f6.length<6) {
// 			$('.f66').html("密码不能小于6位");
// 		}else if (f6.length>15) {
// 			$('.f66').html("密码输入错误");
// 		}else {
// 			$('.f66').html("输入正确");
// 		}
// 	})

// $('.f6').blur(function(){
// 	$('.f66').css({"display":"none"});
// 	var f6=$('.f6').val();
// 	if (f6=='') {
// 		$('.f66').html("密码不能为空");
// 		$('.f66').css({"display":"block"});
// 	}
// })

// $('.f7').focus(function(){
// 	$('.f66').css({"display":"none"});
// 	$('.f77').css({"display":"block"});
// 	var f7=$('.f7').val();
// 	$('.f77').html("请再次输入你的密码");

	
// })
// $('.f7').blur(function(){
// 	// $('.f77').css({"display":"none"});
// 	 var f7=$('.f7').val();
// 	if (f7=$('.f6').val()) {
// 		$('.f77').css({"display":"block"});
// 		$('.f77').html("密码正确");
// 		$('.f77').css({"color":"#F00"});
// 	}	
// })


// $('.f8').focus(function () {
// 	$('.f88').css({"display":"block"});
// 	var f8=$('.f8').val();
// 	$('.f88').html("输入验证码");
// 	$('.f9').css({"cursor":"allowed"});

// })

// $('.f8').blur(function () {
// 	$('.f88').css({"display":"none"});
// 	$('.f77').css({"display":"none"});
// })


// })





$(function(){
			var ok1=false,ok2=false,ok3=false,ok4=false;
		    var num=0;
		$('.f5').focus(function(){
			var pattern=/^1[3,4,5,7,8]\d{9}$/;
			var f5=$('.f5').val();
			if (f5=='') {
				 $('.f55').html("请输入你的手机号码!");
				 $('.f55').css({"display":"block"});
				 $('.f55').css({"color":"#F00"});
			}else if (!pattern.test(f5)) {
				$('.f55').html("手机格式不正确!");
			    $('.f55').css({"color":"#F00"});
			     $('.f55').css({"display":"block"});
			}else{
				ok1=true;
				$('.f55').html("输入正确!");
				$('.f55').css({"color":"#F00"});
				$('.f55').css({"display":"block"});
				$('.f9').css({"cursor":"pointer"});
			}
		})
		$('.f5').blur(function(){
		$('.f55').css({"display":"none"});
	})


	$('.f6').focus(function(){
		var f6=$('.f6').val();
		if (f6=='') {
			$('.f66').html("请输入6到12位密码");
			 $('.f66').css({"display":"block"});
			 $('.f66').css({"color":"#F00"});
		}else if (f6.length>=6 && f6.length<=12) {
			ok2=true;
			$('.f66').html("密码输入正确");
			 $('.f66').css({"display":"block"});
			  $('.f66').css({"color":"#F00"});
		}else{
			$('.f66').html("密码输入错误");
			 $('.f66').css({"display":"block"});
			  $('.f66').css({"color":"#F00"});
		}
	})

$('.f6').blur(function(){
	$('.f66').css({"display":"none"});
})

$('.f7').focus(function(){
	var f6=$('.f6').val();
	var f7=$('.f7').val();
	if (f7=='') {
		$('.f77').html("请输入确认密码");
		$('.f77').css({"display":"block"});
		 $('.f77').css({"color":"#F00"});
	}else if (f7==f6 && f7.length>=6) {
		ok3=true;
		$('.f77').html("验证密码正确");
		$('.f77').css({"display":"block"});
		 $('.f77').css({"color":"#F00"});
	}else{
		$('.f77').html("两次密码不一致，请重试");
		$('.f77').css({"display":"block"});
		 $('.f77').css({"color":"#F00"});
	}

	
})
$('.f7').blur(function(){
	$('.f77').css({"display":"none"});
	
})


$('.f8').focus(function () {
	var f8=$('.f8').val();
	if (f8=='') {
		$('.f88').html("输入验证码");
		$('.f88').css({"display":"block"});
		 $('.f88').css({"color":"#F00"});
	}else if (f8.length=6) {
		ok4=true;
	}

})
$('.f8').blur(function () {
	$('.f88').css({"display":"none"});
})


	 
		$('.f10').click(function(){
			if (ok1 && ok2 && ok3 && ok4){
				// $("form").attr( "action", "wph1.html" );
				// alert('正确');
				// console.log(ok1 ,ok2 ,ok3 ,ok4);
			}
			
		})
	

})