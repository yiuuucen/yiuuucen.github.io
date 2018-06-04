    
    var str=window.location.search;
    if(str.match('mydata=1')){
        $("#bar01").addClass('mActive');
        reliMap();
        setTimeout(function(){
            $("#bar01").click()
            console.log(1)
        },1)  
    }else if(str.match('mydata=2')){
        $("#bar02").addClass('mActive');
        areaMap();
        setTimeout(function(){
            $("#bar02").click()
            console.log(2)
        },1) 
    }else if(str.match('mydata=3')){
        $("#bar03").addClass('mActive');
        trailMap();
        setTimeout(function(){
            $("#bar03").click()
            console.log(3)
        },1) 
    }
    
    //vue的ele日历
    new Vue({
        el:'#app',
        data:{
            morenT:new Date()- 3600 * 1000 * 24 * 30,
            morenT2:new Date(),
            pickerOptions2: {
                disabledDate:function(time) {
                    let curDate = (new Date()).getTime();
                    let three = 186 * 24 * 3600 * 1000;
                    let threeMonths = curDate - three;
                    return time.getTime() > Date.now() || time.getTime() < threeMonths;;
                },
                shortcuts: [{
                    text: '最近一周',
                    onClick:function(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick:function(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick:function(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: ''
        },
        methods:{
            gettime:function(value){
              value0=value[0].slice(0,4)+value[0].slice(5,7)+value[0].slice(8,10);
              value1=value[1].slice(0,4)+value[1].slice(5,7)+value[1].slice(8,10);
              // value[0]=2018-03-06;
              // value0=20180306;             
            },
            formatDate1:function(date){
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            }
        },
        // 钩子函数，页面渲染自动执行
        mounted:function(){
            this.morenT=this.formatDate1(new Date(this.morenT));
            this.morenT2=this.formatDate1(this.morenT2);
        }

    });



    $("#bar01").click(function(){
      $(this).addClass('mActive');
      $("#bar02").removeClass('mActive');
      $("#bar03").removeClass('mActive');
      $("#barEchart01").css("display","block");
      $("#barEchart02").css('display','none').children().remove();
      $("#barEchart03").css('display','none').children().remove();
      reliMap();
    })
    $("#bar02").click(function(){
      $(this).addClass('mActive');
      $("#bar01").removeClass('mActive');
      $("#bar03").removeClass('mActive');
      $("#barEchart02").css("display","block");
      $("#barEchart01").css('display','none').children().remove();
      $("#barEchart03").css('display','none').children().remove();
       areaMap();
    })
    $("#bar03").click(function(){
      $(this).addClass('mActive');
      $("#bar01").removeClass('mActive');
      $("#bar02").removeClass('mActive');
      $("#barEchart03").css("display","block");
      $("#barEchart01").css('display','none').children().remove();
      $("#barEchart02").css('display','none').children().remove();
      trailMap();
    })

    // 热力图
    var myChart1;
    var myChart2;
    var myChart3;
    
    function reliMap(){
        if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
            myChart1.dispose();
        }
        // 基于准备好的dom，初始化echarts图表
        myChart1 = echarts.init(document.getElementById('barEchart01'));

        points=[[121.42722,31.21944,1],[121.42167,31.21278,1],[121.42342,31.22018,1],[121.42167,31.21278,1],[121.412064,31.214897,1],[121.41192,31.21782,1],[121.42402,31.20622,1],[121.42228,31.20025,1],[121.43356,31.19635,1],[121.43356,31.19635,1],[121.42167,31.21278,1],[121.42722,31.21944,1],[121.43583,31.20778,1],[121.42722,31.21944,1],[121.43806,31.21681,1],[121.4155556,31.22055556,1],[121.43332,31.21072,1],[121.4187,31.19832,1],[121.432822,31.220543,1],[121.43806,31.21681,1],[121.42722,31.21944,1],[121.432822,31.220543,1],[121.43806,31.21681,1],[121.412064,31.214897,1],[121.42722,31.21944,1],[121.42402,31.20622,1],[121.412064,31.214897,1],[121.4155556,31.22055556,1],[121.42402,31.20622,1],[121.4155556,31.22055556,1],[121.4155556,31.22055556,1],[121.407074,31.214736,1],[121.42167,31.21278,1],[121.417482,31.227097,1],[121.42342,31.22018,1],[121.42167,31.21278,1],[121.42722,31.21944,1],[121.6328,31.30666,1],[121.41389,31.20528,1],[121.4155556,31.19305556,1],[121.4122222,31.21194444,1],[121.43332,31.21072,1],[121.43332,31.21072,1],[121.432822,31.220543,1],[121.4122222,31.21194444,1],[121.43306,31.22417,1],[121.42167,31.21278,1],[121.412064,31.214897,1],[121.4288611,31.21716667,1],[121.42722,31.21944,1],[121.42722,31.21944,1],[121.4288611,31.21716667,1],[121.42722,31.21944,1],[121.4288611,31.21716667,1]];
        option = {
            animation: false,
            bmap: {
                center: [121.477208, 31.23152],
                zoom: 10,
                roam: 'move'

            },
            visualMap: {
                show: false,
                top: 'top',
                min: 0,
                max: 5,
                seriesIndex: 0,
                calculable: true,
                inRange: {
                    color: ['blue', 'blue', 'green', 'yellow', 'red']
                }
            },
            series: [{
                type: 'heatmap',
                coordinateSystem: 'bmap',
                data: points,
                pointSize: 5,
                blurSize: 6
            }]
        };
        myChart1.setOption(option);
        // 添加百度地图插件
        var bmap = myChart1.getModel().getComponent('bmap').getBMap();

        //变颜色
        bmap.setMapStyle({style:'grayscale'});//灰色皮肤
        bmap.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP
            ]
        }));
    }

    // 活动区域图
    function areaMap(){

        var map = new BMap.Map("barEchart02");    // 创建Map实例
        map.centerAndZoom("上海", 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));     
        map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        var styleJson=[
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": {
                                "lightness": 10,
                                "saturation": -100
                            }
                        },       
                      ]
         map.setMapStyle({styleJson:styleJson});

        var pt1 = new BMap.Point(121.339515,31.29522);
        var pt2 = new BMap.Point(121.675266,31.250775);
        var pt3 = new BMap.Point(121.373435,31.033682);

        //开始添加覆盖

        //--第一个圆居住地
        var circle1 = new BMap.Circle(pt1,7000,{strokeColor:"#237cc8",
            strokeWeight:2,
            fillColor:"#237cc8",
            strokeOpacity:0.9,
            fillOpacity: 0.3
        });
        //增加圆形
        map.addOverlay(circle1);

        //添加图标
        var myIcon1 = new BMap.Icon("dist/img/old/location1.png", new BMap.Size(80,43),{
            anchor: new BMap.Size(40, 43)
        });
        var marker1 = new BMap.Marker(pt1,{icon:myIcon1});  // 创建标注
        map.addOverlay(marker1);

        //--第二个圆工作地
        var circle2 = new BMap.Circle(pt2,7000,{strokeColor:"#237cc8",
            strokeWeight:2,
            fillColor:"#237cc8",
            strokeOpacity:0.9,
            fillOpacity: 0.3
        });
        //增加圆形
        map.addOverlay(circle2);

        //添加图标
        var myIcon2 = new BMap.Icon("dist/img/old/location1.png", new BMap.Size(80,43),{
            anchor: new BMap.Size(40, 43)
        });
        var marker2 = new BMap.Marker(pt2,{icon:myIcon2});  // 创建标注
        map.addOverlay(marker2);

        //--第三个圆
        var circle3 = new BMap.Circle(pt3,7000,{strokeColor:"#237cc8",
            strokeWeight:2,
            fillColor:"#237cc8",
            strokeOpacity:0.9,
            fillOpacity: 0.3
        });
        //增加圆形
        map.addOverlay(circle3);

        //添加图标
        var myIcon3 = new BMap.Icon("dist/img/old/location1.png", new BMap.Size(80,43),{
            anchor: new BMap.Size(40, 43)
        });
        var marker3 = new BMap.Marker(pt3,{icon:myIcon3});  // 创建标注
        map.addOverlay(marker3);


    /////////////////////////////////////////////////////////////////////////

        //---给三个圆添加文字
        //居住地
        function opts1(){
            var opts = {
                position : pt1,    // 指定文本标注所在的地理位置
                offset   : new BMap.Size(0, -33)    //设置文本偏移量
            };
            var label = new BMap.Label("区域一", opts);  // 创建文本标注对象
            label.setStyle({
                color : "#fff",
                background:"#2196f3",
                fontSize : "10px",
                height : "15px",
                lineHeight : "15px",        
                border:"none"
            });
            map.addOverlay(label);
        }
        opts1();
        function opts2(){
            var opts = {
                position : pt2,    // 指定文本标注所在的地理位置
                offset   : new BMap.Size(0, -33)    //设置文本偏移量
            };
            var label = new BMap.Label("区域二", opts);  // 创建文本标注对象
            label.setStyle({
                color : "#fff",
                background:"#2196f3",
                fontSize : "10px",
                height : "15px",
                lineHeight : "15px",        
                border:"none"
            });
            map.addOverlay(label);
        }
        opts2();
        function opts3(){
            var opts = {
                position : pt3,    // 指定文本标注所在的地理位置
                offset   : new BMap.Size(0, -33)    //设置文本偏移量
            };
            var label = new BMap.Label("区域三", opts);  // 创建文本标注对象
            label.setStyle({
                color : "#fff",
                background:"#2196f3",
                fontSize : "10px",
                height : "15px",
                lineHeight : "15px",        
                border:"none"
            });
            map.addOverlay(label);
        }
        opts3();

    }
////////////////////////////////////////////////////////////////////////
    // 轨迹地图

    function mydata(str){
        var n,m;
        // if(str.indexOf("，")>=0){
        //     str=str.replace(/，/ig,',');
        // }
        str=str.replace(/，/ig,',');
        n=str.split(",")[0];
        m=str.split(",")[1];
        return [n,m]
    }
    function trailMap(){
        
        var arr1=['121.30502,31.301144','121.420578,31.233486','121.348714,31.16034','121.398157,31.103958','121.330317,30.994066','121.123922,31.106432'];
       
       
        function change(arr){
            for(var i=0;i<arr.length;i++){
                if(arr[i]==''){
                    for(var j=i+1;j<arr.length;j++){
                        if(arr[j]!=''){
                            arr[i]=arr[j]
                            break;
                        }
                    }
                }
            }
            for(var i=arr.length-1;i>=0;i--){
                if(arr[i]==''){
                    for(var j=i-1;j>=0;j--){
                        if(arr[j]!=''){
                            arr[i]=arr[j]
                            break;
                        }
                    }
                }
            }
            return arr;
        }
        change(arr1);
        
        num1=arr1[0];
        num2=arr1[1];
        num3=arr1[2];
        num4=arr1[3];
        num5=arr1[4];
        num6=arr1[5];

        if (myChart3 != null && myChart3 != "" && myChart3 != undefined) {
            myChart3.dispose();
        }
        myChart3 = echarts.init(document.getElementById('barEchart03'));
            
            var bmap = {
                
                roam: true,
                mapStyle: {
                    styleJson: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": {
                            "lightness": 10,
                            "saturation": -100
                        }
                    }]
                }
            }

        var res=[
            [{coord:[mydata(num1)[0],mydata(num1)[1]]},{coord:[mydata(num2)[0],mydata(num2)[1]]}],
            [{coord:[mydata(num2)[0],mydata(num2)[1]]},{coord:[mydata(num3)[0],mydata(num3)[1]]}],
            [{coord:[mydata(num3)[0],mydata(num3)[1]]},{coord:[mydata(num4)[0],mydata(num4)[1]]}],
            [{coord:[mydata(num4)[0],mydata(num4)[1]]},{coord:[mydata(num5)[0],mydata(num5)[1]]}],
            [{coord:[mydata(num5)[0],mydata(num5)[1]]},{coord:[mydata(num6)[0],mydata(num6)[1]]}]
        ];
        

        //根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
        var pointArray=new Array();
        pointArray[0] = new BMap.Point(mydata(num1)[0],mydata(num1)[1]); // 创建坐标
        pointArray[1] = new BMap.Point(mydata(num2)[0],mydata(num2)[1]); // 创建坐标
        pointArray[2] = new BMap.Point(mydata(num3)[0],mydata(num3)[1]); // 创建坐标
        pointArray[3] = new BMap.Point(mydata(num4)[0],mydata(num4)[1]); // 创建坐标
        pointArray[4] = new BMap.Point(mydata(num5)[0],mydata(num5)[1]); // 创建坐标
        pointArray[5] = new BMap.Point(mydata(num6)[0],mydata(num6)[1]); // 创建坐标
      

        var color = ['#237cc8', '#f4a942'];
        var series = [];
        var series2 = [];

        series=[
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[0],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: res
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: "triangle",
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: color[0],
                        width: 3,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data:res
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                     return val[2] / 8;
                },
                showEffectOn: 'render',
                itemStyle: {
                    normal: {
                        color: color[0]
                    }
                },
                data : [{value:[mydata(num1)[0],mydata(num1)[1],80]},{value:[mydata(num2)[0],mydata(num2)[1],80]},{value:[mydata(num3)[0],mydata(num3)[1],80]},{value:[mydata(num4)[0],mydata(num4)[1],80]},{value:[mydata(num5)[0],mydata(num5)[1],80]},{value:[mydata(num6)[0],mydata(num6)[1],80]}]    
            },
        ]


        option ={
            bmap:bmap,
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'bmap',
                label: {
                    emphasis: {
                        show: true
                    }
                },
                roam: true,
                zoom:1,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        }

        myChart3.setOption(option);
        var bmap = myChart3.getModel().getComponent('bmap').getBMap();
        bmap.setViewport(pointArray);
    }
