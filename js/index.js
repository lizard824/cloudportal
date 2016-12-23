/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_login, v_head, v_sign;
var _CTX_ = 'http://127.0.0.1:8180';
var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
$(document).ready(function () {
    iniLogin();
    iniHead();
    iniSign();
    window.addEventListener('message', function (event) {
        console.log(event.data);
        logincallback(event.data);
    });

    var logincallback = function (result) {
        //成功处理
        if (result.success) {
            loadPage();
            myClo(log, wlog);
            var url = getParameterByName("service");
            if (null !== url) {
                window.location.href = url;
            }
        } else if (!result.success) {
            var loginMsg = result.msg;
            var toptip = "";
            if (loginMsg == "failedLogin") {
                toptip = "Wrong password";
            } else if (loginMsg == "notFound") {
                toptip = "User does not exist!";
            } else {
                toptip = "Error!";
            }
            v_login.$set("error", toptip);
        }
    }

});

function iniLogin() {
    v_login = new Vue({
        el: "#loginForm",
        data: {
            username: '',
            password: '',
            passValid: true,
            userValid: true,
            error: ''
        },
        methods: {
            login: function () {
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
    v_login.$watch("username", function (val) {
        v_login.$set("error", "");
        if (val === "")
            v_login.$set("userValid", false);
        else
            v_login.$set("userValid", true);
    });
    v_login.$watch("password", function (val) {
        v_login.$set("error", "");
        if (val === "")
            v_login.$set("passValid", false);
        else
            v_login.$set("passValid", true);
    });
}

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
        methods: {}
    });
}

function loadPage() {
    $.ajax({
        type: "GET",
        url: _CTX_ + "/sso/getSession/",
        dataType: "json",
        success: function (data) {
            if (data.success == false) {
                return;
            } else {
                v_head.$set("isLogged", true);
                v_head.$set("login", "Hello, " + data.realname);
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
                        myClo(signbj,sig);
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