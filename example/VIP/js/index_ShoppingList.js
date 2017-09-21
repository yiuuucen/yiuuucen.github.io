// 右边栏的top
var oTop=document.getElementById('navBottom').getElementsByTagName('div')[1];
oTop.onclick=function(){
	// alert(1);
	var scrollToTop = window.setInterval(function() {
	    var pos = window.pageYOffset;
	    if ( pos > 0 ) {
	        window.scrollTo( 0, pos - 50 ); // how far to scroll on each step
	    } else {
	        window.clearInterval( scrollToTop );
	    }
	}, 16);//// how fast to scroll (this equals roughly 60 fps)
}



// hrhr的事件
var oDivLi=document.getElementById('liDiv');
var ali=oDivLi.getElementsByTagName('li');
for(var i=1;i<ali.length;i++){
	ali[i].onmouseover=function(){
		for(var j=1;j<ali.length;j++){
			ali[j].className='';
		}
		this.className='active';
	}
}
// goods商品的效果
var toShoppingCart=document.getElementById('toShoppingCart');
var flag01=true;
toShoppingCart.onclick=function(){
	if(flag01){
		toShoppingCart.children[0].href='ShoppingCart.html';
	}
}

var oGood=document.getElementsByClassName('goods')[0];
var Goods=oGood.getElementsByTagName('li');
var len=Goods.length;
for(var i=0;i<len;i++){
	Goods[i].index=i;
	Goods[i].onclick=function(){
		window.location.href='http://127.0.0.1:8020/%E5%A4%A7%E4%BD%9C%E4%B8%9A/index/proDetail.html?__hbt=1505819751108';
	}
}

var oDay=document.getElementById('Day');
var oHour=document.getElementById('Hour');
var oMin=document.getElementById('Min');
var oSec=document.getElementById('Sec');
function Daojishi() {
	var Day = oDay.innerHTML;
	var Hour = oHour.innerHTML;
	var Min = oMin.innerHTML;
	var Sec = oSec.innerHTML;
	setInterval(function() {
		Sec--;
		if(Sec == -1) {
			Sec = 59;
			Min--;

			if(Min == -1) {
				Min=59;
				Hour--;
				
				if(Hour==-1){
					Hour=23;
					Day--;
				}
			}
			if(parseInt(Min) < 10) {
				Min = '0' + Min;
			}
		}
		if(parseInt(Sec) < 10) {
			Sec = '0' + Sec;
		}

		oDay.innerHTML=Day;
		oHour.innerHTML=Hour;
		oMin.innerHTML=Min;
		oSec.innerHTML=Sec;
	}, 1000);
}
Daojishi();