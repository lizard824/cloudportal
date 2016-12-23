
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };
// 导航背景------------------------------------------
var aUl = document.getElementById('xhead');
var twoDiv = document.getElementById('second');


onscroll=function(ev){
    var ev = ev || event;
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if(top>twoDiv.offsetTop-65){
        aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
        pullDown.style.backgroundColor='rgba(0,0,0,0.3)';
        pullDown.style.Top='64px';
        nav_ul.style.backgroundColor='rgba(0,0,0,0.3)';
        clicDown.style.backgroundColor='rgba(0,0,0,0.3)';
    }else{
        aUl.style.backgroundColor='rgba(0,0,0,0)';
        pullDown.style.backgroundColor='rgba(0,0,0,0)';
        pullDown.style.Top='64px';
        nav_ul.style.backgroundColor='rgba(0,0,0,0)';
        clicDown.style.backgroundColor='rgba(0,0,0,0)';
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

var clicDown = document.getElementById("clic_down");
var clicP = clicDown.getElementsByTagName('p');
var clHeight = clicP[0].offsetHeight;
var clicA= navLi[2].getElementsByTagName('a')[0];
var tim;
navLi[2].onmouseover = function(){
    clearTimeout(tim);
    clicDown.style.height = clHeight + 'px';
    clicA.style.borderBottom = '1px solid #fff';
};

clicDown.onmouseover = function(){
    clearTimeout(tim);
    clicDown.style.height = clHeight+ 'px';
    clicA.style.borderBottom = '1px solid #fff';
};
clicDown.onmouseout = function(){
    clearTimeout(tim);

    clicDown.style.height = 0;
    clicDown.style.overFlow= 'hidden';
    clicA.style.borderBottom = '0px solid #fff';
};
navLi[2].onmouseout = function(){
    tim = setTimeout(function(){

        clicDown.style.height = 0;
        clicDown.style.overFlow= 'hidden';
        clicA.style.borderBottom = '0px solid #fff';
    },700)
};
//更换图片-----------------------------------------
      var chanSrc = document.getElementById('change_src');
  
    var chanImg = function change(e,a){
    	
    	e.src=a;
    	
    };
    
    chanSrc.onmouseover = function(){

    	chanImg(chanSrc,'images/lo.png');
    };
    chanSrc.onmouseout = function(){
    	chanImg(chanSrc,'images/logo.png');
    };


//延时导航---------------------------------------------
var noUL = document.getElementById("no_ul");
var downLi = noUL.getElementsByTagName('li')[3];
var downA = downLi.getElementsByTagName('a')[0];

var pullDown = document.getElementById("poll_down");
var pullLi = pullDown.getElementsByTagName('li');
var pullAcol = pullDown.getElementsByTagName('a');
var pullHeight = pullLi[0].offsetHeight;
var tim;
downLi.onmouseover = function(){
    clearTimeout(tim);
    downA.style.borderBottom = '1px solid #fff'
    pullDown.style.height = pullHeight + "px";
};

pullDown.onmouseover = function(){
    clearTimeout(tim);
    pullDown.style.display = "block";
    pullDown.style.height = pullHeight + "px";
    downA.style.borderBottom = '1px solid #fff'
};
pullDown.onmouseout = function(){
    clearTimeout(tim);

    pullDown.style.height = 0;
    pullDown.style.overFlow = 'hidden';
    downA.style.borderBottom = '0px solid #fff'
};
downLi.onmouseout = function(){
    tim = setTimeout(function(){

        pullDown.style.height = 0;
        pullDown.style.overFlow = 'hidden';
        downA.style.borderBottom = '0px solid #fff'
    },700)
};

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
var rem = document.getElementById('rember')
var clic = true
rem.onclick=function(){
     if(clic==true){
      dot.style.float='right'         
          clic=false
     }else{
        dot.style.float='left'
        clic=true
     }
}




// 中部切换------------------------------
var tbUl = document.getElementById('cen_ul');
var tbLi = tbUl.getElementsByTagName('li');
var tbDiv = document.getElementById('cen_right');
var subDiv = tbDiv.getElementsByTagName('div');
var tbspan = tbUl.getElementsByTagName('span');


var allIndex = 0;
 for(var i = 0;i < tbLi.length;i++){
 	  tbLi[i].index = i;
 	  tbLi[i].onclick = function(){
 	  	 for(var i = 0;i < tbLi.length;i++){
 	  	 	tbLi[i].className = '';
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