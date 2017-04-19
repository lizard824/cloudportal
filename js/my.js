// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};
//动画-------------------------------------------
//  var anMite = document.getElementById('animat');
//  var anClos = document.getElementById('anclose');
//  var naImg = document.getElementById('animite');

// setTimeout(function(){
//     anMite.style.opacity=0;
//     anMite.style.zIndex=0;
//     naImg.style.opacity=0;
// },5650);

// var anClose = function(e){
//      e.style.display = 'none';
// };

// anClos.onclick = function(){
//      anClose(anMite);
// };

//鼠标滚动
var agent = navigator.userAgent;
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {          
            aUl.style.display = 'none';
        } else {           
            aUl.style.display = 'block';
        }
    });
} else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {           
            aUl.style.display = 'block';
        } else {           
            aUl.style.display = 'none';
        }
    }
}
$(window).bind("scroll", function(){
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        if(top > 100){
           $('.banner_first img').css({'opacity':'0','transition':'1.5s all ease'});
        $('.banner_first span').css({'opacity':'0','transition':'1.5s all ease'});
        }else{
            $('.banner_first img').css({'opacity':'1','transition':'1.5s all ease'});
            $('.banner_first span').css({'opacity':'1','transition':'1.5s all ease'});
        }
  });
// 导航背景------------------------------------------
var aUl = document.getElementById('xhead');
var twoDiv = document.getElementById('second');
onscroll = function (ev) {
    var ev = ev || event;
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > twoDiv.offsetTop - 65 ) {
        aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
        changeWord.style.backgroundColor = 'rgba(0,0,0,0.3)';
    } else {
        aUl.style.backgroundColor = 'rgba(0,0,0,0)';
        changeWord.style.backgroundColor = 'rgba(0,0,0,0)';
    }
};
//移动端导航事件-------------------------------------
var nav_ul = document.getElementById('xnav_ul');
var phone_open = document.getElementById('ph_open');
var ntrn = true;
nav_ul.style.transition = '0.5s all ease';
var h = document.body.clientHeight ;
var w = document.body.clientWidth ;
var phOpen = function phshow(e,a) {
    if (ntrn == true) {
        e.style.height = 'auto';
        a.style.display='block';
        a.style.height= h+'px';
        ntrn = false
    } else {
        e.style.height = 0;
        a.style.display='none';
        ntrn = true
        a.style.height='100%';
    }
};
phone_open.onclick = function () {
    phOpen(nav_ul,phonbj)   
}
//移动端下拉菜单-----------------------------------
var allUl    =  xnav_ul.getElementsByTagName('div');
var allH2    =  xnav_ul.getElementsByTagName('li');
var allSpan  =  xnav_ul.getElementsByTagName('span');
var allImg   =  xnav_ul.getElementsByTagName('img');
//让所有的显示 
for(var i = 0; i < allUl.length; i++){
    allUl[i].style.display = 'block';
    };
//取到 一个ui的height
    allUl[0].style.height = 'auto';
    allUl[0].style.height = '0';
for(var i = 0;i < allH2.length;i ++){
    allUl[i].stq = 1;
    allUl[i].style.transition = '1s all ease';
    allH2[i].index = i;
  allH2[i].onclick = function(){
//没点击 的时候
for(var i = 0;i < allH2.length;i++){
 if(i == this.index)continue;
    allUl[i].stq = 1;
    allUl[i].style.height = 0;
    allH2[i].style.backgroundColor ='#333';
    allImg[i].src = 'images/up.png';
    }
//点击的
 if(allUl[this.index].stq == 1){
    allUl[this.index].stq = 2;
    allUl[this.index].style.height ='auto';
    allH2[this.index].style.height ='auto';
    allImg[this.index].src = 'images/down.png';
    allH2[this.index].style.backgroundColor ='#464646';
}else{
    allUl[this.index].stq = 1;
    allUl[this.index].style.height = 0 + 'px';
    allH2[this.index].style.height ='1.5rem';
    allImg[this.index].src = 'images/up.png';
    allH2[this.index].style.backgroundColor ='#333';
    }          
  }
};
//更换图片logo小动画-----------------------------------------
var chanSrc = document.getElementById('change_src');
var chanImg = function change(e, a) {
    e.src = a;
};
chanSrc.onmouseover = function () {
    chanImg(chanSrc, 'images/lo.gif');
};
chanSrc.onmouseout = function () {
    chanImg(chanSrc, 'images/logo.png');
};
// 轮播图
var tabUl = document.getElementById('tab_ul');
var allInput = tabUl.getElementsByTagName('li');
var allSpan = tabUl.getElementsByTagName('span');
var tabFirst = document.getElementById('first');
var allDiv = tabFirst.getElementsByTagName('div');

var allIndex = 0;
var timer = null;
time();
first.onmouseover = function () {
    clearInterval(timer);
};
first.onmouseout = function () {
    time();
}
for (var i = 0; i < allInput.length; i++) {
    allInput[i].index = i; //记录值
    allInput[i].onclick = function () {
        for (var i = 0; i < allInput.length; i++) {
            allInput[i].className = '';
            allDiv[i].style.display = 'none';
        }
        allDiv[this.index].style.display = 'block';
        allInput[this.index].className = 'active';
        allIndex = this.index;
    }
};
function startMove() {
    for (var i = 0; i < allInput.length; i++) {
        allInput[i].className = '';
        allDiv[i].style.display = 'none';
    }
    allDiv[allIndex].style.display = 'block';
    allInput[allIndex].className = 'active';
}
function time() {
    timer = setInterval(function () {
        allIndex++;
        if (allIndex == allInput.length)allIndex = 0;
        startMove();
    }, 3000);
}
//pc延时导航---------------------------------------------
$('.nav-select .nav_down').hover(function(){
    $(this).find("a:first").css({"transition":"1s all ease"});
},function(){
    $(this).find("a:first").css({"transition":"0s all ease"});
}).trigger("mouseout");
$('.nav-select .nav_down').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
})
//第四屏动画-------------------------------------------
var ulWidth = $('#forth_ul li').width();
function por() {
    if ($(window).width() > 1349) {
        ulWidth = 440;
        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {
            console.log($("#forth_ul")[0].offsetLeft);
            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }
    else if ($(window).width() == 1349) {
        ulWidth = 380;
        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {
            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }
    else if ($(window).width() < 1349) {
        ulWidth = $('#forth_ul li').width() + parseInt($('#forth_ul li').css('marginLeft'));
        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {

            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }
};
//点击事件
if($('.oone').length > 3){
$(".onleft").click(function () {
    por()
  })
$(".onright").click(function () {
    $('.forth_ul').css('left', '-=' + ulWidth).stop().find(".oone:last-child").prependTo(".forth_ul").parent().stop().animate({left: '+=' + ulWidth}, 1000, function () {})
  });
}else{};
//图标事件----------------------------------------------
var openLi  = document.querySelectorAll('.serli');
var openDiv =  document.querySelectorAll('.open-div');
var allDot  =  document.querySelectorAll('.ol-dot');
var allP    = document.querySelectorAll('.seve-title');
var allNav  = document.querySelectorAll('.serve-ul');
var openImg = document.querySelectorAll('.ser-up');
//让所有的显示 
for(var j = 0; j < openLi.length; j ++){
    openDiv[i].style.display = 'block';
    };
for(var j = 0;j < openLi.length;j ++){
    openLi[j].stq   = 1;
    openDiv[j].style.transition = '0.5s all ease';
    openLi[j].index = j;
  openLi[j].onclick = function(){        
//没点击时
for(var j = 0;j < openLi.length;j++){
    if(j == this.index)continue;
        openLi[j].stq = 1;
        openDiv[j].style.height = 0;
        openDiv[j].style.opacity = 0;
        openImg[j].src = 'images/up.png';
        allDot[j].style.left = openLi[this.index].offsetWidth/2 +openLi[this.index].offsetLeft -allDot[this.index].offsetWidth/2 + 'px';
      }
//点击的
if(openLi[this.index].stq == 1){
    openLi[this.index].stq = 2;
    openDiv[this.index].style.height = allP[this.index].offsetHeight +allDot[0].offsetHeight + 'px';
    openDiv[this.index].style.opacity = 1;
    openDiv[this.index].style.top = openLi[this.index].offsetHeight + openLi[this.index].offsetTop + 'px';
    allDot[this.index].style.left = openLi[this.index].offsetWidth/2 +openLi[this.index].offsetLeft -allDot[this.index].offsetWidth/2 + 'px';
    openImg[this.index].src = 'images/down.png';
        if( document.body.clientWidth > 759 ) {
            for(var j=0;j<allNav.length;j++){
                allNav[j].style.transition = '0.5s all ease';
            if(this.index<=4){
                allNav[0].style.height = allP[this.index].offsetHeight + openLi[this.index].offsetHeight +allDot[0].offsetHeight+ 'px';
                }else{
                 allNav[0].style.height = openLi[this.index].offsetHeight + 'px';
                }
            if(this.index>4 && this.index<10){
                allNav[1].style.height = allP[this.index].offsetHeight + openLi[this.index].offsetHeight+allDot[0].offsetHeight + 'px';
                }else{
                allNav[1].style.height = openLi[this.index].offsetHeight + 'px';
                }     
            }
         }else{
            return;
            }
}else{
    openLi[this.index].stq = 1;
    openDiv[this.index].style.height = 0;
    openDiv[this.index].style.opacity = 0;
    openDiv[this.index].style.top = openLi[this.index].offsetHeight + openLi[this.index].offsetTop + 'px';
    allDot[this.index].style.left =openLi[this.index].offsetWidth/2 +openLi[this.index].offsetLeft -allDot[this.index].offsetWidth/2 + 'px';
    openImg[this.index].src = 'images/up.png';
    if( document.body.clientWidth > 759){
        for(var j=0;j<allNav.length;j++){
            allNav[j].style.height = openLi[this.index].offsetHeight + 'px';
            } 
        }else{
            return;
          }
    }         
  }
};
//地图------------------------------------------
var myChart = echarts.init(document.getElementById('map-cen'));
var latlong = {};
latlong.AD = {'latitude':38, 'longitude':-121};
latlong.AE = {'latitude':41, 'longitude':-87};
latlong.AF = {'latitude':36.31, 'longitude':-75.13};
latlong.AI = {'latitude':39.52, 'longitude':-74.81};
latlong.AL = {'latitude':33.2, 'longitude':-87.5};
latlong.AM = {'latitude':30.24, 'longitude':-91.06};
latlong.FR = {'latitude':50.02, 'longitude':8.34};
latlong.MU = {'latitude':18.56, 'longitude':72.51};
latlong.SI = {'latitude':1.22, 'longitude':103.45};
latlong.HO = {'latitude':22.17, 'longitude':114.08};
latlong.BJ = {'latitude':39.9, 'longitude':116.3};
latlong.SY = {'latitude':41.48, 'longitude':123.25};
latlong.TJ = {'latitude':39.1, 'longitude':117.1};
latlong.WH = {'latitude':29.58, 'longitude':113.53};

var mapData = [
{'code':'AD' , 'name':'N.California', 'value':658260, 'color':'#eea638'},
{'code':'AE' , 'name':'Chicago', 'value':615988, 'color':'#d8854f'},
{'code':'AF' , 'name':'Reston', 'value':680193, 'color':'#de4c4f'},
{'code':'AI' , 'name':'N.Virginia', 'value':564561, 'color':'#86a965'},
{'code':'AL' , 'name':'Raleigh', 'value':600236, 'color':'#d8854f'},
{'code':'AM' , 'name':'Essen', 'value':605732, 'color':'#8aabb0'},
{'code':'FR' , 'name':'Frankfurt', 'value':1905732, 'color':'#8aabb0'},
{'code':'MU' , 'name':'Mumbai', 'value':605732, 'color':'#8aabb0'},
{'code':'SI' , 'name':'Singapore', 'value':605732, 'color':'#eea638'},
{'code':'HO' , 'name':'Hongkong', 'value':605732, 'color':'#8aabb0'},
{'code':'BJ' , 'name':'Beijing', 'value':105732, 'color':'#d8854f'},
{'code':'SY' , 'name':'Shenyang', 'value':105732, 'color':'#8aabb0'},
{'code':'TJ' , 'name':'Tianjin', 'value':105732, 'color':'#86a965'},
{'code':'WH' , 'name':'Wuhan', 'value':105732, 'color':'#86a965'}
];

var max = -Infinity;
var min = Infinity;
mapData.forEach(function (itemOpt) {
    if (itemOpt.value > max) {
        max = itemOpt.value;
    }
    if (itemOpt.value < min) {
        min = itemOpt.value;
    }
});
option = {
    baseOption:{
    backgroundColor: '#e8f9ff',
    title : {},
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name ;
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: max,
        inRange: {
            symbolSize: [6, 60]
        }
    },
    geo: {
        name: 'World Population (2010)',
        type: 'map',
        map: 'world',
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#67d9fb',
                borderColor: '#12c9ff'
            },
            emphasis: {
                areaColor: '#36cffd'
            }
        }
    },
    series : [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: mapData.map(function (itemOpt) {
                return {
                    name: itemOpt.name,
                    value: [
                        latlong[itemOpt.code].longitude,
                        latlong[itemOpt.code].latitude,
                        itemOpt.value
                    ],
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: itemOpt.color
                        }
                    }
                };
            })
        }
    ]
 },
 media:[
        {
            query:{
                minWidth:1200
            },
            option:{
                legend:{
                    right:'center',
                    bottom: 0
                },
               grid:{
                left:'center',
                top:'center',
               }
            }
        },
          {
            query:{
               maxWidth:1199,
               minWidth:990
            },
            option:{
                legend:{
                    right:'center',
                    bottom: 0
                },
                grid:{
                left:'center',
                top:'center'
               }
            }
        },
        {
            query:{
                maxWidth:989,
                minWidth:760
            },
            option:{
                legend:{
                    right:'center',
                    bottom: 0
                },
                grid:{
                left:'center',
                top:'center'
               }
            }
        },
         {
            query:{
                maxWidth:759
            },
            option:{
                legend:{
                    right:'center',
                    bottom: 0
                },
                grid:{
                left:'center',
                top:'center'
               }
            }
        }
    ]
}
window.onresize = myChart.resize;   
myChart.setOption(option);
// 是否在当前屏---------------------------------
$(document).ready(function () {
    $(window).scroll(function () {
        var a = document.getElementById("cen_right").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
            $('.cen_right').addClass('opta')
        } else {
            $('.cen_right').removeClass('opta')
        }
    });
$(window).scroll(function () {
        var a = document.getElementById("cen_left").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height()) - 100) {
            $('.th_right').addClass('ancen')
            $('#cen_left').addClass('ancen')
            $('.cen_left').addClass('ancen')
        } else {
            $('.cen_left').removeClass('ancen')
            $('.th_right').removeClass('ancen')
            $('#cen_left').removeClass('ancen')    
        }
    });
$(window).scroll(function () {
        var a = document.getElementById("footer_center").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {

            $('.footer_center').addClass('bottom')
        } else {

            $('.footer_center').removeClass('bottom')
        }
    });
});

