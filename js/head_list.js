headList = {	
 navBack:function(){
 	// 导航背景
   var aUl = document.getElementById('xhead');
   var twoDiv = document.getElementById('second');
   var changeWord = document.getElementById('change-word'); 
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
 },
	
}
headList.navBack();
