/**
 * Created by shenkai2 on 2/23/2017.
 */
$(document).ready(function () {
    iniAccount();
    iniNew();
    var active = getParameterByName("active");
    if (action=="reset"){
        document.getElementById("info-first").style.display="none";
        document.getElementById("info-second").style.display="block";
        $("#slidTwo").addClass("posssucce");
        $.ajax({
            type:"GET",
            url:_CTX_+"/user/activeCode",
            data:{activeCode:active},
            dataType:"json",
            success:function (data) {
                if(data.success == false){
                    window.location.href="./login.html";
                    window.alert(data.msg);
                }
            }
        });
    }
});

// var acc = getParameterByName("refer")
var action= getParameterByName("action");
var username = getParameterByName("username");
var activeCode = getParameterByName("active");
function iniAccount() {

    v_acc =  new Vue({
        el:'#forgotForm',
        data: {
            username: '',
            userValid: true,
            tipValid:false,
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

    $('#forgotForm').on('submit', function (e) {
        e.preventDefault();
        if (v_acc.userValid === true) {
            showMask();
            $(this).ajaxSubmit({
                success: function (data) {
                    if (data.success == true) {
                        v_acc.tipValid = true;
                    } else {
                        hideMask();
                        v_acc.error = "Can not find this User!";
                    }
                }
            })
        }



    });
}
function iniNew() {
    v_new = new Vue({
        el:'#resetForm',
        data:{
            newPasswd:'',
            conPasswd:'',
            conValid:true,
            error:'',
            activeCode:activeCode,
            userName:username

        }

    });
    var nextTwoButton = document.getElementById('nextTwo');

    v_new.$watch("newPasswd",function (val) {
        v_new.error='';
        if(val===""){
            v_new.conValid = false;
            nextTwoButton.disabled='disabled';
        }
    });

    v_new.$watch("conPasswd",function (val) {
        v_new.error='';
        if(val===v_new.newPasswd &&val!== ''){
            v_new.conValid = true;
            nextTwoButton.disabled='';
            $('#nextTwo').removeClass('click-no');
        }
        else{
            v_new.conValid = false;
        }
    });

    $('#resetForm').on('submit',function (e) {
        e.preventDefault();
        if(v_new.conValid===true){
            showMask();
            $(this).ajaxSubmit({
                success:function (data) {
                    if(data.success== true){
                        document.getElementById("info-second").style.display="none";
                        document.getElementById("info-third").style.display="block";
                        $("#slidTree").addClass("posssucce");
                    }else {
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