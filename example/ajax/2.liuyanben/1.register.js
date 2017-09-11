// 




/*
	注册，登录，退出
*/
window.onload=function () {
	
	/*
	   验证用户名

	   get方法

	   在guestbook/index.php页面下

	   		参数
				m :index
				a:verifyUserName
				username:要验证的用户名
			
			返回一个json
			
			 	{
					code:返回的代码 0=没有错误 1=有错误
					message:返回的信息   返回的具体信息
			 	}
	*/
	// alert(document.cookie);
	//初始化
	var oUser=document.getElementById('user');
	var oReg=document.getElementById('reg');
	var oLogin=document.getElementById('login');
	var oUserInfo=document.getElementById('userinfo'); 

	updateUserStatus();
	
	function updateUserStatus() {
		var uid = getCookie('uid');
		var username = getCookie('username');
		if (uid) {
			//如果是登陆状态
			oUser.style.display = 'block';
			oUserInfo.innerHTML = username;
			oReg.style.display = 'none';
			oLogin.style.display = 'none';
		} else {
			oUser.style.display = 'none';
			oUserInfo.innerHTML = '';
			oReg.style.display = 'block';
			oLogin.style.display = 'block';
		}
	}



	// 得到cookie
	function getCookie(key){
		
		var arr1=document.cookie.split('; ');//注意这个分号后面有个空格
		for(var i=0;i<arr1.length;i++){
			var arr2=arr1[i].split('=');
			if(arr2[0]==key){		
				return arr2[1];
			}
		}
	}
	
	

	
	// 验证注册
	var oUsername1=document.getElementById('username1');
	var oVerifyUserNameMsg=document.getElementById('verifyUserNameMsg');
	oUsername1.onblur=function(){

		my_ajax('get','guestbook/index.php','m=index&a=verifyUserName&username='+this.value+'&t='+new Date().getTime(),function(data){
				var d=JSON.parse(data);
				oVerifyUserNameMsg.innerHTML=d.message;
				if(d.code){
					oVerifyUserNameMsg.style.color='red';
				}else{
					oVerifyUserNameMsg.style.color='green';
				}
		});
	}


	/*
	   用户注册

	   get方法

	   在guestbook/index.php页面下

	   		参数
				m :index
				a:reg
				username:要注册的用户名
				password:注册的密码
			
			返回一个json
			
			 	{
					code:返回的代码 0=没有错误 1=有错误
					message:返回的信息   返回的具体信息
			 	}
	*/

	var oPassword1=document.getElementById('password1');
 	var obtnReg=document.getElementById('btnReg');
	obtnReg.onclick=function(){

		my_ajax('post','guestbook/index.php','m=index&a=reg&username='+oUsername1.value+'&password='+oPassword1.value,function(data){
				var d=JSON.parse(data);
				alert(d.message);

		});
		oUsername1.value='';
		oPassword1.value='';
		oVerifyUserNameMsg.style.display='none';
	}


	/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	var oUsername2=document.getElementById('username2');
	var oPassword2=document.getElementById('password2');
 	var obtnLogin=document.getElementById('btnLogin');
	obtnLogin.onclick=function(){

		my_ajax('post','guestbook/index.php','m=index&a=login&username='+encodeURI(oUsername2.value)+'&password='+oPassword2.value,function(data){
				var d=JSON.parse(data);
				alert(d.message);

				if (!d.code) {
					updateUserStatus();
				}
		});
	}

	/*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oLogout = document.getElementById('logout');
	oLogout.onclick = function() {
		
		my_ajax('get', 'guestbook/index.php', 'm=index&a=logout', function(data) {
			
			var d = JSON.parse(data);
			alert(d.message);
			
			if (!d.code) {
				//退出成功
				updateUserStatus();
			}
			
		});
		
		return false;//阻止a标签的跳转
		
	}


	


























}