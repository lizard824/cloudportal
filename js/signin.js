/**
 * Created by shenkai2 on 1/25/2017.
 */

$(document).ready(function () {
    iniSign();
});

function iniSign() {
    v_sign = new Vue({
        el: "#signForm",
        data: {
            email: '',
            username: '',
            password: '',
            conpword:'',
            realname: '',
            number:'',
            passValid: true,
            conValid: true,
            userValid: true,
            emailValid: true,
            nameValid: true,
            error: ''
        },
        methods: {
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
    v_sign.$watch("conpword",function (val) {
        v_sign.error = "";
        if(val === "" || !val.match (v_sign.password))
            v_sign.conValid = false;
        else
            v_sign.conValid = true;
    });

    $('#signForm').on('submit', function (e) {
        e.preventDefault(); // prevent native submit
        var username = v_sign.username;
        var email = v_sign.email;
        var name = v_sign.realname;
        var password = v_sign.password;
        var conword = v_sign.conpword;


        if (v_sign.username === "") {
            v_sign.userValid = false;
        } else {
            v_sign.userValid = true;
        }
        if (v_sign.password === "") {
            v_sign.passValid = false;
        } else {
            v_sign.passValid = true;
        }
        if (v_sign.realname === ""){
            v_sign.nameValid = false;
        } else {
            v_sign.nameValid = true;
        }
        if(!(v_sign.password === v_sign.conpword)){
            v_sign.conValid = false;
        }else{
            v_sign.conValid = true;
        }
        if (!(v_sign.passValid && v_sign.userValid && v_sign.conValid && v_sign.nameValid)) {
            return;
        } else {
            showMask();
            $(this).ajaxSubmit({
                success: function (data) {
                    var _CTX_ = '';
                    if (data.success == true) {
                        window.location.href = "./login.html";
                    } else {
                        hideMask();
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
