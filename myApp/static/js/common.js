//$(function () {
//    //判断是否宽屏
//    var winWide = window.screen.width;
//    alert(winWide);
//    var wideScreen = false;
//    if (winWide <= 800) {//1024及以下分辨率
//        $("#css").attr("href", "Styles/Style1.css");
//        alert('小屏');
//    } else {
//        $("#css").attr("href", "Styles/Style.css");
//        alert('大屏');
//        wideScreen = true; //是宽屏
//    }
//})

// 日历范围
laydate.render({elem: '#date',range: '~'});
laydate.render({elem: '#date-phone',range: '~'});

// 通用搜索
$('#search,#search_desk').click(function(){
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
      //TODO
      var data = $('.search-form').serialize();
    }else{
      var data = $('#desk_search_form').serialize();
    }
    window.location.href = '?'+data;
})


$(".nav-toggle").click(function () {
	$(this).parent().toggleClass("toggle")
});

$(".tabs a").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
});


$('#select').on('change', function(){
    data = $(this).children('option:selected').attr('data')
    $('#cause').val(data)
});

//$('.Dropdown').hover(function(){
//    $(this).css("background","#125aa4");
//})
// window.onload=function(){
//     (function(obj){
//         obj.win= {

//             loopFun: function (el, val, bg, color, textColor, fontSize, size, r, time, easing) {
//                 var si = r + size / 2;
//                 var xy = r + size;
//                 if (val < 0 || val > 100) {
//                     return alert('请输入0~100之间的数')
//                 }
//                 var paper = Raphael(el, (r + size) * 2, (r + size) * 2);
//                 paper.circle(xy, xy, r).attr({
//                     'stroke-width': size,
//                     stroke: bg
//                 });
//                 paper.customAttributes.arc = function (val) {
//                     var v = 360 * val / 100,
//                         s = -180,
//                         e = s + v,
//                         x = xy,
//                         y = xy,
//                         rad = Math.PI / 180,
//                         x1 = x + r * Math.sin(-s * rad),
//                         y1 = y + r * Math.cos(-s * rad),
//                         x2 = x + r * Math.sin(-e * rad),
//                         y2 = y + r * Math.cos(-e * rad),
//                         path = [
//                             ['M', x1, y1],
//                             ['A', r, r, 0, +(e - s > 180), 1, x2, y2]
//                         ];
//                     return {
//                         path: path
//                     };
//                 };
//                 var an = paper.path().attr({
//                     'stroke-width': size,
//                     stroke: color,
//                     arc: 0.01
//                 });
//                 an.animate({
//                     stroke: color,
//                     arc: val
//                 }, time, easing);
//                 setTimeout(function () {
//                     if (val == 100) {
//                         paper.circle(xy, xy, r).attr({
//                             'stroke-width': size,
//                             stroke: color
//                         });
//                     }
//                 }, time);
//                 paper.customAttributes.txt = function (val) {
//                     return {
//                         text: Math.floor(val * 100) / 100 + '元'
//                     }
//                 };
//                 var l = paper.text(xy, xy).attr({
//                     txt: 0,
//                     'fill': textColor,
//                     'font-size': fontSize,
//                     'font-weight': 700
//                 });
//                 l.animate({
//                     txt: val
//                 }, time);
//             },
//         }
//     })(window);
//     win.loopFun($('.div1')[0],60,'#ccc','#f9c43e','#f9c43e','15px',6,35,1000,'bounce');
//     win.loopFun($('.div2')[0],88.88,'#ccc','#2d91dd','#2d91dd','15px',6,35,1000,'back-out');



//     //派出所
//     jQuery(document).ready(function(){
//         var accordionsMenu = $('.cd-accordion-menu');

//         if( accordionsMenu.length > 0 ) {

//             accordionsMenu.each(function(){
//                 var accordion = $(this);
//                 //detect change in the input[type="checkbox"] value
//                 accordion.on('change', 'input[type="checkbox"]', function(){
//                     var checkbox = $(this);
//                     console.log(checkbox.prop('checked'));
//                     ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:black;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:none;').slideUp(300);
//                 });
//             });
//         }
//     });
// }


function previmg(e){
    var motai = document.getElementById('mo');
    var moimg = document.getElementById("moimg");
    var caption = document.getElementById("caption");
    motai.style.display="block";
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){
      moimg.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
      moimg.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = e.value;
    }else{
      moimg.src = e.src;
    }
    caption.innerHTML = e.alt;
    var span=document.getElementById("close");
    span.onclick=function(){
    motai.style.display="none";
   }
  }

// 移动端 添加对象 确定按钮
function addUseObjPhone(){
    var userName = $('input[name="userName-p"]').val();
    var userCard = $('input[name="userCard-p"]').val();
    var phone = $('input[name="userPhone-p"]').val();
    console.log(userName, userCard, phone);
    var s = '<li></li>'
    $('.disnone tian userlist').append()
  }