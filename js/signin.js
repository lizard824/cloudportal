/**
 * Created by shenkai2 on 1/25/2017.
 */
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
