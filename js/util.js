/**
 * Created by duanxc1 on 1/18/2017.
 */
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
            $("#loading").css("height",$(document).height());     
            $("#loading").css("width",$(document).width());     
            $("#loading").show();     
        }  
//隐藏遮罩层  
        function hideMask(){     
              
            $("#loading").hide();     
        } 