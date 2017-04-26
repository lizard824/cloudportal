// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};

centerFn = {
 banShow:function(){
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
 },
 
 bannTab:function(){
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
 },
 
 icoCli:function(){
//图标事件
 var openLi  = document.querySelectorAll('.serli');
 var openDiv =  document.querySelectorAll('.open-div');
 var allDot  =  document.querySelectorAll('.ol-dot');
 var allP    = document.querySelectorAll('.seve-title');
 var allNav  = document.querySelectorAll('.serve-ul');
 var openImg = document.querySelectorAll('.ser-up');
//让所有的显示 
 for(var j = 0; j < openLi.length; j ++){
    openDiv[j].style.display = 'block';
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
 },

}
centerFn.banShow();
centerFn.bannTab();
centerFn.icoCli();
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



    
    


