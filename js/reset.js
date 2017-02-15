/**
 * Created by shenkai2 on 2/13/2017.
 */
$(document).ready(function () {
    iniReset();
});

function iniReset() {
    v_reset = new Vue({
        el: "#resetForm",
        data: {
            newpass: '',
            conpass: '',
            username: '',
            passValid: true,
            conValid: true,
            error:''
        },
        method: {}

    });
    v_reset.$watch("newpass",function (val){
        v_reset.error = " ";
        if (val === "")
            v_reset.passValid = false;
        else
            v_reset.passValid = true;
    });
    v_reset.$watch("conpass",function (val) {
        v_reset.error = " ";
            if (val === "" || !val.match(v_reset.newpass))
                v_reset.conValid = false;
            else
                v_reset.conValid = true;
    });

    $("#resetForm").on('submit', function (e){
        e.preventDefault();
        if(!(v_reset.newpass === v_reset.conpass)){
            v_reset.conValid = false;
        }else{
            v_reset.conValid = true;
        }
        if(!(v_reset.passValid && v_reset.conValid)) {
            return;
        } else {
            showMask();
            $(this).ajaxSubmit({
                success: function (data) {
                    if (data.success == true) {
                        chanClose(moDify);
                        hideMask();
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