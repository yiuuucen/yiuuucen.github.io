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


//第一个echart图
var myChart1;
var myChart2;
sysEchart1_data();
function sysEchart1_data(time,value1,value2){

    if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
        myChart1.dispose();
    }

    myChart1 = echarts.init(document.getElementById('barEchart01'));
    
    // myChart1.showLoading({
    //     text: 'loading...',
    //     color: '#2196f3',
    //     textColor: '#2196f3',
    //     maskColor: 'transparent',
    //     zlevel: 0,
    // });
    var arr=["2018/04/24", "2018/04/25", "2018/04/26", "2018/04/27", "2018/04/28", "2018/04/29", "2018/04/30", "2018/05/01", "2018/05/02", "2018/05/03", "2018/05/04", "2018/05/05", "2018/05/06", "2018/05/07", "2018/05/08", "2018/05/09", "2018/05/10", "2018/05/11", "2018/05/12", "2018/05/13", "2018/05/14", "2018/05/15", "2018/05/16", "2018/05/17", "2018/05/18", "2018/05/19", "2018/05/20", "2018/05/21", "2018/05/22", "2018/05/23", "2018/05/24"];
    var data=[17, 51, 4, 8, 2, 0, 0, 0, 3, 1, 2, 0, 0, 2, 1, 0, 4, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 3, 2];
    option = {
          title: {
              text: '总查询量',
              bottom:'0',
              left:'40%',
          },
          tooltip: {
              formatter: '{b}<br/>{c} 次',
              trigger: 'axis',
              axisPointer: {
                  animation: false,
                  type: 'cross',
                  label:{
                      color:"rgba(0,0,0,0.6)",
                      backgroundColor:"rgb(222,222,222)"
                  },
                  lineStyle: {
                      color: '#4baa4f',
                      width: 2,
                      opacity: 0.6
                  },
                  crossStyle: {
                      color: 'rgb(0,0,0)',
                      width: 2,
                      opacity: 0.6,
                      type:"solid"
                  }
              }
          },
          grid: {
              left: '3%',
              right: '3%',
              bottom: '10%',
              top:"3%",
              containLabel: true
          },
          xAxis: {
              type: 'category',
              axisLine: { lineStyle: { color: 'rgba(0,0,0,0.6)' } },
              data: arr,
          },
          yAxis: {
              type: 'value',
              splitLine: { show: false },
              axisLine: { lineStyle: { color: 'rgba(0,0,0,0.6)' } },
          },
          series: [{
              data: data,
              type: 'line',
              itemStyle: {
                  normal:{
                      color: '#2196f3'
                  }
              },
              lineStyle: {
                  normal:{
                      color: '#2196f3'
                  }
              },
          }]
      };
    // 为echarts对象加载数据
    myChart1.setOption(option);
}
sysEchart2_data();
function sysEchart2_data(time){
    if (myChart2 != null && myChart2 != "" && myChart2 != undefined) {
        myChart2.dispose();
    }
    // 基于准备好的dom，初始化echarts图表
    myChart2 = echarts.init(document.getElementById('barEchart02'));

    option = {
        title: {
              text: '分用户查询量',
              bottom:'0',
              left:'40%',
        },
        tooltip: {
            formatter: '{b}：{c} 次',
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '10%',
            top:"3%",
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: { show: false },
            axisLine: { lineStyle: { color: 'rgba(0,0,0,0.6)' } },
        },
        yAxis: {
            type: 'category',
            data: ["", "", "", "", "", "", "", "张三", "Rodney Hood", "刘德华"],
            axisLine: { lineStyle: { color: 'rgba(0,0,0,0.6)' } },
        },
        series: [
            {
                type: 'bar',
                data: ["0", "0", "0", "0", "0", "0", "0", "5","1","100"],
                itemStyle: {
                    normal:{
                        color: '#2196f3'
                    }
                },
                lineStyle: {
                    normal:{
                        color: '#2196f3'
                    }
                },
            }
        ]
    };
    // 为echarts对象加载数据
    myChart2.setOption(option);
}