let ptlogin_wrap = document.getElementsByClassName('ptlogin-wrap').item(0);
let change_avatar = document.getElementsByClassName('user_avatar').item(0);
let change_avatar_div = document.getElementsByClassName('input_user-avatar').item(0);

change_avatar.onclick = function () {
    ptlogin_wrap.style.display = 'block';
};

ptlogin_wrap.onclick = function () {
    ptlogin_wrap.style.display = 'none';
};

change_avatar_div.onclick = function (event) {
    change_avatar_div.style.display = 'block';
    event.stopPropagation();
};

//预览要上传的头像
let change_img = document.getElementById('xFile');
let picture = document.getElementById('my_local_img');
function getObjectURL(file) {
    var url = null;
    if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
change_img.addEventListener("change", function () {
   let url = getObjectURL(change_img.files[0]);
   console.log(url);
   picture.src = url;
});