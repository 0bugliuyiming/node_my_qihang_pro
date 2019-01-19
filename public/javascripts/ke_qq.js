let link_login = document.getElementsByClassName("link-login").item(0);
let login_wrap = document.getElementsByClassName("ptlogin-wrap").item(0);
let login_box = document.getElementsByClassName("login-tab").item(0);
let sign_up = document.getElementsByClassName("sign-up").item(0);

let to_sign_up = document.getElementById("to_sign_up");
let to_login = document.getElementsByClassName("clan").item(0);
function login_click(){
    login_wrap.style.display = "block";
    sign_up.style.display = "none";
    login_box.style.display = "block";
    //初始化密码输入框
    let username = document.getElementById("login_name");
    let login_password = document.getElementById("login_password");
    let reg_password = document.getElementById("reg_password");
    let reg_againPassword = document.getElementById("reg_againPassword");
    login_password.value = "";
    reg_password.value = "";
    reg_againPassword.value = "";
    username.setAttribute("placeholder","用户名/手机号");
    username.classList.remove('input-change');
    login_password.setAttribute("placeholder","密码");
    login_password.classList.remove('input-change');
    reg_password.setAttribute("placeholder","密码");
    reg_password.classList.remove('input-change');
    reg_againPassword.setAttribute("placeholder","确认密码");
    reg_againPassword.classList.remove('input-change');
}
//点击“登陆”按钮事件
link_login.onclick = function (){
    login_wrap.style.display = "block";
    sign_up.style.display = "none";
    login_box.style.display = "block";
    //初始化密码输入框
    let username = document.getElementById("login_name");
    let login_password = document.getElementById("login_password");
    let reg_password = document.getElementById("reg_password");
    let reg_againPassword = document.getElementById("reg_againPassword");
    login_password.value = "";
    reg_password.value = "";
    reg_againPassword.value = "";
    username.setAttribute("placeholder","用户名/手机号");
    username.classList.remove('input-change');
    login_password.setAttribute("placeholder","密码");
    login_password.classList.remove('input-change');
    reg_password.setAttribute("placeholder","密码");
    reg_password.classList.remove('input-change');
    reg_againPassword.setAttribute("placeholder","确认密码");
    reg_againPassword.classList.remove('input-change');
};
login_wrap.onclick = function () {
    login_wrap.style.display = "none";
};
login_box.onclick = function (event) {
    login_wrap.style.display = "block";
    event.stopPropagation();
};
sign_up.onclick = function (event) {
    login_wrap.style.display = "block";
    event.stopPropagation();
};


to_sign_up.onclick = function () {
    sign_up.style.display = "block";
    login_box.style.display = "none";
    //注册表单初始化
    let reg_password = document.getElementById("reg_password");
    let reg_againPassword = document.getElementById("reg_againPassword");
    reg_password.value = "";
    reg_againPassword.value = "";
    reg_password.setAttribute("placeholder","密码");
    reg_password.classList.remove('input-change');
    reg_againPassword.setAttribute("placeholder","确认密码");
    reg_againPassword.classList.remove('input-change');
};
to_login.onclick = function () {
    sign_up.style.display = "none";
    login_box.style.display = "block";
    //登陆表单初始化
    let username = document.getElementById("login_name");
    let login_password = document.getElementById("login_password");
    login_password.value = "";
    username.setAttribute("placeholder","用户名/手机号");
    username.classList.remove('input-change');
    login_password.setAttribute("placeholder","密码");
    login_password.classList.remove('input-change');
};


/*表单提交前的非空校验*/
document.getElementById("regForm").onsubmit = function () {
    let password = document.getElementById("reg_password");
    let againPassword = document.getElementById("reg_againPassword");

    if ((password.value == "") || (password.value == null) || (password.value == undefined)) {
        password.setAttribute("placeholder","密码不能为空");
        password.classList.add('input-change');
        return false;
    } else if ((againPassword.value == "") || (againPassword.value == null) || (againPassword.value == undefined)) {
        againPassword.setAttribute("placeholder","请再次输入密码");
        againPassword.classList.add('input-change');
        return false;
    } else if (password.value != againPassword.value) {
        alert("两次密码输入不一致");
        return false;
    } else {
        return true;
    }
};

document.getElementById("loginForm").onsubmit = function () {
    let username = document.getElementById("login_name");
    let password = document.getElementById("login_password");

    if ((username.value == "") || (username.value == null) || (username.value == undefined)){
        username.setAttribute("placeholder","用户名/手机号不能为空");
        username.classList.add('input-change');
        return false;/*阻止表单提交*/
    }else if ((password.value == "") || (password.value == null) || (password.value == undefined)) {
        password.setAttribute("placeholder","密码不能为空");
        password.classList.add('input-change');
        return false;
    }else {
        return true;
    }
};

//密码框的显示和隐藏功能
let view_icon = document.getElementsByClassName('view_icon');
let login_password = document.getElementById("login_password");
let reg_password = document.getElementById("reg_password");
let reg_againPassword = document.getElementById("reg_againPassword");

view_icon.item(0).onclick = function (event) {
    event.stopPropagation();
    if (login_password.type == "password") {
        login_password.type = "text";
        view_icon.item(0).classList.add("isShow");
    }else {
        login_password.type = "password";
        view_icon.item(0).classList.remove("isShow");
    }
};
view_icon.item(1).onclick = function (event) {
    event.stopPropagation();
    if (reg_password.type == "password") {
        reg_password.type = "text";
        view_icon.item(1).classList.add("isShow");
    }else {
        reg_password.type = "password";
        view_icon.item(1).classList.remove("isShow");
    }
};
view_icon.item(2).onclick = function (event) {
    event.stopPropagation();
    if (reg_againPassword.type == "password") {
        reg_againPassword.type = "text";
        view_icon.item(2).classList.add("isShow");
    } else {
        reg_againPassword.type = "password";
        view_icon.item(2).classList.remove("isShow");
    }
};