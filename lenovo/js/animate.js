onload = function(){

// var oDiv = document.getElementById("body");
// var nDiv = oDiv.getElementsByTagName("div");
var nDiv = body.innerHTML
alert(nDiv.length)
// offsetHeight  div高度

	var allUl = document.getElementById("anim");

	var allLi = allUl.getElementsByTagName("li");


	for(var i = 0;i < allLi.length;i++){

		allLi.index = i;

		// allLi[i].className = 'opt';

}
		var agent = navigator.userAgent;
        
    if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            // console.log("鼠标向下滚动");
            allLi[0].className = "opt";
            allLi[1].className = "top";
            allLi[2].className = "opta";

        } else {
            // console.warn("鼠标向上滚动");
            allLi[0].className = "opta";
            allLi[1].className = "top";
            allLi[2].className = "opt";
        }
     });
   } else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            // console.log("鼠标向上滚动");
            allLi[0].className = "opt";
            allLi[1].className = "top";
            allLi[2].className = "opta";
        } else {
            // console.warn("鼠标向下滚动");
            allLi[0].className = "opta";
            allLi[1].className = "top";
            allLi[2].className = "opt";
        }
    }
}
   



	



}