/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_head, v_sign, v_service,v_reset,v_acc,v_new;
var _CTX_ = 'http://sso.earth.xpaas.lenovo.com';
var SERVICE = "http://itscloud.xpaas.lenovo.com";
var DOMAIN = '.itscloud.xpaas.lenovo.com';
$(document).ready(function () {
    iniService();
    iniHead();
});

function iniService() {
    v_service = new Vue({
        el: "#forth",
        data: {
            isLogged: false
        },
        methods: {
            openUrl: function (url) {
                var _self = this;
                if (_self.isLogged) {
                    window.open(url, "_blank");
                } else {
                    window.location = 'login.html?refer=' + url;
                }
            }
        }
    });
}


function iniHead() {
    v_head = new Vue({
        el: "#xhead",
        data: {
            login: 'Login',
            isLogged: false,
            isLDAP: true,
            username:''
        },
        created: function () {
            loadPage();
        },
        methods: {
            logout: function (logoutUser) {
                if(logoutUser===undefined) {
                    showMask();
                }
                $.ajax({
                    type: 'GET',
                    url: _CTX_ + "/ssoLogout",
                    data: {ck: Cookies.get("LENOVOITS_TGC")},
                    dateType: "json",
                    success: function (data) {
                        if (data.success == true) {
                            deleteCookie(logoutUser);
                        } else {
                            hideMask();
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
            },
            openUrl: function (url) {
                var _self = this;
                if (_self.isLogged) {
                    window.open(url, "_blank");
                } else {
                    window.location = 'login.html?refer=' + url;
                }
            }
        }
    });
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
                if(data.response!==""){
                    var load_result = jwt_decode(data.response);
                    v_head.login = "Hello, " + load_result.username;
                    v_head.username = load_result.username;
                    v_reset.username = load_result.username;
                    if (parseInt(load_result.authtype) != 2) {
                        v_head.isLDAP = false;
                    }
                }else{
                    v_head.login = "Hello, " + data.user.username;
                    v_head.username = data.user.username;
                    v_reset.username = data.user.username;
                    if (parseInt(data.user.authtype) != 2) {
                        v_head.isLDAP = false;
                    }
                }
                v_head.isLogged = true;
                v_service.isLogged = true;
                //anClose(anMite);
            }
        }
    });
}

function callDestroy(logoutUrl,logoutUser) {
    var iframe = "<iframe style='display:none' src=" + logoutUrl + "?user="+logoutUser+"></iframe>";
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

function deleteCookie(logoutUser) {
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
                    if(logoutUser!==undefined) {
                        callDestroy(domainObj.logout, logoutUser);
                    }else{
                        callDestroy(domainObj.logout,v_head.username)
                    }
                }
                Cookies.expire('LENOVOITS_TGC',{expires: 0, domain: DOMAIN});
                var wait = function () {
                    var dtd = $.Deferred();
                    setTimeout(dtd.resolve, 500);
                    return dtd;
                };
                $.when(wait()).done(function () {
                    if(logoutUser==undefined){
                        hideMask();
                        loadPage();
                    }
                });
            } else {
                return;
            }
        }
    });
}