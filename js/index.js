/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_head, v_sign, v_service;
var _CTX_ = 'http://test.lenovo.com:8180/sso';
var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
var SERVICE = "http://test.lenovo.com:8180/ssoindex/index.html";
$(document).ready(function () {
    iniHead();
    iniSign();
    iniService();
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

function iniSign() {
    v_sign = new Vue({
        el: "#signForm",
        data: {
            email: '',
            username: '',
            password: '',
            realname: '',
            passValid: true,
            userValid: true,
            emailValid: true,
            nameValid: true,
            error: ''
        },
        methods: {
            sign: function () {
                var _self = this;
                if (_self.username === "") {
                    _self.userValid = false;
                } else {
                    _self.userValid = true;
                }
                if (_self.password === "") {
                    _self.passValid = false;
                } else {
                    _self.passValid = true;
                }
                if (!(_self.passValid && _self.userValid)) {
                    return;
                } else {
                    $("#loginForm").submit();
                }

            }
        }
    });
    v_sign.$watch("username", function (val) {
        v_sign.error = "";
        if (val === "")
            v_sign.userValid = false;
        else
            v_sign.userValid = true;
    });
    v_sign.$watch("password", function (val) {
        v_sign.error = "";
        if (val === "")
            v_sign.passValid = false;
        else
            v_sign.passValid = true;
    });
    v_sign.$watch("email", function (val) {
        v_sign.error = "";
        if (val === "" || !val.match(email))
            v_sign.emailValid = false;
        else
            v_sign.emailValid = true;
    });
    v_sign.$watch("realname", function (val) {
        v_sign.error = "";
        if (val === "")
            v_sign.nameValid = false;
        else
            v_sign.nameValid = true;
    });
    $('#signForm').on('submit', function (e) {
        e.preventDefault(); // prevent native submit
        var username = v_sign.username;
        var email = v_sign.email;
        var name = v_sign.realname;
        var password = v_sign.password;
        if (username == '' || email == '' || name == '' || password == '') {
            return;
        } else {
            $(this).ajaxSubmit({
                success: function (data) {
                    if (data.result == true) {
                        //myClo(signbj, sig);
                    } else {
                        if (data.msg === "")
                            v_sign.error = "Sign in failed!";
                        else
                            v_sign.error = data.msg;
                    }
                }
            });
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
                Cookies.remove("LENOVOITS_TGC", {path: ''});
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