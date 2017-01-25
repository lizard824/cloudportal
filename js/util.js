/**
 * Created by duanxc1 on 1/18/2017.
 */
var v_head;
var _CTX_ = 'http://test.lenovo.com:8180/sso';
var SERVICE = "http://test.lenovo.com:8180/ssoindex/index.html";
$(document).ready(function () {
    iniHead();
    var logout = getParameterByName("logout");
    if (null !== logout) {
        v_head.logout();
    }

});
function iniHead() {
    v_head = new Vue({
        el: "#xhead",
        data: {
            login: 'Login',
            isLogged: false,
            isLDAP: true
        },
        created: function () {
            loadPage();
        },
        methods: {
            logout: function () {
                showMask();
                $.ajax({
                    type: 'GET',
                    url: _CTX_ + "/ssoLogout",
                    data: {ck: Cookies.get("LENOVOITS_TGC")},
                    dateType: "json",
                    success: function (data) {
                        if (data.success == true) {
                            deleteCookie();
                        } else {
                            return;
                        }

                    }
                });
            },
            hover: function (id) {
                var self = this;
                if (self.isLogged && !self.isLDAP) {
                    $("#" + id).css({"transition": "1s all ease", "border-bottom": "1px solid #fff"});
                    $("#change-word").stop().slideDown(50);
                }
            },
            leave: function (id) {
                $("#" + id).css({"transition": "0s all ease", "border-bottom": "0px solid #fff"});
                $("#change-word").stop().slideUp(50);
            }
        }
    });
}
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

function loadPage() {
    $.ajax({
        type: "GET",
        url: _CTX_ + "/validate",
        data: {service: SERVICE, ck: Cookies.get("LENOVOITS_TGC")},
        dataType: "json",
        success: function (data) {
            if (data.success == false) {
                v_head.isLogged = false;
                v_head.login = "Login";
                v_service.isLogged = false;
            } else {
                var load_result = jwt_decode(data.response);
                v_head.isLogged = true;
                v_head.login = "Hello, " + load_result.username;
                if (parseInt(load_result.authtype) != 2) {
                    v_head.isLDAP = false;
                }
                v_service.isLogged = true;
                //anClose(anMite);
            }
        }
    });
}

function callDestroy(logoutUrl) {
    var iframe = "<iframe style='display:none' src="+logoutUrl+"></iframe>";
    $("body").append(iframe);
    /* $.ajax({
     type: 'GET',
     url: logoutUrl,
     dateType: "json",
     success: function (data) {
     if (data.success == true) {
     console.log(data.msg);
     } else {
     return;
     }
     }
     });*/
}

function deleteCookie() {
    $.ajax({
        type: 'GET',
        url: _CTX_ + "/getDomain",
        data: {ck: Cookies.get("LENOVOITS_TGC")},
        dateType: "json",
        success: function (data) {
            if (data.success == true) {
                var response = jwt_decode(data.response);
                //set domain of all domain
                var domains = response.domain;
                for (var i in domains) {
                    var domainObj = domains[i];
                    callDestroy(domainObj.logout);
                }
                Cookies.remove("LENOVOITS_TGC", {path: '/'});
                var wait = function () {
                    var dtd = $.Deferred();
                    setTimeout(dtd.resolve, 5000);
                    return dtd;
                };
                $.when(wait()).done(function () {
                    hideMask();
                    loadPage();
                });
            } else {
                return;
            }
        }
    });
}