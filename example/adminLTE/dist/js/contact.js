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

// 筛选弹窗
shaixuan_tan();
function shaixuan_tan(time){
    //导出列表信息接口
    $("#daochu").click(function(){
        // window.location.href="${ctx}/new/download?targetPhone="+targetPhone+"&startTime="+time[0]+"&endTime="+time[1];
    });
    
    

    $("#shaixuan").click(function(e){
        
        if($(".l-con-tanC").is(":hidden")){
            //筛选层显示
            $(".l-con-tanC").css("display","block");
            $("#shaixuan").removeClass("shaixuan-noselect");
            $("#shaixuan").addClass("shaixuan-selected");
            //
            $(".tanCont span").removeAttr("class");
            $(".c-top .pull-right").each(function(){
                var htmlStr=$(this).html();
                $(".tanCont span[val='"+htmlStr+"']").attr("class","tan-select");
            });
        
        }else{
            //筛选层隐藏
             $(".l-con-tanC").css("display","none");
             $("#shaixuan").removeClass("shaixuan-selected");
             $("#shaixuan").addClass("shaixuan-noselect");
        }
    });
    $(".tan-choose span").click(function(e){
        
        if($(this).hasClass("tan-select")){
            $(this).removeClass("tan-select");
        }else{
            //$(".tan-choose span").removeAttr("class");
            $(this).attr("class","tan-select");
        }
    });
    $(".tan-choose2 span").click(function(e){
        
        if($(this).hasClass("tan-select")){
            $(this).removeClass("tan-select");
        }else{
            //$(".tan-choose2 span").removeAttr("class");
            $(this).attr("class","tan-select");
        }
    });
    $(".tan-reset").click(function(e){
        
        $(".tan-choose span").removeAttr("class");
        $(".tan-choose2 span").removeAttr("class");
    });
    $(".tan-qued").click(function(e){
        
        $(".c-top span").remove(".pull-right");
        //获取列表并显示
        showContactList();
        
        $(".l-con-tanC").css("display","none");
        $("#shaixuan").removeClass("shaixuan-selected");
        $("#shaixuan").addClass("shaixuan-noselect");
    });
}
function sortExp(a,b){
    return b.exp-a.exp;
}
function getContantHtml(contact,index,rank){
    var msg='';
    var displayStyle='';
    var exp = Number(contact.exp).toFixed(2);
    //contact.exp=contact.exp.toFixed(2);
    //是否隐藏显示
    if(index==''){
        displayStyle ='style="display:none;"';
    }
    
    if(contact.tag=='重点人员'){
        var name="SE"+contact.name;
        msg +='<li class="list-person zhongdian-person" '+displayStyle+' nameEncVal="'+contact.nameEnc+'" nameVal="'+contact.name+'" rankVal="'+rank+'">'+'<span><font>'+index+'</font>.'+name+'</span>'+'<span>'+contact.tag+'</span>'+'<span>'+contact.type+'</span>'+'<span>'+exp+'</span></li>';
    }else{
        var name="SE"+contact.name.slice(-12);
        msg +='<li class="list-person" '+displayStyle+' nameEncVal="'+contact.nameEnc+'" nameVal="'+contact.name+'" rankVal="'+rank+'">'+'<span><font>'+index+'</font>.'+name+'</span>'+'<span>'+contact.tag+'</span>'+'<span>'+contact.type+'</span>'+'<span>'+exp+'</span></li>';
    }
    return msg;
}
var contactList=[{"exp":0.05010777777777778,"name":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","nameEnc":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","tag":"一般人员","type":"一度"},{"exp":0.05002444444444445,"name":"5cb24c000af6b6fb8b60df9c7049dba5e0fd541f4f3f98dbcd729fe224","nameEnc":"5cb24c000af6b6fb8b60df9c7049dba5e0fd541f4f3f98dbcd729fe224","tag":"一般人员","type":"一度"},{"exp":0.02505388888888889,"name":"189****0796","nameEnc":"5cb24c0b05f0b0f48162dc927244d62afc9759e76aceaead7a44687017","tag":"重点人员","type":"二度"}];
//左侧列表显示
function showContactList(){
    // alert("end");
    //更新有效联系人总数
    if(contactList!=null){
        $('#tit-contactNum').html(""+contactList.length);
    }else{
        $('#tit-contactNum').html(""+0);
    }
    //清空筛选条件
    $(".c-top span").remove(".pull-right");

    //列表排序
    contactList.sort(sortExp);
    var msg='';
    if($(".tan-select").length==0||$(".tan-select").length==4){
        $(".c-top").append('<span class="pull-right">全部人员</span>');
        //获取列表
        var num=0;//序号
        for(var i=0;i<contactList.length;i++){
            num++;
            msg += getContantHtml(contactList[i],num,i+1);
        }
    }else {
        var tag = '';
        var type ='';
        var selectedList=[];
        $(".tan-choose .tan-select").each(function(){
            tag+=','+$(this).html();
            selectedList.push($(this).html());
        });
        $(".tan-choose2 .tan-select").each(function(){
            type+=','+$(this).html();
            selectedList.push($(this).html());
        });
        
        //选中标签更新
        var cTopHmtl = '';
        for(var j=0;j<selectedList.length;j++){
            cTopHmtl +='<span class="pull-right">'+selectedList[j]+'</span>';
            if(j<selectedList.length-1){
                cTopHmtl +='<span class="pull-right">|</span>';
            }
        }
        $(".c-top").append(cTopHmtl);
        
        
        var num=0;//序号
        for(var i=0;i<contactList.length;i++){
            if(tag!='' && tag.indexOf(contactList[i].tag)<0){
                continue;
            }
            
            if(type!='' && type.indexOf(contactList[i].type)<0){
                continue;
            }
            num++;
            msg += getContantHtml(contactList[i],num,i+1);
         }
    }
    $("#firstcontact").html(msg);           
}

//中间关系图
var nodeList=[];
var myChart0;
var myChart1;
var myChart2;
var myChart3;
relationG();
function relationG(timerange) {
    //关系图
    if (myChart0 != null && myChart0 != "" && myChart0 != undefined) {
        myChart0.dispose();
    }
    myChart0 = echarts.init(document.getElementById('barEchart01'));

    // myChart1.showLoading({
    //     text: 'loading...',
    //     color: '#2196f3',
    //     textColor: '#2196f3',
    //     maskColor: 'transparent',
    //     zlevel: 0,
    // });


    var nodes=[{"category":"当前重点人员","exp":1,"name":"189****0796","tag":0,"symbolSize":70,"value":"1.00","label":{"normal":{"show":false}},"isnode":true,"fixed":true,"x":462,"y":474.5},{"category":"一般人员","exp":0.05010777777777778,"name":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","nameEnc":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","tag":1,"symbolSize":22.505388888888888,"value":"0.05","label":{"normal":{"show":false}},"isnode":true},{"category":"一般人员","exp":0.05002444444444445,"name":"5cb24c000af6b6fb8b60df9c7049dba5e0fd541f4f3f98dbcd729fe224","nameEnc":"5cb24c000af6b6fb8b60df9c7049dba5e0fd541f4f3f98dbcd729fe224","tag":1,"symbolSize":22.50122222222222,"value":"0.05","label":{"normal":{"show":false}},"isnode":true},{"category":"重点人员","exp":0.02505388888888889,"name":"18917890796","nameEnc":"5cb24c0b05f0b0f48162dc927244d62afc9759e76aceaead7a44687017","tag":2,"symbolSize":21.252694444444444,"value":"0.03","label":{"normal":{"show":false}},"isnode":true}];
    var links=[{"source":"189****0796","target":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","value":"一度联系人","islink":true},{"source":"189****0796","target":"5cb24c000af6b6fb8b60df9c7049dba5e0fd541f4f3f98dbcd729fe224","value":"一度联系人","islink":true},{"source":"5cb24c060cf1b7fb8960d99b7108b16ad1f3f6d27637953947dbd86e3b","target":"18917890796","value":"二度联系人","islink":true}];
    var categories=[{"name":"当前重点人员","itemStyle":{"normal":{"color":"#2090ec"}}},{"name":"一般人员","itemStyle":{"normal":{"color":"#4a4f67"}}},{"name":"重点人员","itemStyle":{"normal":{"color":"rgb(76,175,80)"}}}]
    option = {
        // tooltip: {
        //     formatter: function (params) {
                
        //         if(params.data.islink){
        //             //判断是否是重点联系人，如果是则显示手机号码
        //             var target = '';
                    
        //             var source = params.data.source;
        //             var target=params.data.target;
        //             if(source.length==11){//如果是手机号要隐去中间4位
        //                 source = "SE"+ source.slice(0,3)+"****"+source.slice(7,11);
        //             }else{
        //                 source="SE"+params.data.source.slice(-12);
        //             } 
                    
        //             if(target.length==11){//如果是手机号要隐去中间4位
        //                 target = "SE"+ target.slice(0,3)+"****"+target.slice(7,11);
        //             }else{
        //                 target="SE"+params.data.target.slice(-12);
        //             } 
                    
        //             return source+" > "+target;
        //         }
        //         else {
                    
        //             if(params.name===targetPhoneNo86){//当前重点人员
        //                 return targetPhoneHide4+": "+params.value;
        //             }else if(params.data.category=='重点人员'){//重点人员
        //                 var name = "SE"+params.name.slice(0,3)+"****"+params.name.slice(7,11);
        //                 return name+": "+params.value;
        //             }else{  //一般人员
        //                 return 'SE'+params.name.slice(-12)+": "+params.value;
        //             }
        //         }
        //     }
        // },
        legend: [{
            selectedMode: 'multiple',
            data: categories.map(function (a) {
                return a.name;
            }),
            /*['一般人员','重点人员'],*/
            textStyle: {
                color: '#ccc'
            },
            top: 10

        }],
        animationDuration:1500,
        animationEasingUpdate:'quinticInOut',
        series : [
            {
                name: '联系人节点',
                type: 'graph',
                layout: 'force',

                force: {
                    repulsion: 150,
                    gravity: 0.1,
                    edgeLength: 70,
                    layoutAnimation: true

                },
                data: nodes,
                links: links,
                categories: categories,
                roam: false,
                draggable:false,
                label: {
                    normal: {
                        position: 'left',
                        formatter: '{b}'
                    }
                },

                lineStyle: {
                    normal: {
                        //curveness影响让节点中的线曲直
                        curveness: 0
                    }

                }
            }
        ]
    };

    myChart0.setOption(option);

}

// 右侧的3个Echart图
myradar()
function myradar(arr){
    if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
        myChart1.dispose();
    }
    myChart1 = echarts.init(document.getElementById('eBox'));


    var arr=[60, 5, 0.30, -100, 1500];
    //雷达图
    option = {
        backgroundColor:'none',
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: []
        },
        radar: [
            {
                indicator: [
                    { text: '总通话' },
                    { text: '工作时段' },
                    { text: '休息时段' },
                    { text: '短通话' },
                    { text: '长通话' }

                ],
                center: ['52%', '54%'],
                radius: 60,
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                name: {
                   // formatter:'',
                    textStyle: {
                        color:'#6292b1'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: [
                            'rgba(98, 146, 177, 0.2)',
                            'rgba(98, 146, 177, 0.4)',
                            'rgba(98, 146, 177, 0.6)',
                            'rgba(98, 146, 177, 0.8)',
                            'rgba(98, 146, 177, 1)'
                        ],
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'

                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },

        ],
        series: [
            {
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed'

                        }
                    },
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                data: [
                    {
                        //value: [60, 5, 0.30, -100, 1500],
                        value: arr,
                        name:"联系人概览",
                        areaStyle: {
                            normal: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }
                ]
            }
        ]
    }
    myChart1.setOption(option);
}
mychar02();
function mychar02(arr){
    if (myChart2 != null && myChart2 != "" && myChart2 != undefined) {
        myChart2.dispose();
    }
    myChart2 = echarts.init(document.getElementById('eBox02'));

    var  arr=[0, 0.65]
    //饼状图
    option = {
        backgroundColor:'none',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}min ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['']
        },
        series: [{
            name: '通话时长',
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: Number(arr[0]).toFixed(2),
//                        value: 2,
                name: '被叫',
                label: {
                    normal: {
                        formatter: '总时长',
                        textStyle: {
                            color: 'rgba(98, 146, 177, 1)',
                            fontSize: 16
                        }
                    }
                },
                tooltip: {
                    show: true
                },
                itemStyle: {
                    normal: {
                        color: '#355078'
                    },
                    emphasis: {
                        color: '#355078'
                    }
                },
                hoverAnimation: false
            },{
                value: Number(arr[1]).toFixed(2),
//                        value: 3,
                name: '主叫',
                label: {
                    normal: {
//                                formatter: '{c}min',
                        formatter: function (params) {
                            return Number(arr[1]+arr[0]).toFixed(2)+'min';
                        },
                        textStyle: {
                            fontSize: 16,
                            color: 'rgba(98, 146, 177, 1)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4298cc'
                    },
                    emphasis: {
                        color: '#4298cc'
                    }
                }

            }]
        }]
    };

    myChart2.setOption(option);

}
mychar03();
function mychar03(arr){
    if (myChart3 != null && myChart3 != "" && myChart3 != undefined) {
        myChart3.dispose();
    }
    myChart3 = echarts.init(document.getElementById('eBox03'));
    var arr=[0, 3];
    //饼状图
    option = {
        backgroundColor:'none',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}次 ({d}%)"
        },
        legend: {
            orient: 'vertical',

            left: 'left',
            data: ['']
        },
        series: [{
            name: '通话频次',
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: arr[0],
                name: '被叫次数',
                label: {
                    normal: {
                        formatter: '总次数',
                        textStyle: {
                            color: 'rgba(98, 146, 177, 1)',
                            fontSize: 16
                        }
                    }
                },
                tooltip: {
                    show: true
                },
                itemStyle: {
                    normal: {
                        color: '#355078'
                    },
                    emphasis: {
                        color: '#355078'
                    }
                },
                hoverAnimation: false
            },{
                value: arr[1],
                name: '主叫次数',
                label: {
                    normal: {
//                                formatter: '{c}次',
                        formatter: function (params) {
                            return Number(arr[1]+arr[0]).toFixed(2)+'次';
                        },
                        textStyle: {
                            fontSize: 16,
                            color: 'rgba(98, 146, 177, 1)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4298cc'
                    },
                    emphasis: {
                        color: '#4298cc'
                    }
                }
            }]
        }]
    };

    myChart3.setOption(option);
};