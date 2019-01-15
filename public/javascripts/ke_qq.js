let link_login = document.getElementsByClassName("link-login").item(0);
let login_wrap = document.getElementsByClassName("ptlogin-wrap").item(0);
let login_box = document.getElementsByClassName("login-tab").item(0);
let sign_up = document.getElementsByClassName("sign-up").item(0);

let to_sign_up = document.getElementById("to_sign_up");
let to_login = document.getElementsByClassName("clan").item(0);

link_login.onclick = function (){
    login_wrap.style.display = "block";
    sign_up.style.display = "none";
    login_box.style.display = "block";
}
login_wrap.onclick = function () {
    login_wrap.style.display = "none";
}
login_box.onclick = function (event) {
    login_wrap.style.display = "block";
    event.stopPropagation();
}
sign_up.onclick = function (event) {
    login_wrap.style.display = "block";
    event.stopPropagation();
}


to_sign_up.onclick = function () {
    sign_up.style.display = "block";
    login_box.style.display = "none";
}
to_login.onclick = function () {
    sign_up.style.display = "none";
    login_box.style.display = "block";
}