/**
 * Created by duanxc1 on 12/15/2016.
 */
//@ sourceURL=index.js
var v_head, v_sign, v_service,v_reset,v_acc,v_new;
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
            username: ''
        },
        created: function () {
            loadPage();
        },
        methods: {
            logout: function (logoutUser) {
                if (logoutUser === undefined) {
                    showMask();
                }
                deleteCookie(logoutUser);
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
                    if (url.indexOf("gitlab") === -1) {
                        window.open(url, "_blank");
                    }
                    else {
                        var gitlab = url + "/users/auth/cas3/callback?url=" + url + "/users/sign_in";
                        window.open(CONFIG._CTX_ + "/gitlabSso?service=" + gitlab + "&ck=" + Cookies.get("LENOVOITS_TGC"), "_blank");
                    }
                }
                else if (url.indexOf("gitlab") !== -1) {
                    window.location = 'login.html';
                }
                else {
                    window.location = 'login.html?refer=' + url;
                }
            }
        }
    });
}


function loadPage() {
    $.ajax({
        type: "GET",
        url: CONFIG._CTX_ + "/validate",
        data: {service: CONFIG.SERVICE, ck: Cookies.get("LENOVOITS_TGC")},
        dataType: "json",
        success: function (data) {
            if (data.success == false) {
                v_head.isLogged = false;
                v_head.login = "Login";
                v_service.isLogged = false;
            } else {
                if (data.response !== "") {
                    var load_result = jwt_decode(data.response);
                    v_head.login = "Hello, " + load_result.username;
                    v_head.username = load_result.username;
                    if (parseInt(load_result.authtype) != 2) {
                        v_head.isLDAP = false;
                    }
                } else {
                    v_head.login = "Hello, " + data.user.username;
                    v_head.username = data.user.username;
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

function callDestroy(logoutUrl, logoutUser) {
    var iframe = "<iframe style='display:none' src=" + logoutUrl + "?user=" + logoutUser + "></iframe>";
    $("body").append(iframe);

}

function logOut(logoutUser) {
    $.ajax({
        type: 'GET',
        url: CONFIG._CTX_ + "/ssoLogout",
        data: {ck: Cookies.get("LENOVOITS_TGC")},
        dateType: "json",
        success: function (data) {
            if (data.success == true) {
                Cookies.expire('LENOVOITS_TGC', {expires: 0, domain: CONFIG.DOMAIN});
                if (logoutUser == undefined) {
                    hideMask();
                    loadPage();
                }
            } else {
                hideMask();
            }

        }
    });

}

function deleteCookie(logoutUser) {
    $.when($.ajax({
        type: 'GET',
        url: CONFIG._CTX_ + "/getDomain",
        data: {ck: Cookies.get("LENOVOITS_TGC")},
        dateType: "json",
        success: function (data) {
            if (data.success == true) {
                var response = jwt_decode(data.response);
                //set domain of all domain
                var domains = response.domain;
                for (var i in domains) {
                    var domainObj = domains[i];
                    if (logoutUser !== undefined) {
                        callDestroy(domainObj.logout, logoutUser);
                    } else {
                        callDestroy(domainObj.logout, v_head.username)
                    }
                }
            } else {
                return;
            }
        }
    })).then(logOut(logoutUser),logOut(logoutUser));
}