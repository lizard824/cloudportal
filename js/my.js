
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };


// 判断屏幕宽度 IE不兼容matchMedia----------------------------------
   // var result = window.matchMedia('(max-width: 759px)');

   // if (result.matches) {
   //         console.log('页面宽度小于等于700px');
   //     } else {
   //       console.log('页面宽度大于700px');
   //        }

// 中文js----------------------------------------
// 旋转 中文-------------------------------
// function run(){
// 	  var YY2 = 0
//       var XX1 = 0;
//       div.style.transform = "perspective(800px) rotateX("+XX1+"deg) rotateY("+YY2+"deg)"      
//       var kg = false
//        setInterval(function(){
//         if(kg == true)return
//         kg  = true
//         XX1 = XX1 + 0
//         YY2 = YY2 - 90
//         div.style.transform = "perspective(800px) rotateX("+XX1+"deg) rotateY("+YY2+"deg)"
//        },3500)         
//       function fn(){
//         kg = false
//         div.removeEventListener('transitionend',false);
//       }
//       div.addEventListener('transitionend',fn,false); 
// }    
//  setTimeout(function(){
//        run()
// 	},2000)

// 中英文切换-------------------------------------
 // function tab(e,c,d){
 //        e.onclick = function (){
 //           c.style.display = 'block'
 //           d.style.display = 'none'
 //        	}
 //        };
 //    tab(eng,english,china);
 //    tab(cha,china,english);

// 登录注册切换中英文---------------------------------
// 登录 窗口打开
    var login  = document.getElementById('login');
    var log    = document.getElementById('log');
    var wlog   = document.getElementById('wlog');
    var sign   = document.getElementById('sign');
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
    sign.onclick = function(){
          clLig(signbj,sig,log,wlog);
    };




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



// 导航背景------------------------------------------
  var aUl = document.getElementById('xhead');
	var twoDiv = document.getElementById('second');
	// var enaUl = document.getElementById('enxhead');
	// var entwoDiv = document.getElementById('secondb');

	onscroll=function(ev){
		var ev = ev || event;
		var top = document.documentElement.scrollTop || document.body.scrollTop;
			
		if(top>twoDiv.offsetTop-65){
			aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
		  }else{
			aUl.style.backgroundColor='rgba(0,0,0,0)';
		  }
			
		};


//移动端导航事件-------------------------------------
   var nav_ul = document.getElementById('xnav_ul');
   var navLi = nav_ul.getElementsByTagName('li');
   var phone_open = document.getElementById('ph_open');
   var heig = navLi[0].offsetHeight*navLi.length;
   var topWid = navLi[0].offsetWidth;
   var ntrn = true;
   nav_ul.style.transition = '0.5s all ease';
  
   var phOpen = function phshow(e){
      
      if(ntrn == true){
        e.style.height = heig + 'px';
        e.style.width = topWid + 'px';
        e.style.opacity = 1;
        e.style.overFlow = 'none';
        ntrn = false
      }else{
        e.style.height = 0;
        e.style.width = 0;
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
    
    chanSrc.onmousover = function(){
    	chanImg(chanSrc,'images/lo.png');
    };
    chanSrc.onmousover = function(){
    	chanImg(chanSrc,'images/logo.png');
    };
    
 



// 轮播图
    var tabUl = document.getElementById('tab_ul');
	var allInput = tabUl.getElementsByTagName('li');
	var tabFirst = document.getElementById('first')
	var allDiv  = tabFirst.getElementsByTagName('div');
	var allIndex = 0;
	var timer = null;
	time();

	first.onmouseover = function(){
		clearInterval(timer);
	};
	first.onmouseout = function(){
		time();
	}


	for(var i = 0;i < allInput.length;i++){
     
		allInput[i].index = i; //记录值

		allInput[i].onclick = function(){
			for(var i = 0; i < allInput.length;i++){
				allInput[i].className = '';
				allDiv[i].style.display = 'none';
			}
			allDiv[this.index].style.display = 'block';
			this.className = 'active';
			allIndex = this.index;
		}
	};

	function startMove(){
		for(var i = 0; i < allInput.length;i++){
				allInput[i].className = '';
				allDiv[i].style.display = 'none';
			}

		allDiv[allIndex].style.display = 'block';
		allInput[allIndex].className = 'active';
	}

	function time(){
		timer = setInterval(function(){
			allIndex++;
			if(allIndex == allInput.length)allIndex=0;
			startMove();
		},2500);
	}

//第四屏动画-------------------------------------------
 
//左右动
 console.log($(window).width())
  var ulWidth  = $('#forth_ul li').width();
  function por(){
    if($(window).width()>1343){
      ulWidth = 440;
      $("#forth_ul").animate({left:-ulWidth},1000,function(){
           console.log($("#forth_ul")[0].offsetLeft);
        $(this).css("left","0").find(".oone:first").appendTo("#forth_ul") ;
      })
  }
  else if($(window).width()==1343){
     ulWidth = 380;

      $("#forth_ul").animate({left:-ulWidth},1000,function(){
           console.log($("#forth_ul")[0].offsetLeft);                
        $(this).css("left","0").find(".oone:first").appendTo("#forth_ul") ;           
      })
  }
  else if($(window).width()<1343){
      ulWidth = $('#forth_ul li').width()+parseInt( $('#forth_ul li').css('marginLeft') );
      $("#forth_ul").animate({left:-ulWidth},1000,function(){
           console.log($("#forth_ul")[0].offsetLeft);                
        $(this).css("left","0").find(".oone:first").appendTo("#forth_ul") ;           
      }) 
     }
               
    };
  
  //点击事件    
     $(".onleft").click(function(){
        por()
     })

     $(".onright").click(function(){
         // $('.forth_ul').stop().animate({left:'+='+ulWidth},1000,function(){
         //  //console.log( $("#forth_ul")[0].offsetLeft)
         // $('.forth_ul').css("left","-="+ulWidth).stop().find(".oone:last-child").prependTo(".forth_ul");
          $('.forth_ul').css('left','-='+ulWidth).stop().find(".oone:last-child").prependTo(".forth_ul").parent().stop().animate({left:'+='+ulWidth},1000,function(){})

     });
    

//rember me

var rem = document.getElementById('rember');
var clic = true;
rem.onclick=function(){
     if(clic==true){
      dot.style.float='right';        
          clic=false;
     }else{
        dot.style.float='left';
        clic=true;
     }
}







// 是否在当前屏jq---------------------------------

$(document).ready(function () {
            
            $(window).scroll(function () {
                var a = document.getElementById("cen_right").offsetTop;
             
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
                
                    $('.cen_right').addClass('opta')
                }else{
             
                    $('.cen_right').removeClass('opta')
                }

            });

             $(window).scroll(function () {
                var a = document.getElementById("cen_left").offsetTop;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())-100) {                  
                    $('.th_right').addClass('ancen')
                     $('#cen_left').addClass('ancen')
                }else{
                	  
                      $('.th_right').removeClass('ancen')
                      $('#cen_left').removeClass('ancen')
                      
                }

            });

             $(window).scroll(function () {
                var a = document.getElementById("footer_center").offsetTop;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
                   
                    $('.footer_center').addClass('bottom')
                }else {
                	  
                      $('.footer_center').removeClass('bottom')
                      
                }

            });

});

