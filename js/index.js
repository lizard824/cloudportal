/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_login;
$(document).ready(function () {
    iniLogin();
    var logincallback = function (result) {
        var loginMsg = result.msg;
        console.log(loginMsg);
        var error = document.getElementById("error");
        if (loginMsg == "failedLogin") {
            error.style.visibility = 'visible';
            error.innerText = "密码不对!";
        } else if (loginMsg == "notFound") {
            error.style.visibility = 'visible';
            error.innerText = "用户不存在!";
        }
    }
    var index = function (result) {
        var userId = result.userId;
        var realname = result.realname;
        console.log(userId);
        var error = document.getElementById("error");
        error.style.visibility = 'visible';
        error.innerText = userId + "," + realname;
    }
});

function iniLogin() {
    v_login = new Vue({
        el: "#loginForm",
        data: {
            username: '',
            password: '',
            passValid: true,
            userValid: true
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
        if (val === "")
            v_login.$set("userValid", false);
        else
            v_login.$set("userValid", true);
    });
    v_login.$watch("password", function (val) {
        if (val === "")
            v_login.$set("passValid", false);
        else
            v_login.$set("passValid", true);
    });
}