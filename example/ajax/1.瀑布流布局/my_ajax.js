function my_ajax(method,url,data,fnSucc,fnFaild) {
	if(window.XMLHttpRequest){
		//非IE6下
		var oAjax= new XMLHttpRequest();
	}else{
		//IE6下
		var oAjax= new ActiveXObject("Microsoft.XMLHTTP");
	}

	//2.连接服务器
	//open(方法，文件名，异步传输)
	if(method=='get' && data){
		// get是在url中传数据
		// post是在send()中传数据
		url+='?'+data;
	}
	oAjax.open(method,url,true);

	//3.发送请求
	if(method=='get'){
		oAjax.send();
	}else{
		// post传数据要设置请求头
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
		// post传数据没有缓存，没有中文乱码
		oAjax.send(data);

	}
	


	//4.接收返回
	oAjax.onreadystatechange=function(){
		//oAjax.readyState  浏览器和服务器进行到哪一步
		if(oAjax.readyState==4){//读取完成
			if(oAjax.status==200){//成功
				fnSucc&&fnSucc(oAjax.responseText);
			}else{//失败
				//失败的时候，如果想查看，可以调用，并不是所有人关心失败的原因
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	}
	
}