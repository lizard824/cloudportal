/**
 * Created by shenkai2 on 2/13/2017.
 */
//@ sourceURL=reset.js
$(document).ready(function () {
    iniReset();
});

function moClo( a) {
        $(a).remove();
}

$("#anclose").click(function () {
    moClo('#modify');
});


function iniReset() {
    v_reset = new Vue({
        el: "#resetForm",
        data: {
            newpass: '',
            conpass: '',
            oldpass: '',
            username: v_head.username,
            passValid: true,
            conValid: true,
            oldValid: true,
            error: '',
            strength: ''
        },
        method: {}

    });
    v_reset.$watch("newpass", function (val) {
        v_reset.error = "";
        if (val === "") {
            v_reset.passValid = false;
        }
        else {
            v_reset.passValid = true;
        }
        if (val.length < 3 || val === "")
            v_reset.strength = "low";
        if (val.length >= 3 && val.length <= 6)
            v_reset.strength = "medium";
        if (val.length > 6)
            v_reset.strength = "high";
    });
    v_reset.$watch("oldpass", function (val) {
        v_reset.error = "";
        if (val === "") {
            v_reset.oldValid = false;
        }
        else {
            v_reset.oldValid = true;
        }
    });
    v_reset.$watch("conpass", function (val) {
        v_reset.error = " ";
        if (val === "" || !val.match(v_reset.newpass)) {
            v_reset.conValid = false;
        }
        else {
            v_reset.conValid = true;
        }

    });

    $("#resetForm").on('submit', function (e) {
        e.preventDefault();
        if (v_reset.newpass === "") {
            v_reset.passValid = false;
        }
        else {
            v_reset.passValid = true;
        }
        if (v_reset.conpass === "") {
            v_reset.conValid = false;
        }
        else {
            v_reset.conValid = true;
        }
        if (v_reset.oldpass === "") {
            v_reset.oldValid = false;
        }
        else {
            v_reset.oldValid = true;
        }
        if (!(v_reset.newpass === v_reset.conpass)) {
            v_reset.conValid = false;
        } else {
            v_reset.conValid = true;
        }
        if (!(v_reset.passValid && v_reset.conValid && v_reset.oldValid)) {
            return;
        } else {
            showMask();
            $(this).ajaxSubmit({
                url: CONFIG._CTX_ + "/user/changePassword",
                type: 'POST',
                success: function (data) {
                    if (data.success == true) {
                        hideMask();
                        moClo('#modify');
                    } else {
                        hideMask();
                        if (data.msg === "")
                            v_reset.error = "Reset password failed!";
                        else
                            v_reset.error = data.msg;
                    }

                }
            });
        }
    });

}