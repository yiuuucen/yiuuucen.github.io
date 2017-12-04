//banner图效果
function change_banner(){
    //获取当前显示图片的索引；
    //让下一张图片显示
    var li_index=$(".tup li:visible").index();
    var next_li_index=li_index+1;
    if(next_li_index==4){
        next_li_index=0
    };
    $('.ann li').removeClass('dActive');
    $('.ann li').eq(next_li_index).addClass('dActive');
    $(".tup li").hide();
    $(".tup li").eq(next_li_index).fadeIn();

};
$(function(){
    //轮播初始化图片
    $('.tup li').hide();
    $('.tup li').eq(0).fadeIn();
    $('.ann li').removeClass('dActive');
    $('.ann li').eq(0).addClass('dActive');

    //悬浮事件
    var an_interval=setTimeout(function(){
        $('.ann li').mouseover(function(){
            clearInterval(ban_interval);
            clearInterval(an_interval);
            var an_index=$(this).index();
            $('.ann li').removeClass('dActive');
            $('.ann li').eq(an_index).addClass('dActive');
            $('.tup li').hide();
            $('.tup li').eq(an_index).fadeIn();
        });
        $('.ann li').mouseout(function(){
            clearInterval(an_interval);
            clearInterval(ban_interval);
            setInterval('change_banner()',3000);
        })
        var ban_interval=setInterval('change_banner()',3000);
    },1000)

})