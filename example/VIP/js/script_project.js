window.onload=function(){
	init();
}

var init=function(){
		
	setInterval(function(){
		
		leaveTime();		
	},1);	

//向下移动滚动条，导航栏固定不变
	var navBar=document.getElementById('product_message').getElementsByTagName('div')[0];
	var H=document.getElementById('product_head').offsetHeight+document.getElementById('header').offsetHeight-100;
	var hConsult=document.getElementsByClassName('look_others_head')[1].offsetTop-100;
	var hUs=document.getElementsByClassName('look_others_head')[2].offsetTop-100;
	var aNav=navBar.getElementsByTagName("li");
	var navUl=navBar.getElementsByTagName('ul')[0];

	var navBarHtml=navUl.innerHTML;
	window.onscroll=function(){
		//固定导航栏
		var t=document.documentElement.scrollTop||document.body.scrollTop;	
		if(t>=H){
			navBar.style.position='fixed';
			navBar.style.top=0;
			navBar.style.background="#fff";
			navBar.style.marginLeft='-300px';
			navBar.style.paddingLeft='300px';

			navBar.style.borderBottom="2px solid #000";
			navUl.innerHTML=navBarHtml+'<div class="price1"><em>¥18</em></div><button><i class="fa fa-shopping-bag" aria-hidden="true"></i>加入购物车</button>';
			clear();

			if(t<hConsult){
				navLight(0);
			}else if(t>hConsult&&t<hUs){
				navLight(1);
			}else if(t>hUs){
				navLight(2);
			}
		}else{
			clear();
			navBar.style.position='static';
			navBar.style.marginLeft='0px';
			navBar.style.paddingLeft='0px';
			navUl.innerHTML=navBarHtml;
		}

	}

	//清除前面样式
	var clear=function(){
		for(var j=0;j<aNav.length;j++){
			aNav[j].style.borderBottom="0";
			aNav[j].getElementsByTagName('a')[0].style.color="#000";
		}
	}
	//导航条高亮显示
	var navLight=function(x){
		aNav[x].style.borderBottom="3px solid #f10180";
		aNav[x].getElementsByTagName('a')[0].style.color="#f10180";
	}
	//鼠标移入与点击导航条
	for(var i=0;i<aNav.length;i++){
		aNav[i].index=i;
		aNav[i].onmouseover=function(){
			navLight(this.index);
		}
		aNav[i].onmouseout=function(){
			this.style.borderBottom="0";
			this.getElementsByTagName('a')[0].style.color="#000";
		}
	}

	myNum();
	product();
	getActive();
	otherGoods();
	
}

//产品下架倒计时
var leaveTime=function (){
	var time=document.getElementById('leave-time');
	var iNow=new Date();
	var iNew=new Date(2017,8,25,0,0,0);
	var t=Math.floor((iNew-iNow)/1000);//将毫秒变为秒
	var str='剩余：'+Math.floor(t/86400)+'天'+to(Math.floor(t%86400/3600))+'时'+to(Math.floor(t%86400%3600/60))+'分'+to(t%60)+'秒.'+Math.floor((iNew-iNow)%1000/100);
	time.innerHTML=str;
	function to(mytime){
		return mytime<10?'0'+mytime:mytime;
	}
}	

//购买物品数量
var myNum=function(){
	var reduce=document.getElementById('reduce');
	var plus=document.getElementById('plus');
	var num1=document.getElementById('num');
	var toolTips=document.getElementById('toolTips');
	var num=2;
	reduce.onclick=function(){
		if(num>3){
			num--;
			this.style.backgroundPosition='-100px -150px';
			plus.style.backgroundPosition='-50px -150px';
			
		}else{
			num=2;
			this.style.backgroundPosition='-0px -150px';
			toolTips.style.display='block';
			toolTips.getElementsByTagName('span')[0].innerHTML="本商品两件起售";
			setTimeout(function(){
				toolTips.style.display='none';
			},1500);
		}
		num1.innerHTML=num;
	}
	plus.onclick=function(){
		if(num<11){
			num++;
			reduce.style.backgroundPosition='-100px -150px';
			this.style.backgroundPosition='-50px -150px';
		}else{
			num=12;
			this.style.backgroundPosition='-150px -150px';
			toolTips.style.display='block';
			toolTips.getElementsByTagName('span')[0].innerHTML="同尺码限购12件";
			setTimeout(function(){
				toolTips.style.display='none';
			},1500);
			
		}	

		num1.innerHTML=num;		
	}
}

//商品实现放大镜效果
var product=function(){
	var bigImg=document.getElementById('bigImg');
	var img=bigImg.getElementsByTagName('img')[0];
	bigImg.onmousemove=function(ev){
		var oEvent=ev||event;
		var l=oEvent.clientX-bigImg.offsetLeft;
		var t=oEvent.clientY;
		img.style.transformOrigin=l+'px '+t+'px';
	}
	//切换照片放大
	var div = document.getElementById('pic-slider');
	var hImg=div.getElementsByTagName('img');
	for (var i = 0; i < hImg.length; i++) {
		hImg[i].onclick=function(){
			img.src=this.src;
		}
	}

}

//鼠标移入其他产品，图片进行切换
var otherGoods=function(){
	var myImg=document.getElementById('look_others');
	var imgLi=myImg.getElementsByTagName('li');
	for(let i=0;i<imgLi.length;i++){
		imgLi[i].onmouseover=function(){
			var oImg=this.getElementsByTagName('img')[0];
			oImg.src="./img/others"+(i+1)+"2.jpg";
		}
		imgLi[i].onmouseout=function(){
			var oImg=this.getElementsByTagName('img')[0];
			oImg.src="./img/others"+(i+1)+".jpg";
		}
	}
}


//'关于我们'中点击图标变亮
var getActive=function(){
	var oUl=document.getElementById('bg-nav');
	var aLi=oUl.getElementsByTagName('li');
	var firstDiv=oUl.getElementsByTagName('div')[0];
	var lastImg=oUl.getElementsByTagName('div')[1].getElementsByTagName('img')[0];
	var oldLi=aLi[0];
	var n=0;
	//鼠标移入移出
	for(let i=1;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			this.style.backgroundPosition=-60*i+'px -120px';
		}
		aLi[i].onmouseout=function(){
			if(i==n){
				return;
			}else{
				this.style.backgroundPosition=-60*i+'px 0';
			}
			
		}	
	}

	//图片切换属性定义
	var aboutUsLeft=document.getElementById('about-us-left');
	var aboutUsRight=document.getElementById('about-us-right');
	var lastImgDiv=document.getElementById('last-img');
	var arrImg=[
		["./img/au_img01.jpg","./img/au_img02.jpg"],
		["./img/au_img11.jpg","./img/au_img12.jpg","./img/au_img13.jpg","./img/au_img14.jpg"],
		["./img/au_img21.jpg","./img/au_img22.jpg"],
		["./img/au_img31.jpg"],
		["./img/au_img41.jpg"],
		["./img/au_img51.jpg"],
		["./img/au_img61.jpg"],
		["./img/au_img71.jpg"],
		["./img/au_img81.jpg","./img/au_img82.jpg"],
		["./img/au_img91.jpg","./img/au_img92.jpg"]
	];
	
	//鼠标点击
	for(let j=0;j<aLi.length;j++){

		aLi[j].onclick=function(){

			oldLi.style.backgroundPosition=-60*n+'px 0';
			this.style.backgroundPosition=-60*j+'px -120px';
			oldLi=this;
			n=j;
			firstDiv.style.backgroundPosition='0 '+(-240-80*j)+'px';
			lastImg.src="./img/au_img"+j+"1.jpg";

			//实现图片左右切换
			if(arrImg[j].length>1){
				aboutUsLeft.style.display="block";
				aboutUsRight.style.display="block";
				var imgNum=0;
				aboutUsRight.onclick=function(){						
					if(imgNum==arrImg[j].length-1){
						return;
					}
					imgNum++;	
					lastImg.src=arrImg[j][imgNum];
				}
				aboutUsLeft.onclick=function(){
					if(imgNum==0){
						return;
					}
					imgNum--;
					lastImg.src=arrImg[j][imgNum];
				}
			}else{
				aboutUsLeft.style.display="none";
				aboutUsRight.style.display="none";
			}
		}
	}
}


	
