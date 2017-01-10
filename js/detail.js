
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
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
    } else {
        aUl.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.Top = '64px';
        devSer.style.backgroundColor = 'rgba(0,0,0,0)';
        devSer.style.Top = '64px';
        nav_ul.style.backgroundColor = 'rgba(0,0,0,0)';
        clicDown.style.backgroundColor = 'rgba(0,0,0,0)';
        devDown.style.backgroundColor = 'rgba(0,0,0,0)';
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
$('.xnav_ul .nohover').hover(function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"1px solid #fff"});
},function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"0px solid #fff"});
}).trigger("mouseout");
$('.xnav_ul .nohover').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
})

// 登录-----------------------------------------------
    var login  = document.getElementById('login');
    var log    = document.getElementById('log');
    var wlog   = document.getElementById('wlog');
    //var sign   = document.getElementById('sign');
    var signbj = document.getElementById('signbj');
    var sig    = document.getElementById('sig');

     var clLig = function bl(a,b,c,d){
             a.style.display = "block";
             b.style.display = "block";          
             c.style.display = "none";
             d.style.display = "none"; 
        };
    login.onclick = function(){
          clLig(log,wlog,signbj,sig);
        };
    //sign.onclick = function(){
    //      clLig(signbj,sig,log,wlog);
    //};




// 关闭-------------------------------------------------
    var clos = document.getElementById('close');
    var closig = document.getElementById('closesig');
   
// 关闭窗口   
    var myClo = function cl(a,b){
         a.style.display = "none";
         b.style.display = "none"; 
    };

clos.onclick = function(){
     myClo(log,wlog);
};
closig.onclick = function(){
     myClo(signbj,sig);
};

//rember me
var rem = document.getElementById('rember');
var remInp = rem.getElementsByTagName('input')[0];
var clic = true;
rem.onclick=function(){
     if(clic==true){
      dot.style.float='right';
         remInp.value=1;
          clic=false
     }else{
        dot.style.float='left';
         remInp.value=0;
        clic=true
     }
};




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