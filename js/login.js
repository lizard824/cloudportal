// rem布局----------------------------------------
   document.documentElement.style.fontSize = innerWidth / 16+'px';
    onresize = function(){
       document.documentElement.style.fontSize = innerWidth / 16+'px';
      };

// 登录注册切换中英文---------------------------------
// 登录 窗口打开
    // var login  = document.getElementById('login');
    // var log    = document.getElementById('log');
    // var wlog   = document.getElementById('wlog');
    // //var sign   = document.getElementById('sign');
    // var signbj = document.getElementById('signbj');
    // var sig    = document.getElementById('sig');

    // var clLig = function bl(a,b,c,d){
    //          a.style.display = "block";
    //          b.style.display = "block";          
    //          c.style.display = "none";
    //          d.style.display = "none"; 
    //     };
    // login.onclick = function(){
    //       clLig(log,wlog,signbj,sig);
    //     };
    //sign.onclick = function(){
    //      clLig(signbj,sig,log,wlog);
    //};


// 关闭-------------------------------------------------
// var clos = document.getElementById('close');
// var closig = document.getElementById('closesig');

// // 关闭窗口   
// var myClo = function cl(a, b) {
//     a.style.display = "none";
//     b.style.display = "none";
// };

// clos.onclick = function () {
//     myClo(log, wlog);
// };
// closig.onclick = function () {
//     myClo(signbj, sig);
// };

//rember me

var rem = document.getElementById('rember');
var remInp = rem.getElementsByTagName('input')[0];

var clic = true;
rem.onclick = function () {
    if (clic == true) {
        dot.style.float = 'right';
        remInp.value=1;
        v_login.$set("remember",1);
        clic = false;
    } else {
        dot.style.float = 'left';
        remInp.value=0;
        v_login.$set("remember",0);
        clic = true;
    }
}










