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
        if(val==="") {
            v_acc.userValid = false;
            $('#next').addClass('click-no');
            nextButton.disabled = 'disabled';
        }
    });

    $('#forgotForm').on('submit',function (e) {
       e.preventDefault();

    });
}