
// 找到父类中的有class的标签
function getClassName(obj,sName){
    //-->obj是要获取元素的父级
    //-->sName是class名字
    if(document.getElementsByClassName)
    {
        return obj.getElementsByClassName('sName');
    }
    else
    {
        var aTmp = obj.getElementsByTagName('*');
        var aRes=[];
        var arr =[];

        for(var i=0;i<aTmp.length;i++)
        {
            arr = aTmp[i].className.split(' ');
            for (var j=0;j<arr.length;j++)
            {
                if(arr[j] == sName)
                {
                    aRes.push(aTmp[i]);
                }
            }
        }
        return aRes;
    }
}
function  texiao(){
    document.writeln("<script type=\'text/javascript\' color=\'10,11,12\' opacity=\'0.8\' zIndex=\'-100\' count=\'99\' src=\'https://cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js\'><\/script>");
}
texiao();