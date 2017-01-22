
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };

// 登录跳转
 function logHref(e){
    window.open(e);
 }

var logCli = document.getElementById('login');
logCli.onclick = function(){
    logHref('login.html',"_self");
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

function chanBj(){
    if(newWord.value != '' && conWord.value != ''){
       moSub.style.backgroundColor = '#bee0f3';
       moSub.style.color = '#fff'; 
       moSub.style.border = 'none'; 
       moSub.disabled = '';
    }else{
       moSub.style.backgroundColor = '#fff';
       moSub.style.color = '#6a6a6a'; 
       moSub.style.border = '1px solid #b4d5e3';
       moSub.disabled = 'disabled';    
    }
};

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

var pullDown = document.getElementById("poll_down");

var devSer = document.getElementById('devser');

var clicDown = document.getElementById('clic_down');
var devDown = document.getElementById('device');

var changeWord = document.getElementById('change-word');
onscroll = function (ev) {
    var ev = ev || event;
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if (top > twoDiv.offsetTop - 65) {
        aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
        pullDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
        pullDown.style.Top = '64px';
        devSer.style.backgroundColor = 'rgba(0,0,0,0.3)';
        devSer.style.Top = '64px';
        nav_ul.style.backgroundColor = 'rgba(0,0,0,0.3)';
        clicDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
        devDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
         changeWord.style.backgroundColor = 'rgba(0,0,0,0.3)';
    } else {
        aUl.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.Top = '64px';
        devSer.style.backgroundColor = 'rgba(0,0,0,0)';
        devSer.style.Top = '64px';
        nav_ul.style.backgroundColor = 'rgba(0,0,0,0)';
        clicDown.style.backgroundColor = 'rgba(0,0,0,0)';
        devDown.style.backgroundColor = 'rgba(0,0,0,0)';
        changeWord.style.backgroundColor = 'rgba(0,0,0,0)';
    }

};


//移动端导航事件-------------------------------------
var nav_ul = document.getElementById('xnav_ul');
var navLi = nav_ul.getElementsByTagName('li');
var phone_open = document.getElementById('ph_open');
var heig = navLi[0].offsetHeight;

var ntrn = true;
nav_ul.style.transition = '0.5s all ease';

var phOpen = function phshow(e){

    if(ntrn == true){
        e.style.height = heig + 'px';
        e.style.opacity = 1;
        e.style.overFlow = '';
        ntrn = false
    }else{
        e.style.height = 0;
        e.style.opacity = 0;
        e.style.overFlow = 'hidden';
        ntrn = true
    }

};

phone_open.onclick = function(){
    phOpen(nav_ul)
}


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
$('.nav-select .nohover').hover(function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"1px solid #fff"});
},function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"0px solid #fff"});
}).trigger("mouseout");
$('.nav-select .nohover').hover(function(){
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