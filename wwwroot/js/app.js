var mybutton = document.getElementById('myBtn');
var lgButton = document.getElementById('lgBtn');

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

document.getElementById('myBtn').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

document.getElementById('lgBtn').addEventListener('click', function () {

    let username = document.getElementById('txtId').value;
    let password = document.getElementById('txtPwd').value;


    if (username == "" || username == null) {
        document.getElementById('txtId').classList.add('is-invalid');
        return false;
    }

    if (password == "" || password == null) {
        document.getElementById('txtPwd').classList.add('is-invalid');
        return false;
    }


    if (username == "user" && password == "123") {
        document.getElementById('txtId').classList.remove('is-invalid');
        document.getElementById('txtPwd').classList.remove('is-invalid');
        reDirect();
    }
    else if (username == "admin" && password == "admin") {
        document.getElementById('txtId').classList.remove('is-invalid');
        document.getElementById('txtPwd').classList.remove('is-invalid');
        reDirectAdmin(username, password);
    }
    else {
        alert("Login Falied");
        document.getElementById('txtId').value = "";
        document.getElementById('txtPwd').value = "";
         }

    

})

function reDirect() {
    window.location.href= '/Pages/CreateBlog';
}
var u,p
function reDirectAdmin(u,p) {
    window.location.href = '/Admin/Index';
}
