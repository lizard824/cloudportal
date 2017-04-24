document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};

footerFn = {
	
  footIn:function(){
    $(window).scroll(function () {
    var a = document.getElementById("footer_center").offsetTop;
     if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
            $('.footer_center').addClass('bottom')
       } else {
            $('.footer_center').removeClass('bottom')
        }
    });

  }
	
}
footerFn.footIn();
