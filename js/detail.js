onload = function(){

// rem布局----------------------------------------
        document.documentElement.style.fontSize = innerWidth / 16+'px';
	     onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 16+'px';
	          };

//移动端导航事件-------------------------------------
   var nav_ul = document.getElementById('xnav_ul');
   //alert(nav_ul.innerHTML)
   var navLi = nav_ul.getElementsByTagName('li');
   var phone_open = document.getElementById('ph_open');

   var heig = navLi[0].offsetHeight*navLi.length;
   var topWid = navLi[0].offsetWidth;
   //alert(heig)
   var ntrn = true;
   nav_ul.style.transition = '0.5s all ease';

   phone_open.onclick = function(){
  
      if(ntrn == true){
        nav_ul.style.height = heig + 'px';
        nav_ul.style.width = topWid + 'px';
        nav_ul.style.opacity = 1;
        nav_ul.style.overFlow = 'none';
        ntrn = false
      }else{
        nav_ul.style.height = 0;
        nav_ul.style.width = 0;
        nav_ul.style.opacity = 0;
        nav_ul.style.overFlow = 'hidden';
        ntrn = true
      }

   };


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
    
     //移动端---------------
     change(phone_open,'images/topcli.png','images/topcli.png');


// 登录-----------------------------------------------
    var login  = document.getElementById('login');
    var log    = document.getElementById('log');
    var wlog   = document.getElementById('wlog');
    var sign   = document.getElementById('sign');
    var signbj = document.getElementById('signbj');
    var sig    = document.getElementById('sig');

   
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
// 注册
    bloc(sign,signbj,sig,log,wlog)




// 关闭-------------------------------------------------
    var clos = document.getElementById('close');
    var closig = document.getElementById('closesig');
   
  function clo(e,a,b){
          e.onclick =function(){
            	a.style.display = "none";
            	b.style.display = "none";         
            };
  }
  clo(clos,log,wlog)
  clo(closig,signbj,sig)



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
 
 // 验证-------------------------------------------------------------
    
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

 
//跳转传参数------------------------------------------------
 // function getUrlParam(name)
 //          {
 //        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
 //        //构造一个含有目标参数的正则表达式对象
 //        var r = window.location.search.substr(1).match(reg);  
 //        //匹配目标参数
 //        if (r!=null) return unescape(r[2]); return null; 
 //        //返回参数值
 //          }
	//     var sta=getUrlParam('id')



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