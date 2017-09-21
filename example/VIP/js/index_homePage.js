$(function(){
	//公共部分开始
var imgs=document.querySelectorAll('img');
	show();
	document.onscroll=show;
	function show(){
		Array.from(imgs).forEach(function(el){
			if(isInsight(el)){
				loadImg(el);
			}
		})
	}
	function isInsight(el){
		const bound=el.getBoundingClientRect();
		const clientHeight=window.innerHeight;
		return bound.top <= clientHeight+100;
	}
	function loadImg(el){
		if(!el.src){
			el.src=el.dataset.src;
		}
	}
//公共部分结束
//header 部分开始
	//header 第一部分开始
		//北京
	$('#top-nav-show a').click(function(){
		$('#top-nav-show a').prop('style','');
		$(this).prop('style','color:#fff;background:#f1037f');
		$('#bei_jin').text($(this).text());
		return false;
	});
	$('#beijin').hover(function(){
		$('#top-nav-show').show();
		$('#beijin i').html('&#xe606;').css('color','#f1037f');
	},function(){
		$('#top-nav-show').hide();
		$('#beijin i').html('&#xe609;').css('color','#000');
	});
	$('#top-nav-show').hover(function(){
		$(this).show();
		$('#beijin i').html('&#xe606;').css('color','#f1037f');
	},function(){
		$(this).hide();
		$('#beijin i').html('&#xe609;').css('color','#000');
	})
		//四个三角形滑过倒转效果
		$('.triangle_hover_animate').hover(function(){
			$(this).find('i').html('&#xe606;').css('color','#f1037f');
		},function(){
			$(this).find('i').html('&#xe609;').css('color','#000');
		})
	//header 第一部分结束
	
	//header 第二部分开始
		var time1=null;
		$('#head-logo-button').hover(function(){
			$(this).css('box-shadow',' 0 0 3px 1px rgba(0,0,0,.2)');
			$('#head-logo-show').show();
		},function(){
			$(this).css('box-shadow','');
			time1=setTimeout(function(){
				$('#head-logo-show').hide();
			},100);
		})
		$('#head-logo-show').hover(function(){
			clearTimeout(time1);
			$('#head-logo-button').css('box-shadow',' 0 0 3px 1px rgba(0,0,0,.2)');
			$(this).show();
		},function(){
			$('#head-logo-button').css('box-shadow','');
			$(this).hide();
		})
	//header 第二部分结束
	
	//header 第三部分开始
	
		$('#more').hover(function(){
			$('#more>i').html('&#xe606;');
		},function(){
			$('#more>i').html('&#xe609;');
		})
	var flag=0;
	$(window).scroll(function(){
		var H=$(document).scrollTop();
		if(H>168){
			if(flag==0){
				$('#vip-common-header .main-nav').prop('style','position:fixed;top:-40px;z-index:999').stop().animate({'top':0},500);
				flag=1;
			}
		}else if(H<128){
			$('#vip-common-header .main-nav').stop().prop('style','');
			flag=0;
		}
	})
	//header 第三部分结束
//header 部分结束
//banner开始
function buttonchange(){
	if(index==0){
			$('#trigger-banner').next().stop().animate({'left':'293px'},400);
		}else{
			$('#trigger-banner').next().stop().animate({'left':'488px'},400);
		}
}

	var index=0;
	$('#trigger-banner li').mouseover(function(){
		index=$(this).index();
		if(index==0){
			$('#trigger-banner').next().stop().animate({'left':'293px'},400);
		}else{
			$('#trigger-banner').next().stop().animate({'left':'488px'},400);
		}
		$('#focus-banner li').stop().eq(index).fadeIn(700).siblings().fadeOut(700);
	});

	$('#focus-banner').parent().hover(function(){
		$('#focus-banner').siblings().eq(0).stop().animate({'left':0},50);
		$('#focus-banner').siblings().eq(1).stop().animate({'left':'943px'},50);
	},function(){
		$('#focus-banner').siblings().eq(0).stop().animate({'left':'-33px'},50);
		$('#focus-banner').siblings().eq(1).stop().animate({'left':'976px'},50);
	});

	$('#focus-banner').siblings().eq(0).click(function(){
			$('#focus-banner li').stop().eq(index).fadeOut(700).siblings().fadeIn(700);
			index==0?index=1:index=0;
			if(index==0){
				$('#trigger-banner').next().stop().animate({'left':'293px'},400);
			}else{
				$('#trigger-banner').next().stop().animate({'left':'488px'},400);
			}
	});
	$('#focus-banner').siblings().eq(1).click(function(){
			$('#focus-banner li').stop().eq(index).fadeOut(700).siblings().fadeIn(700);
			index==0?index=1:index=0;
			if(index==0){
				$('#trigger-banner').next().stop().animate({'left':'293px'},400);
			}else{
				$('#trigger-banner').next().stop().animate({'left':'488px'},400);
			}
	});
	//新人特惠
	$('#index-zhuanshu-wrap>div>a>img').mouseover(function(){
		$(this).stop().animate({'opacity':'0.7'},400).animate({'opacity':'1'},400);
	})
//banner结束
//aside 左悬浮栏 开始
// 左悬浮栏跟随效果开始
$(window).scroll(function(){
	var H=$(document).scrollTop();
	if(H>1150){
		$('#index-nav-wrap').css({'position':'fixed','top':'112px'})
	}else if(H<1150){
		$('#index-nav-wrap').css({'position':'absolute','top':'1087px'})
	}
})
// 左悬浮栏跟随效果结束
// 点击超链接实现锚点跳转开始
var $root=$('html');
$('#index-nav-wrap>div>a:lt(2)').click(function(){
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	},500);
	$('#index-nav-wrap>div>a:lt(2)').removeClass();
	$(this).addClass('aside-active');
	return false;
});
// 点击超链接实现锚点跳转结束
// 女装部分开始
 $('.brand-item').hover(function(){
 	$(this).find('.J_myFav_tag').stop().fadeIn(200);
 	$(this).find('a>img').stop().animate({'opacity':'0.7'},400).animate({'opacity':'1'},400);
 },function(){
	$(this).find('.J_myFav_tag').stop().fadeOut(200);
 })
//女装部分结束
//aside 左悬浮栏 结束

})

var toShoppingCart=document.getElementById('head-logo-button');
var flag01=true;
toShoppingCart.onclick=function(){
	if(flag01){
		toShoppingCart.href='ShoppingCart.html';
	}
}
