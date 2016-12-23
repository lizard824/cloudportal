/* transform v0.0.8
 * homepage: http://gucong3000.github.io/transform/
 */
!function(){"use strict";var a="transform",b=window.isNaN,c=window.jQuery,d="none",e,f,g;try{f=element,g=f.document}catch(h){g=document}function i(a){/normal/.test(a.currentStyle.zoom)&&(a.runtimeStyle.zoom=1)}function j(a,b,c){var d=[],e;if(b=k(a,b),a.filters[b])for(e in c)a.filters[b][e]=c[e];else{for(e in c)d.push(e+"="+(/\w\s+\w/.test(c[e])?"'"+c[e]+"'":c[e]));a.runtimeStyle.filter=a.currentStyle.filter.replace(/^\s*none\s*$/i,"")+" progid:"+b+"("+d.join(",")+")"}}function k(a,b){return a.filters[b]?b:"DXImageTransform.Microsoft."+b}function l(a){var b=parseFloat(a);return/deg/i.test(a)?b/180*Math.PI:b}function m(a,b){var c,d;return a.indexOf(",")>0?(a=a.split(","),c=a[0],d=a[1]):(c=a,d=b?c:0),{x:l(c),y:l(d)}}function n(a,b){return Math.sin(Math.asin(a)+l(b))}function o(a,b){if(a)for(var c=0;c<a.length;c++)b.call(a[c],c,a[c])}function p(a,b){var c=a.runtimeStyle[b]=a.currentStyle[b];return/^auto$/i.test(c)?0/0:a.runtimeStyle["pixel"+b.substr(0,1).toUpperCase()+b.slice(1)]}function q(b){return b.currentStyle[a]||"none"}function r(a,c){var d=a.runtimeStyle;d.position=d.bottom=d.right=d.left=d.top="",j(a,"Matrix",{Enabled:!1});var e=c||q(a),f=a.currentStyle.position,g;if(!/^\s*none\s*$/i.test(c)){i(a),/^static$/i.test(f)?(d.position="relative",g=!1):g=/^absolute$/i.test(f);var h=1,k=0,r=0,s=1,t=0,u=0,v=g?a.offsetLeft:0,w=g?a.offsetTop:0,x=p(a,"bottom"),y=p(a,"right"),z=p(a,"left"),A=p(a,"top"),B=a.offsetWidth,C=a.offsetHeight,D,E;if(e=e.match(/\w+\([^\)]*\)/g),o(e,function(a,b){if(D=b.match(/\(\s*(.+)\s*\)/)[1],/matrix/i.test(b)){for(D=D.split(","),E=0;E<D.length;E++)D[E]=parseFloat(D[E]);h=D[0],r=D[1],k=D[2],s=D[3],t=D[4]||t,u=D[5]||u}else/translateX/i.test(b)?t+=parseFloat(D):/translateY/i.test(b)?u+=parseFloat(D):/translate/i.test(b)?(D=m(D),t+=D.x,u+=D.y):/scaleX/i.test(b)?h*=parseFloat(D):/scaleY/i.test(b)?s*=parseFloat(D):/scale/i.test(b)?(D=m(D,!0),h*=D.x,s*=D.y):/rotate/i.test(b)?(D=l(D),k=-Math.sin(Math.asin(-k)+D),r=n(r,D),D=Math.cos(D),h*=D,s*=D):/skewX/i.test(b)?k=n(k,D):/skewY/i.test(b)?r=n(r,D):/skew/i.test(b)&&(D=m(D),k=n(k,D.x),r=n(r,D.y))}),j(a,"Matrix",{M11:h,M12:k,M21:r,M22:s,Enabled:!0,SizingMethod:"auto expand"}),b(x)?(d.pixelTop=(b(A)?w:A)+u-(a.offsetHeight-C)/2,d.bottom=""):(d.pixelBottom=x-u+(a.offsetHeight-C)/2,d.top=""),b(y)?(d.pixelLeft=(b(z)?v:z)+t-(a.offsetWidth-B)/2,d.right=""):(d.pixelRight=y-t+(a.offsetWidth-B)/2,d.left=""),c)return"matrix("+[h,r,k,s,t,u].join(", ")+")"}}function s(){clearTimeout(e),e=setTimeout(function(){var a=q(f);a!==d&&(d=a,r(f,d))},0)}(g.documentMode<9||!g.querySelector)&&(f&&(s(),o(["propertychange","move","resize","mouseenter","mouseleave","mousedown","focus","blur"],function(a,b){f.attachEvent("on"+b,s)})),c&&!c.cssHooks[a]&&(c.cssHooks[a]={set:function(b,c){return b.style.removeAttribute(a),r(b,c)},get:q}))}();