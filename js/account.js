/**
 * Created by shenkai2 on 2/23/2017.
 */
$(document).ready(function () {
    iniAccount();
    iniNew();
    var active = getParameterByName("active");
    if (action == "reset") {
        document.getElementById("info-first").style.display = "none";
        document.getElementById("info-second").style.display = "block";
        $("#slidTwo").addClass("posssucce");
        $.ajax({
            type: "GET",
            url: CONFIG._CTX_ + "/user/activeCode",
            data: {activeCode: active},
            dataType: "json",
            success: function (data) {
                if (data.success == false) {
                    window.location.href = "./login.html";
                    window.alert(data.msg);
                }
            }
        });
    }
});

// var acc = getParameterByName("refer")
var action = getParameterByName("action");
var username = getParameterByName("username");
var activeCode = getParameterByName("active");
function iniAccount() {

    v_acc = new Vue({
        el: '#forgotForm',
        data: {
            username: '',
            userValid: true,
            tipValid: false,
            error: ''
        }

    });

    v_acc.$watch("username", function (val) {
        v_acc.error = '';
        var nextButton = document.getElementById('next');
        if (val === "") {
            v_acc.userValid = false;
            nextButton.disabled = 'disabled';
            $('#next').addClass('click-no');
        }
        else {
            $('#next').removeClass('click-no');
            v_acc.userValid = true;
            nextButton.disabled = '';
        }
    });

    $('#forgotForm').on('submit', function (e) {
        e.preventDefault();
        if (v_acc.userValid === true) {
            showMask();
            $(this).ajaxSubmit({
                url:CONFIG._CTX_+"/user/forgot",
                type:'POST',
                success: function (data) {
                    if (data.success == true) {
                        v_acc.tipValid = true;
                    } else {
                        hideMask();
                        v_acc.error = "Can not find this user!";
                    }
                }
            })
        }


    });
}
function iniNew() {
    v_new = new Vue({
        el: '#resetForm',
        data: {
            newPasswd: '',
            conPasswd: '',
            conValid: true,
            newValid:true,
            error: '',
            activeCode: activeCode,
            userName: username
        }

    });

    v_new.$watch("newPasswd", function (val) {
        v_new.error = '';
        if (val === "") {
            v_new.newValid = false;
        }else{
            v_new.newValid = true;
        }
    });

    v_new.$watch("conPasswd", function (val) {
        v_new.error = '';
        if (val === v_new.newPasswd && val !== '') {
            v_new.conValid = true;
        }
        else {
            v_new.conValid = false;
        }
    });

    $('#resetForm').on('submit', function (e) {
        e.preventDefault();
        if (v_new.conValid === true && v_new.newValid ===true) {
            showMask();
            $(this).ajaxSubmit({
                url:CONFIG._CTX_+"/user/changePassword",
                type:'POST',
                success: function (data) {
                    if (data.success == true) {
                        document.getElementById("info-second").style.display = "none";
                        document.getElementById("info-third").style.display = "block";
                        $("#slidThree").addClass("posssucce");
                    } else {
                        hideMask();
                        if (data.msg === "")
                            v_new.error = "Reset password failed!";
                        else
                            v_new.error = data.msg;
                    }
                }
            })
        }

    });

}