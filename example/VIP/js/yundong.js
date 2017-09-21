$(document).ready(function() { 
 var length, 
  currentIndex = 0, 
  interval, 
  hasStarted = false, //是否已经开始轮播 
  t = 1000; //轮播时间间隔 
 length = $('.slider-panel').length; 
  
 $('.slider-panel:not(:first)').hide(); 
  
 $('.slider-item:first').addClass('slider-item-selected'); 
  
 $('.slider-page').hide(); 
  
 $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
  stop(); 
  $('.slider-page').show(); 
 }, function() { 
  $('.slider-page').hide(); 
  start(); 
 }); 
 $('.slider-item').hover(function(e) { 
  stop(); 
  var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
  currentIndex = $(this).index(); 
  play(preIndex, currentIndex); 
 }, function() { 
  start(); 
 }); 
 $('.slider-pre').unbind('click'); 
 $('.slider-pre').bind('click', function() { 
  pre(); 
 }); 
 $('.slider-next').unbind('click'); 
 $('.slider-next').bind('click', function() { 
  next(); 
 }); 
 /** 
  * 向前翻页 
  */
 function pre() { 
  var preIndex = currentIndex; 
  currentIndex = (--currentIndex + length) % length; 
  play(preIndex, currentIndex); 
 } 
 /** 
  * 向后翻页 
  */
 function next() { 
  var preIndex = currentIndex; 
  currentIndex = ++currentIndex % length; 
  play(preIndex, currentIndex); 
 } 
 /** 
  * 从preIndex页翻到currentIndex页 
  * preIndex 整数，翻页的起始页 
  * currentIndex 整数，翻到的那页 
  */
 function play(preIndex, currentIndex) { 
  $('.slider-panel').eq(preIndex).fadeOut(200) 
  .parent().children().eq(currentIndex).fadeIn(500); 
  $('.slider-item').removeClass('slider-item-selected'); 
  $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
 } 
 /** 
  * 开始轮播 
  */
 function start() { 
  if(!hasStarted) { 
  hasStarted = true; 
  interval = setInterval(next, t); 
  } 
 } 
 /** 
  * 停止轮播 
  */
 function stop() { 
  clearInterval(interval); 
  hasStarted = false; 
 } 
 //开始轮播 
 start(); 
 }); 




//  <script>
//     window.onload=checkImgs;
//     window.onscroll = throttle(checkImgs);
//     function isInSight(el) {
//         const bound = el.getBoundingClientRect();
//         const clientHeight = window.innerHeight;
//         //如果只考虑向下滚动加载
//         const clientWidth = window.innerWeight;
//         return bound.top <= clientHeight + 100;
//     }
//     function checkImgs() {
//         const imgs = document.querySelectorAll('#four .rg img');
//         Array.from(imgs).forEach(el => {
//             if (isInSight(el)) {
//                 loadImg(el);
//             }
//         })
//     }

//     function loadImg(el) {
//         if (!el.src) {
//             const source = el.dataset.src;
//             el.src = source;
//         }
//     }
//     throttle(checkImgs(), 500);
//     function throttle(fn, mustRun = 500) {
//         const timer = null;
//         let previous = null;
//         return function() {
//             const now = new Date();
//             const context = this;
//             const args = arguments;
//             if (!previous) {
//                 previous = now;
//             }
//             const remaining = now - previous;
//             if (mustRun && remaining >= mustRun) {
//                 fn.apply(context, args);
//                 previous = now;
//             }
//         }
//     }

// </script>
