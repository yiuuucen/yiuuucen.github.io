/**
 * Created by Administrator on 2017/6/27.
 */
$(function(){
    NumUpUI($(".num1"), {
        prefix: "",
        duration:1500,
        decimal: 0,
    });
    //滑动
    var mySwiper2 = new Swiper('#swiper-container2',{
        loop:true,
        autoplay : 5000,
        autoplayDisableOnInteraction :true,
    });

    function order(tel){
        if (tel.Trim().length == 0) {
            showerror("请输入您的手机号");
            return false;
        }
        if (!(/^1[123456789][0-9]{9}$/).test(tel)) {
            showerror("请正确输入手机号");
            return false;
        }
        var g = window.localStorage.getItem("sligleG");
        if(!g){
            g = 0;
        }
        var huodongId = 1001;
        var g = window.localStorage.getItem("sligleG");
        if(!g){
            g = 0;
        }
        var laiyuan = "H5_百度主站竞价落地页0901";
        var data = "{\"chongzhika_huodong_id\":" + huodongId + ",\"shoujihao\":\"" + tel + "\",\"laiyuan\":\""+laiyuan+"\",\"guanggaozuid\":"+g+"}";
        var senddata = '{' + window.parameterPost + ',"data":\'' + data +
            '\',"dataType":"json","sign": "1","token": "login"}';
        ajaxData("POST", window.hostUrl + "appdatacustomer.svc/i_p_chongzhika_huodong", senddata, function (data) {
            if(data.status==1){
                showerror("您已成功预约，请等候客服来电","success");
                $(".form-layer").hide();
            }else{
                showerror(data.message,"error");
            }
        }, function () {
            console.log("操作失败");
        });
    };
    $("#order").click(function(e){
        var tel = $("#tel").val();
        order(tel);
    });
    $("#bag-order").click(function(){
        var tel = $("#bag-order-tel").val();
        if (tel.Trim().length == 0) {
            bagWave();
            return false;
        }
        order(tel);
    });
    $("#bag-order08").click(function(){
        var tel = $("#bag-order-tel08").val();
        if (tel.Trim().length == 0) {
            bagWave();
            return false;
        }
        order(tel);
    });

    $("#nanny-layer-order").click(function(){
        var tel = $("#nanny-layer-tel").val();
        order(tel);
    });
    $("#nanny-layer-order08").click(function(){
        var tel08 = $("#nanny-layer-tel08").val();
        order(tel08);
    });

    $("#night-bag-order").click(function(){
        var tel = $("#night-bag-order-tel").val();
        order(tel);
    });
    $("#night-bag-order08").click(function(){
        var tel = $("#night-bag-order-tel08").val();
        order(tel);
    });

    $(".transparentLayer").click(function(e){
        $(".transparentLayer,.order-result,.success,.failed").css('display','none');
    });


    //map 获取城市列表
    getCity();
    function getCity(){
        var url = window.hostUrl + "appdatacustomer.svc//i_g_huoquchengshi?" + parameter + "&data={}&sign=1&token=login";
        ajaxData("GET", url, null, function (data) {
            if(data.status==0){
                var cityList = data.dataResult.dataInfo;
                var html = '';
                for(var i = 0;i<cityList.length;i++){
                    html += '<p data-id="'+cityList[i].ID+'" data-jingdu="'+cityList[i].JINGDU+'" data-weidu="'+cityList[i].WEIDU+'">'+cityList[i].CHENGSHI+'</p>';
                }
                $("#nanny-city-list").append(html);
                $("#nanny-city-list08").append(html);
                $("#hongbao-city-list").append(html);
                //getShop(cityList[0].ID,cityList[0].JINGDU,cityList[0].WEIDU);
            }
        },function () {
            console.log(data.message)
        },true)
    }

    //todo 获取区域列表
    function getArea(id,jingdu,weidu,board){
        var url = window.hostUrl + "appdatacustomer.svc//i_g_huoqudiqu?" + parameter + "&data={\"id\":" + id + "}&sign=1&token=login;";
        ajaxData("GET", url, null, function (data) {
            if(data.status==0){
                var areaList = data.dataResult.dataInfo;
                var html = '';
                for(var i=0;i<areaList.length;i++){
                    html += '<p>'+areaList[i].DISPLAY+'</p>';
                }
                $("#hongbao-area-list").html('').append(html);
                $("#hongbao_area").children('strong').text('单击选择区');
            }
        },function () {
            console.log(data.message)
        },true)
    }
    //map 获取门店列表
    function getShop(id,jingdu,weidu,board){
        var url = window.hostUrl + "appdatacustomer.svc/i_g_huoqudiqu?" + parameter + "&data={\"id\":" + id + "}&sign=1&token=login;";
        ajaxData("GET", url, null, function (data) {
            if(data.status==0){
                var storeList = data.dataResult.dataInfo;
                var html = '';
                for(var i=0;i<storeList.length;i++){
                    html += '<p>'+storeList[i].DISPLAY+'</p>';
                }
                $("#nanny-store-list").html('').append(html);
                $("#nanny-store-list08").html('').append(html);
                $("#nanny-store").children('strong').text('单击选择区');
                $("#nanny-store08").children('strong').text('单击选择区');
            }
        },function () {
            console.log(data.message)
        },true)
    }


    //选择城市
    $(".map-click").click(function(){
        $(".city-list").hide();
        var dis = $(this).next().attr('data-show');
        if(dis=='block'){
            $(this).next().hide().attr('data-show','none');
            return;
        }
        $(this).next().show().attr('data-show','block');
    });
    $(".city-list").click(function(e){
        var item = e.target;
        var that = $(this);
        that.prev().children('strong').text(item.innerHTML);
        that.hide().attr('data-show','none');
        if($(item).attr('data-id')){
            getShop($(item).attr('data-id'),$(item).attr('data-jingdu'),$(item).attr('data-weidu'),that.attr('data-board'));
            getArea($(item).attr('data-id'),$(item).attr('data-jingdu'),$(item).attr('data-weidu'),that.attr('data-board'));
        }
    });

    $(".map-layer-close").click(function(){
        $(".form-layer").hide();
    });

    $(".form-layer-order,.night-form").click(function(){
        $(".form-layer").show();
    });


    //红包
    $("#bag-right-img").click(function(){
        bagWave();
    });
    /*$("#bag-order08").click(function(){
     bagWave();
     });*/
    function bagWave(){
        $("#bag-order-tel").addClass('tran');
        setTimeout(function(){
            $("#bag-order-tel").removeClass('tran');
        },600);
        $("#bag-order-tel08").addClass('tran08');
        setTimeout(function(){
            $("#bag-order-tel08").removeClass('tran08');
        },600);
    };




});