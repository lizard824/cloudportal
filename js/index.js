/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_head, v_sign, v_service;
var _CTX_ = 'http://sso.earth.xpaas.lenovo.com';
var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
$(document).ready(function () {
    iniHead();
    iniSign();
    iniService();
});


function iniHead() {
    v_head = new Vue({
        el: "#xhead",
        data: {
            login: 'Login',
            isLogged: false
        },
        created: function () {
            loadPage();
        },
        methods: {
            logout: function () {
                $.ajax({
                    type: 'GET',
                    url: _CTX_ + "/ssoLogout",
                    data: {ck: Cookies.get("LENOVOITS_TGC")},
                    dateType: "json",
                    success: function (data) {
                        if (data.success == true) {
                            deleteCookie();
                            loadPage();
                        } else {
                            return;
                        }

                    }
                });
            }
        }
    });
}

function loadPage() {
    $.ajax({
        type: "GET",
        url: _CTX_ + "/validate",
        data: {service: 'http://itscloud.xpaas.lenovo.com', ck: Cookies.get("LENOVOITS_TGC")},
        dataType: "json",
        success: function (data) {
            if (data.success == false) {
                v_head.$set("isLogged", false);
                v_head.$set("login", "Login");
                v_service.$set("isLogged", false);
            } else {
                var load_result = jwt_decode(data.response);
                v_head.$set("isLogged", true);
                v_head.$set("login", "Hello, " + load_result.username);
                v_service.$set("isLogged", true);
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
                }else{
                    window.location='login.html?refer='+url;
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
        v_sign.$set("error", "");
        if (val === "")
            v_sign.$set("userValid", false);
        else
            v_sign.$set("userValid", true);
    });
    v_sign.$watch("password", function (val) {
        v_sign.$set("error", "");
        if (val === "")
            v_sign.$set("passValid", false);
        else
            v_sign.$set("passValid", true);
    });
    v_sign.$watch("email", function (val) {
        v_sign.$set("error", "");
        if (val === "" || !val.match(email))
            v_sign.$set("emailValid", false);
        else
            v_sign.$set("emailValid", true);
    });
    v_sign.$watch("realname", function (val) {
        v_sign.$set("error", "");
        if (val === "")
            v_sign.$set("nameValid", false);
        else
            v_sign.$set("nameValid", true);
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
                        myClo(signbj, sig);
                    } else {
                        if (data.msg === "")
                            v_sign.$set("error", "Sign in failed!");
                        else
                            v_sign.$set("error", data.msg);
                    }
                }
            });
        }
    });
}

function callDestroy(domain) {
    $.ajax({
        type: 'GET',
        url: domain + "/destroy",
        dateType: "json",
        success: function (data) {
            if (data.success == true) {
                console.log(data.msg);
            } else {
                return;
            }
        }
    });
}

function deleteCookie() {
    Cookies.remove("LENOVOITS_TGC",{ path: '' });
    $.ajax({
        type: 'GET',
        url: _CTX_ + "/getDomain",
        dateType: "json",
        success: function (data) {
            if (data.success == true) {
                var response = jwt_decode(data.response);
                //set domain of all domain
                var domains = response.domain;
                for (var i in domains) {
                    var domainObj = domains[i];
                    var domainName = domainObj.domain;
                    callDestroy(domainName);
                }
            } else {
                return;
            }
        }
    });
}