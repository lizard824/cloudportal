/**
 * Created by duanxc1 on 1/18/2017.
 */
//@ sourceURL=until.js
var CONFIG = {
    _CTX_:"http://test.lenovo.com:8080",
    SERVICE:"http://test.lenovo.com:8180",
    DOMAIN:"test.lenovo.com"
};

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//显示遮罩层    
        function showMask(){     
            $("#loading").css("height",$(window).height());
            $("#loading").css("width",$(window).width());
            $("#loading").show();     
        }  
//隐藏遮罩层  
        function hideMask(){     
              
            $("#loading").hide();     
        }
