// 获取css样式
function getStyle(obj,name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj.false)[name];
	}
}


// 左侧栏
var lnum = 0;
// 鼠标滑动的时候记录 定位
window.onscroll=function(){

	var left = document.getElementById('left');
	var lli = left.getElementsByTagName('li');
	var lsp = left.getElementsByTagName('span');
	

	var Windowtop = document.documentElement.scrollTop || document.body.scrollTop;

	// console.log(lli.length)
	if (Windowtop >= 720) {
		left.style.position = 'fixed';
		left.style.top = '80px';

	}else{
		left.style.position = 'absolute';
		left.style.top = '800px';

	}

	for (var k = 0; k < lli.length; k++) {
		
		this.index=k;
		
		m=(this.index+1)*700;
		// console.log(m);
	// console.log(m);
	// console.log(Windowtop);
		if (Windowtop>=m) {
		
			for (var j = 0; j < k; j++) {
			lli[j].style.color = '';
			lsp[j].style.display = '';

			}
			lli[this.index].style.color = '#f93';
//			lsp[this.index].style.display = 'block';
			// lnum = this.index;
		}
		if (m>Windowtop) {
			for (var j = this.index; j < this.index; j--) {
			lli[j].style.color = '#f93';
//			lsp[j].style.display = 'block';

			}
			lli[this.index].style.color = '';
//			lsp[this.index].style.display = '';
			// lnum = this.index;
		}
		
		// console.log(this.index);
	}

	for (var i = 0; i < lli.length; i++) {
	lli[i].index = i;
	
	lli[i].onclick = function () {
		/*for (var j = 0; j < lli.length; j++) {
			lli[j].style.color = '#333';
			lsp[j].style.display = 'none';
		}	
			lli[this.index].style.color = '#f93';
			lsp[this.index].style.display = 'block';
			lnum = this.index;*/
	}

	lli[i].onmouseover = function () {
		for (var j = 0; j < lli.length; j++) {
			// lli[j].style.color = '#333';
			lsp[j].style.display = 'none';
		}	

			/*lsp[lnum].style.display = 'block';
			lli[lnum].style.color = '#f93';*/
			lsp[this.index].style.display = 'block';
			// lli[this.index].style.color = '#f93';
	}

	lli[i].onmouseout = function () {
		// lli[this.index].style.color = '#333';
		lsp[this.index].style.display = 'none';
		/*lsp[lnum].style.display = 'block';
			lli[lnum].style.color = '#f93';*/
	}


	}


}
// 左侧栏结束

// 右侧栏
// div
var zh = document.getElementById('zh');
var yzh = document.getElementById('yzh');
var timer = null;
zh.onmouseover = show;
function show() {
clearInterval(zh.timer)

	zh.timer = setInterval(
		function () {
			var oldr = yzh.style.right;
			var newrg = parseInt(oldr)+6;
			yzh.style.right = newrg+'px';

			if (newrg >= 18) {
				yzh.style.right = '36px';
				// clearInterval(zh.timer)
				
			}console.log(newrg)
	
		},5)

}
zh.onmouseout = hide;
function hide() {
	clearInterval(zh.timer)
	zh.timer = setInterval(
		function time() {
			var oldr1 = yzh.style.right;
			var newrg1 = parseInt(oldr1)-6;
			yzh.style.right = newrg1+'px';

			if (newrg1 <= -276) {
				yzh.style.right = '-300px';
				// clearInterval(zh.timer)
			}
		},5)
	
}
yzh.onmouseover = function () {
	yzh.style.right = '36px';
	clearInterval(zh.timer)
}
yzh.onmouseout = function () {
	zh.timer = setInterval(
		function time() {
			var oldr1 = yzh.style.right;
			var newrg1 = parseInt(oldr1)-6;
			yzh.style.right = newrg1+'px';

			if (newrg1 <= -276) {
				yzh.style.right = '-300px';
				// clearInterval(zh.timer)
			}
		},5)
}

// li运动
var right = document.getElementById('right');
var bli = right.getElementsByTagName('li');
var bsp = right.getElementsByTagName('span');
// var liright = getComputedStyle(bsp[i],null).right|| div.currentStyle.right;

var timer;

bli[0].onmouseover=function () {
	clearInterval(bsp[0].timer)
	startMove(bsp[0])
}
bli[1].onmouseover=function () {
	clearInterval(bsp[1].timer)
	startMove(bsp[1])
}
bli[2].onmouseover=function () {
	clearInterval(bsp[2].timer)
	startMove(bsp[2])
}
bli[3].onmouseover=function () {
	clearInterval(bsp[3].timer)
	startMove(bsp[3])
}
bli[4].onmouseover=function () {
	clearInterval(bsp[4].timer)
	startMove(bsp[4])
}
bli[5].onmouseover=function () {
	clearInterval(bsp[5].timer)
	startMove(bsp[5])
}


bli[0].onmouseout=function () {
	clearInterval(bsp[0].timer)
	bsp[0].style.right = '-115px'
}
bli[1].onmouseout=function () {
	clearInterval(bsp[1].timer)
	bsp[1].style.right = '-115px'
}
bli[2].onmouseout=function () {
	clearInterval(bsp[2].timer)
	bsp[2].style.right = '-115px'
}
bli[3].onmouseout=function () {
	clearInterval(bsp[3].timer)
	bsp[3].style.right = '-115px'
}
bli[4].onmouseout=function () {
	clearInterval(bsp[4].timer)
	bsp[4].style.right = '-115px'
}
bli[5].onmouseout=function () {
	clearInterval(bsp[5].timer)
	bsp[5].style.right = '-115px'
}

function startMove(obj) {
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var liright = parseInt(obj.style.right);
		var linew = liright+10;
		
		// console.log(linew)
		if( linew>=36 ){
			clearInterval(obj.timer);
		}
		else{
			// console.log(obj.style.right)
			obj.style.right = linew+'px';
		}
	},30);
}

// 右侧栏结束


// 大轮播图
var fixh = document.getElementById('fixh');
var btnsp = document.getElementById('btnsp').getElementsByTagName('span');
var fixhul = document.getElementById('fixhul');
var fixhsp = document.getElementById('fixhsp').getElementsByTagName('span');
var numone = 1;
var timerset;
 var animated = false;
var inteval = 3000;
	// 按钮的显示隐藏
fixh.onmouseover = function () {
	btnsp[0].style.display = 'block';
	btnsp[1].style.display = 'block';
  clearInterval(timerset);};
fixh.onmouseout = function () {
	btnsp[0].style.display = 'none';
	btnsp[1].style.display = 'none';
	timerset = setInterval(btnsp[1].onclick,3000);
};

	// 轮播
function sport(range) {
	if (range == 0) {
		return;
	}
	 animated = true;
	var leftfix = parseInt(fixhul.style.left)+range;

	var inteval = 10;
	var timerone = 300;
	var speedone = range/(timerone/inteval);

	function gofix() {
		if ((speedone > 0 && parseInt(fixhul.style.left) < leftfix) || (speedone < 0 && parseInt(fixhul.style.left) > leftfix)) {
			fixhul.style.left = parseInt(fixhul.style.left)+speedone+'px';
			setTimeout(gofix,inteval);
		}else{
			fixhul.style.left = leftfix+'px';
			if (leftfix < -3000) {
				fixhul.style.left = -1000+'px';
			}
			if (leftfix > -1000) {
				fixhul.style.left = -3000+'px';
			}
			 animated = false;
		}
	}
	gofix();
	
}


btnsp[0].onclick = function play() {
	if (animated) {
	    return;
	}
	if (numone == 1) {
		numone = 3;
	}else{
		numone--;
	}
	btnshow();
	sport(1000);
};
btnsp[1].onclick = function () {
	if (animated) {
	    return;
	}
	if (numone == 3) {
		numone = 1;
	}
	else{
		numone++;
	}
	
	btnshow();
	sport(-1000);
};



	// 按钮亮起


console.log(fixhsp);
for (var i = 0; i < fixhsp.length; i++) {
	fixhsp[i].index = i;
	fixhsp[i].onclick = function () {
		if (animated) {
		    return;
		}
		var myIndex = parseInt(this.getAttribute('index'));
		var drift = -1000*(myIndex-numone);
		sport(drift);
		numone = myIndex;
		btnshow();
	};
}

function btnshow() {
	for (var i = 0; i < fixhsp.length; i++) {
		fixhsp[i].style.background = '#c7c7c7';
	}
	
	fixhsp[numone-1].style.background = '#333';
}
timerset = setInterval(btnsp[1].onclick,3000);

//定时播放
// function play() {
// 	timerset = setTimeout( btnsp[1].onclick()
// ,inteval)
// 	play()
// }
// function stop() {
// 	clearTimeout(timerset)
// }

// fixh.onmouseover = stop;
// fixh.onmouseout = play;
// play();

// 轮播图结束


// 选项卡
var oUl = document.getElementById('ulone');
var oLi = oUl.getElementsByTagName('li');
var aDiv = document.getElementById('photo');
var oDiv = aDiv.getElementsByTagName('div');
var oi = oUl.getElementsByTagName('i');

var s = '';

for (var i = 0; i < oLi.length; i++) {

var num = 0;

	oLi[i].index = i;

	oLi[i].onclick = function () {
		
		for (var j = 0; j < oLi.length; j++) {
		oLi[j].className = '';
		oDiv[j].style.display = 'none';
		oi[j].style.display = 'none';

		}
		this.className = 'white';
		oDiv[this.index].style.display = 'block';
		oi[this.index].style.display = 'block';
		num = this.index;
	}

	oLi[i].onmouseover = function () {
		clearInterval(oLi[this.index].timer);
		for (var k = 0; k < oLi.length; k++) {

			oi[k].style.display = 'none';
		}
		oi[num].style.display = 'block';
		oi[num].style.left = '160px';

		oi[this.index].style.display = 'block';
		s = this.index;
		oLi[this.index].timer = setInterval(function () {
			oi[s].style.left = '160px';
		},100);

	}

	oLi[i].onmouseout = function () {
		oi[this.index].style.left = '';
		oi[this.index].style.display = 'none';
		oi[num].style.display = 'block';

	}
	
}
// 选项卡结束


// 轮播图
var oBox = document.getElementById('bigdiv');
var oP = oBox.getElementsByTagName('span');
var oPic = oBox.getElementsByTagName('div');
var ocg = document.getElementById('change');
var aul = ocg.getElementsByTagName('ul');
var num1=0;
var animated1 = false;
// console.log(aul)

// 按钮的显示隐藏
	for (var i = 0; i < oP.length; i++) {
	oP[i].index = i;

		oBox.onmouseover = function () {
			for (var j = 0; j < oP.length; j++) {
				oP[j].style.display = 'block';
			}
		}
		
		oBox.onmouseout = function () {
			for (var j = 0; j < oP.length; j++) {
				oP[j].style.display = 'none';
			}
		}


	}

// 点击无缝滚动
	function animate(fgdrift){
		var left = ocg.style.left;
		var newl = parseInt(left)+fgdrift;
		var fgtime = 10;
		var fgspeed = fgdrift/(fgtime/10);

		function go() {
			if ( (fgspeed > 0 && parseInt(ocg.style.left) < newl) || (fgspeed < 0 && parseInt(ocg.style.left) > newl)){
				
				ocg.style.left = parseInt(ocg.style.left)+fgspeed+'px';
				console.log(ocg.style.left)
				setTimeout(go,10)
			}else{
				ocg.style.left = newl+'px';
				// console.log(newl)
				if (newl < -3000) {
					ocg.style.left = -1000+'px';
				}
				if (newl > -1000) {
					ocg.style.left = -3000+'px';
				}
			}
		}

		go();
	
	}

	oP[0].onclick = function () {
		if (animated1) {
	    return;
	}
		animate(1000)
	}
	oP[1].onclick = function () {
		if (animated1) {
	    return;
	}
		animate(-1000)
	}

// 轮播图结束


/*5 鼠标移入图片变大特效*/
var sorta = document.getElementById('sorta');
var sortb = document.getElementById('sortb');
var sortc = document.getElementById('sortc');
var sortd = document.getElementById('sortd');
var hotsalea = document.getElementById('hotsalea');
var hotsaleb = document.getElementById('hotsaleb');
var hotsalec = document.getElementById('hotsalec');
var hotsaled = document.getElementById('hotsaled');


	sorta.onmouseover = function () {
	hotsalea.style.display = 'block';
	hotsalea.style.filter = 'blur(0px)';
	sorta.style.filter = 'blur(0px)';


	}
	sorta.onmouseout = function () {
	hotsalea.style.display = 'none';

	}


	sortb.onmouseover = function () {
	hotsaleb.style.display = 'block';
	}
	sortb.onmouseout = function () {
	hotsaleb.style.display = 'none';

	}


	sortc.onmouseover = function () {
	hotsalec.style.display = 'block';
	}
	sortc.onmouseout = function () {
	hotsalec.style.display = 'none';

	}


	sortd.onmouseover = function () {
	hotsaled.style.display = 'block';
	}
	sortd.onmouseout = function () {
	hotsaled.style.display = 'none';

	}
// 小轮播图结束

// 6零食页面滚动
var section = document.getElementsByTagName('section')[1];
var btnL = document.getElementById('btn-left');
var btnR = document.getElementById('btn-right');
var dir = document.getElementById('driftbox');

section.onmouseover = function () {
	btnL.style.display = 'block';
	btnR.style.display = 'block';
}
section.onmouseout = function () {
	btnL.style.display = 'none';
	btnR.style.display = 'none';
}

// 滚动
function animatetwo(drifttwo) {
	var lefttwo = dir.style.left;
	var newtwo = parseInt(lefttwo)+drifttwo;
	var timertwo = 300;
	var speedtwo = drifttwo/(timertwo/10);

	function gotwo() {
		if ( (speedtwo > 0 && parseInt(dir.style.left) < newtwo) || (speedtwo < 0 && parseInt(dir.style.left) > newtwo)){
            dir.style.left = parseInt(dir.style.left)+speedtwo+'px';
            setTimeout(gotwo,10)
        }else{
        dir.style.left = newtwo+'px';
		if (newtwo < -1300 ) {
			dir.style.left = -650+'px';
		}
		if (newtwo > -650 ) {
			dir.style.left = -1300+'px';
		}
	        }
	}
	gotwo()


}

btnL.onclick = function () {
	animatetwo(650);
}
btnR.onclick = function () {
	animatetwo(-650);
}
// 零食页面滚动结束


// 分页
var section1 = document.getElementsByTagName('section')[2];
var btnL1 = section1.getElementsByTagName('span')[0];
var btnR1 = section1.getElementsByTagName('span')[1];
var dir1 = section1.getElementsByTagName('div')[0];
console.log(dir1)

section1.onmouseover = function () {
	btnL1.style.display = 'block';
	btnR1.style.display = 'block';
}
section1.onmouseout = function () {
	btnL1.style.display = 'none';
	btnR1.style.display = 'none';
}

// 滚动
function animatetwo1(drifttwo1) {
	var lefttwo1 = dir1.style.left;
	var newtwo1 = parseInt(lefttwo1)+drifttwo1;
	var timertwo1 = 300;
	var speedtwo1 = drifttwo1/(timertwo1/10);

	function gotwo1() {
		if ( (speedtwo1 > 0 && parseInt(dir1.style.left) < newtwo1) || (speedtwo1 < 0 && parseInt(dir1.style.left) > newtwo1)){
            dir1.style.left = parseInt(dir1.style.left)+speedtwo1+'px';
            setTimeout(gotwo1,10)
        }else{
        dir1.style.left = newtwo1+'px';
		if (newtwo1 < -1300 ) {
			dir1.style.left = -650+'px';
		}
		if (newtwo1 > -650 ) {
			dir1.style.left = -1300+'px';
		}
	        }
	}
	gotwo1()


}

btnL1.onclick = function () {
	animatetwo1(650);
}
btnR1.onclick = function () {
	animatetwo1(-650);
}