// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};


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



// 登录注册切换中英文---------------------------------
// 登录 窗口打开
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


/*sign.onclick = function () {
 $('#signForm').trigger("reset");
 v_sign.$set("email", "");
 v_sign.$set("username", "");
 v_sign.$set("password", "");
 v_sign.$set("realname", "");
 v_sign.$set("error", "");
 v_sign.$set("emailValid", true);
 v_sign.$set("userValid", true);
 v_sign.$set("passValid", true);
 v_sign.$set("nameValid", true);
 clLig(signbj, sig, log, wlog);
 };*/

// 关闭-------------------------------------------------
var clos = document.getElementById('close');
var closig = document.getElementById('closesig');

// 关闭窗口   
var myClo = function cl(a, b) {
    a.style.display = "none";
    b.style.display = "none";
};

clos.onclick = function () {
    myClo(log, wlog);
};
closig.onclick = function () {
    myClo(signbj, sig);
};


var agent = navigator.userAgent;
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            // console.log("鼠标向下滚动");
            aUl.style.display = 'none';
        } else {
            // console.warn("鼠标向上滚动");
            aUl.style.display = 'block';
        }
    });
} else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            // console.log("鼠标向上滚动");
            aUl.style.display = 'none';
        } else {
            // console.warn("鼠标向下滚动");
            aUl.style.display = 'block';
        }
    }
}



// 导航背景------------------------------------------
var aUl = document.getElementById('xhead');
var twoDiv = document.getElementById('second');

var pullDown = document.getElementById("poll_down");
var devSer = document.getElementById('devser');

var clicDown = document.getElementById('clic_down');
var devDown = document.getElementById('device');

onscroll = function (ev) {
    var ev = ev || event;
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if (top > twoDiv.offsetTop - 65) {
        aUl.style.backgroundColor = 'rgba(0,0,0,0.3)';
        pullDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
        pullDown.style.Top = '64px';
        devSer.style.backgroundColor = 'rgba(0,0,0,0.3)';
        devSer.style.Top = '64px';
         nav_ul.style.backgroundColor = 'rgba(0,0,0,0.3)';
        clicDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
        devDown.style.backgroundColor = 'rgba(0,0,0,0.3)';
    } else {
        aUl.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.backgroundColor = 'rgba(0,0,0,0)';
        pullDown.style.Top = '64px';
        devSer.style.backgroundColor = 'rgba(0,0,0,0)';
        devSer.style.Top = '64px';
        nav_ul.style.backgroundColor = 'rgba(0,0,0,0)';
        clicDown.style.backgroundColor = 'rgba(0,0,0,0)';
        devDown.style.backgroundColor = 'rgba(0,0,0,0)';
    }

};


//移动端导航事件-------------------------------------
var nav_ul = document.getElementById('xnav_ul');
var navLi = nav_ul.getElementsByTagName('li');
var phone_open = document.getElementById('ph_open');
var heig = navLi[0].offsetHeight;

var ntrn = true;
nav_ul.style.transition = '0.5s all ease';

var phOpen = function phshow(e) {

    if (ntrn == true) {
        e.style.height = heig + 'px';
        e.style.opacity = 1;
        e.style.overFlow = '';
        ntrn = false
    } else {
        e.style.height = 0;
        e.style.opacity = 0;
        e.style.overFlow = 'hidden';
        ntrn = true
    }

};

phone_open.onclick = function () {
    phOpen(nav_ul)
}



//更换图片-----------------------------------------
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
            allSpan[i].className = '';
            allDiv[i].style.display = 'none';
        }
        allDiv[this.index].style.display = 'block';
        allSpan[this.index].className = 'active';
        allIndex = this.index;
    }
}
;

function startMove() {
    for (var i = 0; i < allInput.length; i++) {
        allSpan[i].className = '';
        allDiv[i].style.display = 'none';
    }

    allDiv[allIndex].style.display = 'block';
    allSpan[allIndex].className = 'active';
}

function time() {
    timer = setInterval(function () {
        allIndex++;
        if (allIndex == allInput.length)allIndex = 0;
        startMove();
    }, 1500);
}

//延时导航---------------------------------------------

$('.xnav_ul .nohover').hover(function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"1px solid #fff"});
},function(){
    $(this).find("a:first").css({"transition":"1s all ease","border-bottom":"0px solid #fff"});
}).trigger("mouseout");
$('.xnav_ul .nohover').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
})

//第四屏动画-------------------------------------------

var ulWidth = $('#forth_ul li').width();
function por() {
    if ($(window).width() > 1349) {
        ulWidth = 440;
        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {
            console.log($("#forth_ul")[0].offsetLeft);
            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }
    else if ($(window).width() == 1349) {
        ulWidth = 380;

        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {

            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }
    else if ($(window).width() < 1349) {
        ulWidth = $('#forth_ul li').width() + parseInt($('#forth_ul li').css('marginLeft'));
        $("#forth_ul").animate({left: -ulWidth}, 1000, function () {

            $(this).css("left", "0").find(".oone:first").appendTo("#forth_ul");
        })
    }

};

//点击事件
$(".onleft").click(function () {
    por()
})

$(".onright").click(function () {
    // $('.forth_ul').stop().animate({left:'+='+ulWidth},1000,function(){
    //  //console.log( $("#forth_ul")[0].offsetLeft)
    // $('.forth_ul').css("left","-="+ulWidth).stop().find(".oone:last-child").prependTo(".forth_ul");
    $('.forth_ul').css('left', '-=' + ulWidth).stop().find(".oone:last-child").prependTo(".forth_ul").parent().stop().animate({left: '+=' + ulWidth}, 1000, function () {
    })

});

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


// 是否在当前屏jq---------------------------------

$(document).ready(function () {

    $(window).scroll(function () {
        var a = document.getElementById("cen_right").offsetTop;

        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {

            $('.cen_right').addClass('opta')
        } else {

            $('.cen_right').removeClass('opta')
        }

    });

    $(window).scroll(function () {
        var a = document.getElementById("cen_left").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height()) - 100) {
            $('.th_right').addClass('ancen')
            $('#cen_left').addClass('ancen')
        } else {

            $('.th_right').removeClass('ancen')
            $('#cen_left').removeClass('ancen')

        }

    });

    $(window).scroll(function () {
        var a = document.getElementById("footer_center").offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {

            $('.footer_center').addClass('bottom')
        } else {

            $('.footer_center').removeClass('bottom')

        }

    });

});

