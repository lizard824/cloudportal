/**
 * Created by shenkai2 on 2/23/2017.
 */
$(document).ready(function () {
    iniAccount();
});

var acc = getParameterByName("refer")
function iniAccount() {
    v_acc =  new Vue({
        el:'#forgotForm',
        data: {
            username: '',
            userValid: true,
            error: ''
        }

    });


    v_acc.$watch("username",function (val) {
        v_acc.error= '';
        var nextButton = document.getElementById('next');
        if(val==="" ) {
            v_acc.userValid = false;
            nextButton.disabled = 'disabled';
            $('#next').addClass('click-no');
        }
        else
            {
            $('#next').removeClass('click-no');
            v_acc.userValid = true;
            nextButton.disabled = '';
        }
    });

    $('#forgotForm').on('submit',function (e) {
       e.preventDefault();
        if(v_acc.userValid===true){
            showMask();
            $(this).ajaxSubmit({
                success:function (data) {
                    if(data.success== true){
                        window.location.href = "./login.html";
                    }else {
                        hideMask();
                        if (data.msg === "")
                            v_reset.error = "Reset password failed!";
                        else
                            v_reset.error = data.msg;
                    }
                }
            })
        }



    });
}