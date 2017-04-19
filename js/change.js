
chan_pass = {

chanword:function(){
    //修改密码input动画
    var moP = document.getElementById('mo-p');
    var movP = document.getElementById('mov-p');
    var moap = document.getElementById('moa-p')
    var newWord = document.getElementById('new-word');
    var conWord = document.getElementById('con-word');
    var oldWord = document.getElementById('old-word');
    var moSub = document.getElementById('mo-sub');

 function moveP(e,a,c){
    e.style.top = a;
    e.style.fontSize = c;
 }
 newWord.onfocus = function(){
    moveP(moP,'-5px','14px');
    };   
 newWord.onblur = function(){
    if(newWord.value == ''){
       moveP(moP,'20px','16px');            
        };      
    };
 conWord.onfocus = function(){
    moveP(movP,'-5px','14px');
    };   
 conWord.onblur = function(){
    if(conWord.value == ''){
       moveP(movP,'20px','16px');            
        };
    };
 oldWord.onfocus = function(){
    moveP(moap,'-5px','14px');
 };
 oldWord.onblur = function(){
    if(conWord.value == ''){
        moveP(moap,'20px','16px');
    };
  };
}

};
chan_pass.chanword();
