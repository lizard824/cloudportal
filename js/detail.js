
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };


//修改密码关闭
function chanBlock(e){
    e.style.display = 'block';
}
function chanClose(e){
    e.style.display = 'none';
}

var moDify = document.getElementById('modify');
var canCel = document.getElementById('cancel');
var changeWord = document.getElementById('change-word');

changeWord.onclick = function(){
    chanBlock(moDify);
};
canCel.onclick = function(){
    chanClose(moDify);
};

//修改密码input动画
var moP = document.getElementById('mo-p');
var movP = document.getElementById('mov-p');
var newWord = document.getElementById('new-word');
var conWord = document.getElementById('con-word');
var moSub = document.getElementById('mo-sub');

function moveP(e,a,c){
    e.style.top = a;
    e.style.fontSize = c;
}
newWord.onfocus = function(){
    moveP(moP,'-5px','14px');
    };
    
newWord.onblur = function(){
    if(newWord.value == ''){
       moveP(moP,'20px','16px');            
        };
      chanBj();  
    };

conWord.onfocus = function(){
    moveP(movP,'-5px','14px');
    };
    
conWord.onblur = function(){
    if(conWord.value == ''){
       moveP(movP,'20px','16px');            
        };
    chanBj();
    };

//鼠标滚动
var agent = navigator.userAgent;
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            // console.log("鼠标向下滚动");
            aUl.style.display = 'none';
        } else {
            // console.warn("鼠标向上滚动");
            aUl.style.display = 'block';
        }
    });
} else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            // console.log("鼠标向上滚动");
            aUl.style.display = 'block';
        } else {
            // console.warn("鼠标向下滚动");
            aUl.style.display = 'none';
        }
    }
}


$(window).bind("scroll", function(){ 
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        if(top > 100){
           $('.banner div').css({'opacity':'0','transition':'1.5s all ease'});
        }else{
            $('.banner div').css({'opacity':'1','transition':'1.5s all ease'});
        }
  });
// 导航背景------------------------------------------
var aUl = document.getElementById('xhead');
var twoDiv = document.getElementById('second');

onscroll = function (ev) {
    var ev = ev || event;
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if (top > twoDiv.offsetTop - 65) {
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
    
    // var needHeight = allSpan[0].offsetHeight;
    // console.log(needHeight)
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
            }
            else{
                allUl[this.index].stq = 1;
                allUl[this.index].style.height = 0 + 'px';
                allH2[this.index].style.height ='1.5rem';
                allImg[this.index].src = 'images/up.png';
                allH2[this.index].style.backgroundColor ='#333';
            }
            
        }
    };

//更换图片-----------------------------------------
      var chanSrc = document.getElementById('change_src');
  
    var chanImg = function change(e,a){
    	
    	e.src=a;
    	
    };
    
    chanSrc.onmouseover = function(){

    	chanImg(chanSrc,'images/lo.gif');
    };
    chanSrc.onmouseout = function(){
    	chanImg(chanSrc,'images/logo.png');
    };


//延时导航---------------------------------------------
$('.nav-select .nav_down').hover(function(){
    $(this).find("a:first").css({"transition":"1s all ease"});
},function(){
    $(this).find("a:first").css({"transition":"1s all ease"});
}).trigger("mouseout");
$('.nav-select .nav_down').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
})

// 中部切换------------------------------
var tbUl = document.getElementById('cen_ul');
var tbLi = tbUl.getElementsByTagName('li');
var tbA = tbUl.getElementsByTagName('a'); 
var tbDiv = document.getElementById('cen_right');
var subDiv = tbDiv.getElementsByTagName('div');
var tbspan = tbUl.getElementsByTagName('span');


var allIndex = 0;
 for(var i = 0;i < tbA.length;i++){
 	  tbA[i].index = i;
 	  tbA[i].onclick = function(){
 	  	 for(var i = 0;i < tbA.length;i++){
 	  	 	tbA[i].className = '';
 	  	 	subDiv[i].style.display = 'none';
 	  	 }
 	  	 allIndex = this.index;
 	  	 this.className = 'active';
 	  	 subDiv[this.index].style.display = 'block';
 	  }
 }

$(document).ready(function(){

    $(window).scroll(function () {
                var a = document.getElementById("footer_center").offsetTop;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
                   
                    $('.footer_center').addClass('bottom')
                }else {
                    
                      $('.footer_center').removeClass('bottom')
                      
                }

            });

})