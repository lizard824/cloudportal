onload = function(){       
// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };


// 判断屏幕宽度----------------------------------
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
// 登录
    var login  = document.getElementById('login');
    var log    = document.getElementById('log');
    var wlog   = document.getElementById('wlog');
    var sign   = document.getElementById('sign');
    var signbj = document.getElementById('signbj');
    var sig    = document.getElementById('sig');

    // var enlogin  = document.getElementById('enlogin');
    // var enlog    = document.getElementById('enlog');
    // var enwlog   = document.getElementById('enwlog');
    // var ensign   = document.getElementById('ensign');
    // var ensignbj = document.getElementById('ensignbj');
    // var ensig    = document.getElementById('ensig'); 
        function bloc(e,a,b,c,d){
            e.onclick = function(){
            	a.style.display = "block";
            	b.style.display = "block";          
            	c.style.display = "none";
            	d.style.display = "none";
                };
           }
// 登录
   bloc(login,log,wlog,signbj,sig)
 //  bloc(enlogin,enlog,enwlog,ensignbj,ensig)
// 注册
    bloc(sign,signbj,sig,log,wlog)
 //   bloc(ensign,ensignbj,ensig,enlog,enwlog)



// 关闭-------------------------------------------------
    var clos = document.getElementById('close');
    var closig = document.getElementById('closesig');
    // var enclos = document.getElementById('enclose');
    // var enclosig = document.getElementById('enclosesig');
  function clo(e,a,b){
          e.onclick =function(){
            	a.style.display = "none";
            	b.style.display = "none";         
            };
  }
  clo(clos,log,wlog)
  clo(closig,signbj,sig)
  // clo(enclos,enlog,enwlog)
  // clo(enclosig,ensignbj,ensig)


// 导航背景------------------------------------------
    var aUl = document.getElementById('xhead');
	var twoDiv = document.getElementById('second');
	// var enaUl = document.getElementById('enxhead');
	// var entwoDiv = document.getElementById('secondb');
	onscroll=function(ev){
		var ev = ev || event;
		var top = document.documentElement.scrollTop || document.body.scrollTop;
			
		if(top>twoDiv.offsetTop-10){
			aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
		  }else{
			aUl.style.backgroundColor='rgba(0,0,0,0)';
		  }
			
		}


//更换图片-----------------------------------------
     var chanSrc = document.getElementById('change_src');
     // var enchanSrc = document.getElementById('enchange_src');
     function change(e,a,b){
     	e.onmouseover=function(){
     	 e.src=a;
          };
        e.onmouseout=function(){
     	 e.src=b;
         };
    };
    change(chanSrc,'images/lo.png','images/logo.png');
    // change(enchanSrc,'images/lo.png','images/logo.png');
 


// 轮播图
 //    var tabUl = document.getElementById('tab_ul');
	// var allInput = tabUl.getElementsByTagName('li');
	// var tabFirst = document.getElementById('first')
	// var allDiv  = tabFirst.getElementsByTagName('div');
	// var allIndex = 0;
	// var timer = null;
	// time();

	// first.onmouseover = function(){
	// 	clearInterval(timer);
	// };
	// first.onmouseout = function(){
	// 	time();
	// }


	// for(var i = 0;i < allInput.length;i++){
     
	// 	allInput[i].index = i; //记录值

	// 	allInput[i].onclick = function(){
	// 		for(var i = 0; i < allInput.length;i++){
	// 			allInput[i].className = '';
	// 			allDiv[i].style.display = 'none';
	// 		}
	// 		allDiv[this.index].style.display = 'block';
	// 		this.className = 'active';
	// 		allIndex = this.index;
	// 	}
	// };

	// function startMove(){
	// 	for(var i = 0; i < allInput.length;i++){
	// 			allInput[i].className = '';
	// 			allDiv[i].style.display = 'none';
	// 		}

	// 	allDiv[allIndex].style.display = 'block';
	// 	allInput[allIndex].className = 'active';
	// }

	// function time(){
	// 	timer = setInterval(function(){
	// 		allIndex++;
	// 		if(allIndex == allInput.length)allIndex=0;
	// 		startMove();
	// 	},3500);
	// }

//第四屏动画-------------------------------------------
   var dLeft = document.getElementById('factive');
   var fPsem = dLeft.getElementsByTagName('p')[0];
   var fPsam = dLeft.getElementsByTagName('p')[1];
   var fImg = dLeft.getElementsByTagName('img')[0];
 
//左右动
   var fleft  = document.getElementById('onleft');
   var fright = document.getElementById('onright');
   var fUl    = document.getElementById('forth_ul');
   var li     = fUl.getElementsByTagName('li');
      for(var i=0;i<li.length;i++){
          li[i].index=i 
          li[i].onmouseover = function(){
                for(var i=0;i<li.length;i++){
                  li[i].style.transform='scale(1,1)';
                  li[i].className='';
                   
                }
                this.style.transform='scale(1.1,1.1)';
                this.className='factive'

          }
          li[i].onmouseout = function(){
                for(var i=0;i<li.length;i++){
                  li[i].style.transform='scale(1,1)';
                  li[i].className=''
                }
                this.style.transform='scale(1,1)';
               
          }
      }
   var index  = 0;
   var stop
 fUl.style.width = li[0].offsetWidth*(li.length+1)+'px';
 

   fleft.onmousedown = function(){
      stop = setInterval(function(){
                
                if(index == -460){
                    clearInterval(stop)
                }else{
                    index--
                }
                fUl.style.left = index+"px";
            },-100)
   }
   fleft.onmouseup = function(){
             clearInterval(stop)       
        }
  fright.onmousedown = function(){
      stop = setInterval(function(){
                
                if(index == 0){
                    clearInterval(stop)
                }else{
                    index++
                }
                fUl.style.left = index+"px";
            },-100)
   }
   fright.onmouseup = function(){
             clearInterval(stop)       
        }



// 正则验证--------------------------------------------------------------------------
   var name = /^[a-zA-Z]\w{5,15}$/ig;
   var emal = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
   var pass = /^[a-zA-Z0-9]\w{5,17}$;/
   
   // 登录id
   var lnam = document.getElementById('luname');
   var lpwo = document.getElementById('lpword');
   // 注册id
   var nama = document.getElementById('uname');
   var mail = document.getElementById('email');
   var namc  = document.getElementById('rname');
   var word = document.getElementById('pword');
   var aPte = document.getElementById('form');
   var suP  = aPte.getElementsByTagName('p');
// 获取焦点/失去焦点
     function blu(e,a){

          e.onblur=function(){
          if(this.value==''){
            e.type="text"
            e.value=a          
           }
         }
         e.onfocus=function(){
          if(this.value==a){
             e.type="text"
             e.value=''
             
                 }
             }
     }
     // blu(uname,'username')
     // blu(email,'email')
     // blu(rname,'realname')
       blu(luname,'user name')
   
         lpwo.onblur=function(){
          if(this.value=='' ){
            lpwo.type="text"
            lpwo.value='password'
          
           }
         }
         lpwo.onfocus=function(){
          if(this.value=='password'){

            lpwo.type="text"
             lpwo.value=''
             
                 }
             }
 
 // 验证
    
 // 注册验证
    function pro(e,a,c,b,d,f){
      e.onblur = function(){
        if(this.value.match(a)){
            c.innerHTML=b;
            return true
           }
           else{
            d.innerHTML=f;
            return false
           }
      }        
    }


pro(nama,name,suP[0],'*用户名正确',suP[0],'*用户名错误');

pro(mail,emal,suP[1],'*邮箱正确',suP[1],'*邮箱错误');

pro(namc,name,suP[2],'*真实姓名正确',suP[2],'*真实姓名错误');

pro(word,pass,suP[3],'*密码正确',suP[3],'*密码错误');
 


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


}




// 是否在当前屏jq---------------------------------

$(document).ready(function () {
            
            $(window).scroll(function () {
                var a = document.getElementById("second").offsetTop;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
                    $('.cen_left').addClass('opt')
                    $('.cen_right').addClass('opta')
                }else{
                	$('.cen_left').removeClass('opt')
                    $('.cen_right').removeClass('opta')
                }

            });

             $(window).scroll(function () {
                var a = document.getElementById("third").offsetTop;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())-100) {                  
                    $('.th_right').addClass('centerfd')
                     $('#div img').addClass('centerfd')
                }else{
                	  
                      $('.th_right').removeClass('centerfd')
                      $('#div img').removeClass('centerfd')
                      
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