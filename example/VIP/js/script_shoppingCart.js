//变量
var Gouwuche_oShopList = document.getElementById('gouwuche_shoplist'); //购物单
var Gouwuche_ashoppingCart=Gouwuche_oShopList.getElementsByTagName('li');
var len = Gouwuche_oShopList.getElementsByTagName('li').length; //商品种类数量

var Gouwuche_aShuliangJian = Gouwuche_oShopList.getElementsByClassName('gowuche_jian');
var Gouwuche_aShuliangJia = Gouwuche_oShopList.getElementsByClassName('gowuche_jia');
var Gouwuche_aShuliang = Gouwuche_oShopList.getElementsByClassName('gouwuche_shopvalue');
var Gouwuche_aJiage = Gouwuche_oShopList.getElementsByClassName('gouwuche_jiage');
var Gouwuche_zongjia = document.getElementsByClassName('gouwuche_zongjia');
var Gouwuche_zongshu = document.getElementById('gouwuche_zongshu');
var Gouwuche_del = document.getElementsByClassName('gouwuche_delete');
var Gouwudai_Num = document.getElementById('gouwudaishop_num');

var Gouwuche_Min = document.getElementById('gouwuche_txt_min');
var Gouwuche_Sec = document.getElementById('gouwuche_txt_sec');
var Gouwuche_TMin = document.getElementById('gouwuche_TimeMin');
var Gouwuche_TSec = document.getElementById('gouwuche_TimeSec');

var Gouwuche_MianTxt = document.getElementById('gouwuche_mianyunfeitxt');
var Gouwuche_MianNum = document.getElementById('gouwuche_mianyunfeinum');
var Gouwuche_MianTxt2 = document.getElementById('gouwuche_shop_chazhitxt');
var Gouwuche_MianNum2 = document.getElementById('gouwuche_shop_chazhi');

var Gouwuche_Tianjia = document.getElementById('gouwuche_tianjia');
var Goumai = Gouwuche_Tianjia.getElementsByClassName('gouwuche_gouami');
var lenShop = Gouwuche_Tianjia.getElementsByClassName('gouwuche_gouami').length;

var txt1 = Gouwuche_MianTxt.innerHTML;
var txt2 = Gouwuche_MianTxt2.innerHTML;

var aJiage = [];

var Gouwuche_aXiaoji = document.getElementsByClassName('gowuche_shop_xiaojie');
//事件
funBtn();
Daojishi();
xiaoJie();

for(var i = 0; i < lenShop; i++) {
	var re=/<[^<>]+>/g;
	Goumai[i].index = i;
	Goumai[i].onclick = function() {
		var oLi = document.createElement('li');
		oLi.innerHTML = Goumai[this.index].parentNode.getElementsByClassName('gouwuche_newmessage')[0].innerHTML;
		for(var j=0;j<len;j++){
			if(Gouwuche_ashoppingCart[j].getElementsByTagName('p')[0].innerHTML===Goumai[this.index].parentNode.getElementsByClassName('gouwuche_newmessage')[0].getElementsByTagName('p')[0].innerHTML){
				alert('该商品已在购物车中！');
				return;
			}
		}
		Gouwuche_oShopList.appendChild(oLi);
		len++;
		alert('添加成功！');
		xiaoJie();
		funBtn();
	}
}

function funBtn() {
	for(var i = 0; i < len; i++) {

		Gouwuche_aShuliangJian[i].index = i;
		Gouwuche_aShuliangJia[i].index = i;
		Gouwuche_del[i].index = i;
		//减号按钮
		Gouwuche_aShuliangJian[i].onclick = function() {
			var Gouwuche_aShuliangJian = Gouwuche_oShopList.getElementsByClassName('gowuche_jian');
			var val = this.parentNode.getElementsByClassName('gouwuche_shopvalue')[0];
			var num = val.innerHTML;
			num--;
			if(num == 0) {
				val.innerHTML = 1;
				alert('不能再减了！');
				return;
			}
			this.parentNode.getElementsByClassName('gouwuche_shopvalue')[0].innerHTML = num;
			xiaoJie();
		}
		//加号按钮
		Gouwuche_aShuliangJia[i].onclick = function() {
			var Gouwuche_aShuliangJia = Gouwuche_oShopList.getElementsByClassName('gowuche_jia');
			var val = this.parentNode.getElementsByClassName('gouwuche_shopvalue')[0];
			var num = val.innerHTML;
			num++;
			this.parentNode.getElementsByClassName('gouwuche_shopvalue')[0].innerHTML = num;
			xiaoJie();
		}
		//删除
		Gouwuche_del[i].onclick = function() {
			var Gouwuche_del = document.getElementsByClassName('gouwuche_delete');
			len--;
			alert('移除成功');
			if(len==0){
				window.location.href='http://127.0.0.1:8020/%E5%A4%A7%E4%BD%9C%E4%B8%9A/index/Nothing.html?__hbt=1505819751108';
			}
			this.parentNode.remove();
			xiaoJie();
		}
	}
}

//函数
//计算小结金额
function xiaoJie() {
	var sum = 0;
	var sum2 = 0;
	for(var i = 0; i < len; i++) {
		var num = Gouwuche_aJiage[i].innerHTML.replace(/￥/, '');
		aJiage[i] = parseFloat(num);
		console.log(aJiage);
	}
	for(var i = 0; i < len; i++) {
		var num = aJiage[i] * Gouwuche_aShuliang[i].innerHTML;
		sum2 += parseFloat(Gouwuche_aShuliang[i].innerHTML);
		sum += parseFloat(num);
		Gouwuche_aXiaoji[i].innerHTML = '￥' + num;
	}
	Gouwuche_zongjia[0].innerHTML = sum;
	Gouwuche_zongjia[1].innerHTML = sum;
	Gouwuche_zongshu.innerHTML = sum2;
	Gouwudai_Num.innerHTML = sum2;

	if(288 - sum < 0) {
		Gouwuche_MianTxt.innerHTML = Gouwuche_MianTxt2.innerHTML = "当前免运费";
	} else {
		Gouwuche_MianTxt.innerHTML = txt1;
		Gouwuche_MianTxt2.innerHTML = txt2;
		var Gouwuche_MianNum = document.getElementById('gouwuche_mianyunfeinum');
		var Gouwuche_MianNum2 = document.getElementById('gouwuche_shop_chazhi');
		Gouwuche_MianNum.innerHTML = 288 - sum;
		Gouwuche_MianNum2.innerHTML = 288 - sum + '元';
	}

}

function Daojishi() {
	var Min = Gouwuche_Min.innerHTML;
	var Sec = Gouwuche_Sec.innerHTML;
	setInterval(function() {
		Sec--;
		if(Sec == -1) {
			Sec = 59;
			Min--;

			if(Min == 0) {
				history.go(0);
			}
			if(parseInt(Min) < 10) {
				Min = '0' + Min;
			}
		}
		if(parseInt(Sec) < 10) {
			Sec = '0' + Sec;
		}

		Gouwuche_Sec.innerHTML = Sec;
		Gouwuche_TSec.innerHTML = Sec;
		Gouwuche_Min.innerHTML = Min;
		Gouwuche_TMin.innerHTML = Min;
	}, 1000);
}