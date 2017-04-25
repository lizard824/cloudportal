/**
 * Created by shenkai2 on 2/13/2017.
 */
//@ sourceURL=reset.js
$(document).ready(function () {
    iniReset();
});

function moClo(e,a){
    $(e).click(function(){
        $(a).remove();
    });
};
moClo('#anclose','#modify');



function iniReset() {
    v_reset = new Vue({
        el: "#resetForm",
        data: {
            newpass: '',
            conpass: '',
            oldpass: '',
            username:'',
            passValid:true,
            conValid: true,
            bonValid: true,
            oldValid: true,
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

            if (val === "" || !val.match(v_reset.newpass)){
                v_reset.conValid = false;
                v_reset.bonValid = false;
            }

            else{
                v_reset.conValid = true;
                v_reset.bonValid = true;
            }

    });
    v_reset.$watch("bonValid",function (val) {
        var moSub = document.getElementById('mo-sub');
        if(val) {
            moSub.style.backgroundColor = '#bee0f3';
            moSub.style.color = '#fff';
            moSub.style.border = 'none';
            moSub.disabled = '';
        }else {
            moSub.style.backgroundColor = '#fff';
            moSub.style.color = '#6a6a6a';
            moSub.style.border = '1px solid #b4d5e3';
            moSub.disabled = 'disabled';
        }

    });

    $("#resetForm").on('submit', function (e){
        e.preventDefault();
        if(v_reset.newpass === ""){
            v_reset.passValid = false;
        }
        else{
            v_reset.passValid =  true;
        }
        if(v_reset.conpass === ""){
            v_reset.conValid = false;
        }
        else{
            v_reset.conValid =  true;
        }
        if(v_reset.oldpass === ""){
            v_reset.oldValid = false;
        }
        else{
            v_reset.oldValid =  true;
        }
        if(!(v_reset.newpass === v_reset.conpass)){
            v_reset.conValid = false;
        }else{
            v_reset.conValid = true;
        }
        if(!(v_reset.passValid && v_reset.conValid && v_reset.oldValid)) {
            return;
        } else {
            v_reset.username = v_head.username;
            showMask();
            $(this).ajaxSubmit({
                url:CONFIG._CTX_+"/user/changePassword",
                type:'POST',
                success: function (data) {
                    if (data.success == true) {
                        moClo('#anclose','#modify');
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