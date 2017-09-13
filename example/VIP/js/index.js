// 右边栏的top
var oTop=document.getElementById('navBottom').getElementsByTagName('div')[1];
oTop.onclick=function(ev){
	// alert(1);
	document.getElementsByTagName('body')[0].scrollTop = 0;
	if(ev&&ev.stopPropagation){//非IE
	　　ev.stopPropagation();
	}
}