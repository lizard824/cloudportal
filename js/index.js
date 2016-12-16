/**
 * Created by duanxc1 on 12/15/2016.
 */
var v_login, v_head;
$(document).ready(function () {
    iniLogin();
    iniHead();
    window.addEventListener('message', function(event) {
        console.log(event.data);
        logincallback(event.data);
    });

    var logincallback = function(result)
    {
        //成功处理
        var toptip = "";
        var error = document.getElementById("error");
        if(result.success){
            var userId = result.userId;
            var realname = result.realname;
            toptip = userId+","+realname;
            v_head.$set("login", "Hello, "+userId);
            v_head.$set("isLogged", true);
        }else if(!result.success){
            var loginMsg = result.msg;
            if(loginMsg=="failedLogin"){
                toptip = "密码不对!";
            }else if(loginMsg=="notFound"){
                toptip = "用户不存在!";
            }else{
                toptip = "出现异常!";
            }
        }
        error.style.visibility = 'visible';
        error.innerText = toptip;
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

function iniHead(){
    v_head = new Vue({
        el: "#xhead",
        data: {
            login:'Login',
            isLogged:false
        },
        methods: {
        }
    });
}