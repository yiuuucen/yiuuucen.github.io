//banner图效果
function change_banner(num){
    //获取当前显示图片的索引；
    //让下一张图片显示

    var li_index = $(".tup li:visible").index();
    var next_li_index=li_index+1;
    if(next_li_index==$('.tup li').length){
        next_li_index=0
    };
    $('.ann li').removeClass('dActive');
    $('.ann li').eq(next_li_index).addClass('dActive');
    $(".tup li").hide();
    $(".tup li").eq(next_li_index).fadeIn(0);

};


    //轮播初始化图片
    $('.tup li').hide();
    $('.tup li').eq(0).fadeIn(0);
    $('.ann li').removeClass('dActive');
    $('.ann li').eq(0).addClass('dActive');

    //悬浮事件
    var ann_interval=null;

        $('.ann li').mouseover(function(){
            clearInterval(ban_interval);
            clearInterval(ann_interval);
            var an_index=$(this).index();
            $('.ann li').removeClass('dActive');
            $('.ann li').eq(an_index).addClass('dActive');
            $('.tup li').hide();
            $('.tup li').eq(an_index).fadeIn(0);
        })
        $('.ann li').mouseleave(function(){
            clearInterval(ban_interval);
            clearInterval(ann_interval);
            //这个定时器一直忘了清除，导致浪费3个小时！！！
            ann_interval=setInterval('change_banner()',3000);
        })
        var ban_interval=setInterval('change_banner()',3000);


//取得随机颜色
var getRandomColor = function(){
    return  '#' +
        (function(color){
            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : arguments.callee(color);
        })('');
}
//随机颜色作用的nav的hover上
$('.nav ul li a').mouseover(function(){
    $('.nav ul li a:hover').css('color',getRandomColor)
});
$('.nav ul li a').mouseout(function(){
    var This=this;
    setTimeout(function(){
        $(This).css('color','#fff');
    },300)
})
//随机颜色作用的cont的新品边框上
$('.product_next2').mouseover(function(){
    $(this).css('border','1px double '+getRandomColor()+'');
    //alert(getRandomColor);
});
$('.product_next2').mouseout(function(){
    $(this).css('border','1px solid #fff');
})
// 顶部条这个div，点击后回到顶部
$("#returnD").click(function(){
    $('body,html').animate({scrollTop:0},600);
})
window.onscroll = function(){ //绑定scroll事件
    //获取滚动距离
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    // 当滚动条到达600px时，出现出顶部条这个div
    if( t >= 600 ) {
        $('#returnD').css('display','block');
    } else {
        $('#returnD').css('display','none');
    }
}
//personal页面的中tab切换功能
$('.personalYM .mymsg .tab .right').hide();
$('.personalYM .mymsg .left li').attr('class','');
$('.personalYM .mymsg .tab .right').eq(0).show();
$('.personalYM .mymsg .left li').eq(0).attr('class','fActive');
$('.personalYM .mymsg .left li').click(function(){
    //console.log($(this).index())
    $('.personalYM .mymsg .left li').attr('class','');
    $('.personalYM .mymsg .tab .right').hide();
    $('.personalYM .mymsg .left li').eq($(this).index()).attr('class','fActive');
    $('.personalYM .mymsg .tab .right').eq($(this).index()).show();
})

