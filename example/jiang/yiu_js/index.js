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
////personal页面的中tab切换功能
//$('.personalYM .mymsg .tab .right').hide();
//$('.personalYM .mymsg .left li').attr('class','');
//$('.personalYM .mymsg .tab .right').eq(0).show();
//$('.personalYM .mymsg .left li').eq(0).attr('class','fActive');
//$('.personalYM .mymsg .left li').click(function(){
//    //console.log($(this).index())
//    $('.personalYM .mymsg .left li').attr('class','');
//    $('.personalYM .mymsg .tab .right').hide();
//    $('.personalYM .mymsg .left li').eq($(this).index()).attr('class','fActive');
//    $('.personalYM .mymsg .tab .right').eq($(this).index()).show();
//})

//商品详情页面中图片的放大镜功能

    $.fn.magnifying = function(){
        var that = $(this),
            $imgCon = that.find('.prodtu'),//正常图片容器
            $Img = $imgCon.find('img'),//正常图片，还有放大图片集合
            $Drag = that.find('.huak'),//拖动滑动容器
            $show = that.find('.bigtu'),//放大镜显示区域
            $showIMg = $show.find('img'),//放大镜图片
            $ImgList = $('#prod-l> ul > li >img'),
            multiple = $show.width()/$Drag.width();

        $imgCon.mousemove(function(e){
            $Drag.css('display','block');
            $show.css('display','block');
            //获取坐标的两种方法
            // var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
            // 	iY = e.clientY - this.offsetTop - $Drag.height()/2,
            var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
                iY = e.pageY - $(this).offset().top - $Drag.height()/2,
                MaxX = $imgCon.width()-$Drag.width(),
                MaxY = $imgCon.height()-$Drag.height();

            /*这一部分可代替下面部分，判断最大最小值
             var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
             DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
             $Drag.css({left:DX+'px',top:DY+'px'});
             $showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

            iX = iX > 0 ? iX : 0;
            iX = iX < MaxX ? iX : MaxX;
            iY = iY > 0 ? iY : 0;
            iY = iY < MaxY ? iY : MaxY;
            $Drag.css({left:iX+'px',top:iY+'px'});
            $showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
            //return false;
        });
        $imgCon.mouseout(function(){
            $Drag.css('display','none');
            $show.css('display','none');
        });

        $ImgList.click(function(){
            var NowSrc = $(this).data('bigimg');
            $Img.attr('src',NowSrc);
            $(this).parent().addClass('tActive').siblings().removeClass('tActive');
        });
    }

    $("#prod-l").magnifying();



//商品详情页面中的tab切换功能
console.log($('.productYM .details .tab div'))
console.log($('.productYM .details .tab ul li'))
var $tabLi=$('.productYM .details .tab ul li');
var $tabDiv=$('.productYM .details .tab div');
//初始化
$tabDiv.eq(0).css('display','block');
$tabLi.eq(0).attr('class','hActive');
$tabLi.click(function(){
    var index=$(this).index();
    $tabDiv.css('display','none');
    $tabDiv.eq(index).css('display','block');
    $tabLi.attr('class','');
    $tabLi.eq(index).attr('class','hActive');
})

