// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};


//rember me

var rem = document.getElementById('rember');
var remInp = rem.getElementsByTagName('input')[0];
var clic = true;
 rem.onclick = function () {
     if (clic == false) {
         dot.style.float = 'left';
         rem.style.backgroundColor = '#eeeeee';
         rem.style.borderColor = '#dcdcdc';
         remInp.value = 0;
         v_login.rememberMe = 0;
         clic = true;
     } else {
         dot.style.float = 'right';
         rem.style.backgroundColor = '#3899eb';
         rem.style.borderColor = '#3899eb';
         remInp.value = 1;
         v_login.rememberMe = 1;
         clic = false;
     }
 };

var v_login;
var refer = getParameterByName("refer", window.location);
$(document).ready(function () {
    iniLogin();
    var logoutUser = getParameterByName("logout");
    if (null !== logoutUser) {
        v_head.logout(logoutUser);
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
            error: '',
            rememberMe: 0
        },
        methods: {}
    });
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // prevent native submit
        if (v_login.username === "") {
            v_login.userValid = false;
        } else {
            v_login.userValid = true;
        }
        if (v_login.password === "") {
            v_login.passValid = false;
        } else {
            v_login.passValid = true;
        }
        if (!(v_login.passValid && v_login.userValid)) {
            return;
        } else {
            showMask();
            $(this).ajaxSubmit({
                url:CONFIG._CTX_+"/login",
                success: function (data) {
                    if (data.success == true) {
                        setCookie(data.cookie);
                    } else {
                        hideMask();
                        if (data.msg === "")
                            v_login.error = "Login in failed!";
                        else
                            v_login.error = data.msg;
                    }

                }
            });
        }
    });
    v_login.$watch("username", function (val) {
        v_login.error = "";
        if (val === "")
            v_login.userValid = false;
        else
            v_login.userValid = true;
    });
    v_login.$watch("password", function (val) {
        v_login.error = "";
        if (val === "")
            v_login.passValid = false;
        else
            v_login.passValid = true;
    });
}

function setCookie(cookie) {
    var now = new Date().getTime();
    var exp = (cookie.exp - now) / 1000;
    Cookies.set('LENOVOITS_TGC', cookie.val, {domain: CONFIG.DOMAIN});
    $.when($.ajax({
        type: 'GET',
        async: false,
        url: CONFIG._CTX_ + "/getDomain",
        dateType: "json",
        data: {ck: cookie.val, isRememberMe: v_login.rememberMe},
        success: function (data) {
            if (data.success == true) {
                var response = jwt_decode(data.response);
                //set domain of all domain
                var domains = response.domain;
                for (var i in domains) {
                    var domainObj = domains[i];
                    callSign(domainObj.sign, domainObj.st, cookie.exp);
                }
            } else {
                if (null !== refer) {
                    window.open(refer,"_self");
                } else {
                    window.open("index.html","_self");
                }
                return false;
            }
        }
    })).done(setTimeout(function () {
        if (null !== refer) {
            window.open(refer,"_self");
        } else {
            window.open("index.html","_self");
        }
    },3000));
}

function callSign(signUrl, cookieVal, cookieExp) {
    var iframe = "<iframe style='display:none' src=" + signUrl + "?st=" + cookieVal + "&exp=" + cookieExp + "></iframe>";
    $("body").append(iframe);
}



