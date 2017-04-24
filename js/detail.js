// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16+'px';
	onresize = function(){
document.documentElement.style.fontSize = innerWidth / 16+'px';
  };
  
 detailFn = {
 
//center tab
 detailTab:function(){
  var tbUl = document.getElementById('cen_ul');
  var tbLi = tbUl.getElementsByTagName('li');
  var tbA = tbUl.getElementsByTagName('a'); 
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
 	  	 };
 	  	 allIndex = this.index;
 	  	 this.className = 'active';
 	  	 subDiv[this.index].style.display = 'block';
 	  };
     };	
 }
 
 };
 detailFn.detailTab();
 