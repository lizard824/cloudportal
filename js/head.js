//@ sourceURL=head.js
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};
headFn = {
	
 mousMo:function(){
 	//鼠标滚动
 	var aUl = document.getElementById('xhead');
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
 },
 
 
 
 
 phonNav:function(){
 	//移动端导航事件
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
 },
 
 pcNav:function(){
 	//pc延时导航
  $('.nav-select .nav_down').hover(function(){
    $(this).find("a:first").css({"color":"#005aff"});
  },function(){
    $(this).find("a:first").css({"color":"#fff"});
  }).trigger("mouseout");
  $('.nav-select .nav_down').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
  })
 },
 
 phonSel:function(){
 	//移动端下拉菜单
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
 },
 
 changeImg:function(){
 //更换图片logo小动画
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
 }
	
}
headFn.mousMo();
headFn.phonNav();
headFn.pcNav();
headFn.phonSel();
headFn.changeImg();
