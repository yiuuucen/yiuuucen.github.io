/*function ClickLN(){
	var oLN=document.getElementById('left_nav');
	var aLi=oLN.getElementsByTagName('li');
//	var aa=aLi.getElementsByTagName('a');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].getElementsByTagName('a')[0].className='';
			}
			this.getElementsByTagName('a')[0].className='active';
		}
	}
}
window.onload=function(){
	ClickLN();
}
*/