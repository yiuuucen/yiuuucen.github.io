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