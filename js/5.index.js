// 
	
 	var $oSec1 = $( "#sec1");
 	var $oSec2 = $( "#sec2");
 	var $oSec3 = $( "#sec3");
 	var $oSec4 = $( "#sec4");
 	var $oSec5 = $( "#sec5");
 	var $oSec6 = $( "#sec6");
 	var $oSec7 = $( "#sec7");
    var $oMyNavbar = $('#myNavbar');
    var $oAboutMe=$('#aboutMe');
    var $oMyWorks=$('#myWorks');
    
// 




// section1 S
// 顶部条这个div，点击后回到顶部
$("#sec1>div:first-child").click(function(){
	$('body,html').animate({scrollTop:0},600);
})


//首页的背景图加个定时器会自动改变
var $oSec1_li=$('#sec1>ul>li');
var Sec1Timer=null;
var a; 
clearInterval(Sec1Timer);
Sec1Timer=setInterval(function(){
    a=Math.random();
    a=parseInt(a*10%4);
    for(var i=0;i<4;i++){
        $oSec1_li[i].className='';
    }
    $oSec1_li[parseInt(a)].className='show';
},2500);

// section1 E

// section2 S
//导航条触发事件
window.onscroll = function(){ //绑定scroll事件
	//获取滚动距离
    var t = document.documentElement.scrollTop || document.body.scrollTop; 

    //获取到导航条的id  oMyNavbar
    //获取到第一个section的高度，判断滚动距离 oSec1   
    var heg1=$oSec1.height();
    // 当滚动条到达section2时，导航条固定在上方,并且出现出顶部条这个div
    if( t >= heg1 ) {
        $oMyNavbar.addClass('navbar-fixed-top'); 
        $("#sec1>div:first-child").css('display','block');  
    } else { 
    	$oMyNavbar.removeClass('navbar-fixed-top'); 
    	$("#sec1>div:first-child").css('display','none');   	  
    } 
}

var heg2=$oSec2.height();
 	// var $oAboutMe=$('#aboutMe');
 	//获取到关于我的id $oAboutMe
 	$oAboutMe.click(function(){
 		// 点击关于我后，页面跳转到sec1的高度，也就是section2
 	   	// $(document).scrollTop($oSec1.height());
 	   	$('body,html').animate({scrollTop:$oSec1.height()},800);	   	
 	});
 	//获取到我的作品的id $oMyWorks
 	$oMyWorks.click(function(){
 		// 点击我的作品后，页面跳转到sec1+sec2+sec3的高度
 	   	$('body,html').animate({scrollTop:$oSec1.height()+$oSec2.height()+$oSec3.height()}
 	   	,1500); 	   	
 	});
// section2 E

// section3 S
 	// 导航栏中的滚动条事件
 	$('#myCollapse ul li').click(function(){
 		// alert($('#myCollapse ul li').length);
 		for(var i=0;i<$('#myCollapse ul li').length;i++){
 			$('#myCollapse ul li').eq(i).removeClass('active');
 		}
 		$(this).addClass('active');
 		// alert($(this).index());
 		// alert($oSec5.offset().top);
 	    // console.log($('.centent>div').eq($(this).index()+1).offset().top));
 	    $('body,html').animate({scrollTop:$('.centent>div').eq($(this).index()+1).offset().top}
 	   	,1000); 

 	});


// section3 E

// section4 S

// section4 E

// section5 S
// section5 E

// section6 S
// section6 E

// section7 S
// section7 E
