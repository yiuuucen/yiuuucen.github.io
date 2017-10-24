/**
 * Created by Administrator on 2016/4/28.
 */
setSize();
function setSize(){
    var desW =750;
    var winW = document.documentElement.clientWidth;
    if(winW>=750){
        winW = 750;
    }
    document.documentElement.style.fontSize = (winW/desW * 100) + "px";
}
window.onresize = setSize;
(function(){
    window.hostUrl = "http://www.51baomu.cn/wcfyonghu/";
    window.parameter = "apiKey=1&version=1.0&clientId=1&reqId=222&reqTime=" + new Date().getTime() + "&dataType=json";
    window.parameterPost = '"apiKey":"51baomu","version":"1.0","clientId":"' + 111 + '","reqId":"1","reqTime":"' + new Date().getTime() + '","dataType":"json"';
    window.photoUrl = "http://www.51baomu.cn/";
    window.smallUrl = "http://img.51baomu.cn/";
})();


//type:���󷽷�
//url������url
//data���������
//callback���ɹ��ص�
//errorCallback������ص�
//GET��POST����
function ajaxData(type, url, data, callback, errorCallback, isAsync) {
    var async=true;
    if(isAsync&&isAsync==false)
    {
        async=false;
    }
    $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: "json",
        async:async,
        success: function (req) {
            if (callback) {
                callback(req);
            }
        },
        error: function () {
            if (errorCallback) {
                errorCallback();
            }
        }
    });
}
//���ݲ������ֻ�ȡurl��������
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


//дcookies
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//��ȡcookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//ɾ��cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

//判断是否为null
function GetNull(val) {
    if (val) {
        return val;
    }
    else {
        if (!isNaN(val)) {
            return "0";
        } else {
            return "暂无";
        }
    }
}
//判断是否为null
function GetEmpty(val) {
    if (val) {
        return val;
    }
    else {
        return " ";
    }
}

//检测是否为null
function isNull(val){
    var res = Object.prototype.toString.call(val);
    var reg = /^\[object Null\]$/;
    if(reg.test(res)){
        return true;
    }
    return false;
}

//显示错误信息
function showerror(error,info) {
    if(info=="success"){
        $(".icon").attr('src','img/icon-success.png')
    }else if(info=="info"){
        $(".icon").attr('src','img/icon-info.png')
    }else{
        $(".icon").attr('src','img/icon-error.png')
    }
    $(".message").html(error);
    $(".layer").show();
    window.setTimeout(function () {
        $(".layer").hide();
    }, 2000);
}

String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
