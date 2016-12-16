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
            clo(clos,log,wlog);
        }else if(!result.success){
            var loginMsg = result.msg;
            if(loginMsg=="failedLogin"){
                toptip = "Wrong password";
            }else if(loginMsg=="notFound"){
                toptip = "User does not exist!";
            }else{
                toptip = "Error!";
            }
            v_login.$set("valid", false);
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
            valid:true,
            error:''
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
            logout:function () {
                var _self = this;
                $.ajax({
                    type: "POST",
                    url: "http://127.0.0.1:8080/sso/caslogout",
                    dataType: "json",
                    success: function (data) {
                        _self.isLogged = false;
                        _self.login = "Login";
                    }
                });
            }
        }
    });
}