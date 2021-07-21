var mybutton = document.getElementById('myBtn');

window.onscroll = function () {
    scrollFunction();
}
window.onload = function () {
    document.getElementById("loading").style.display = 'block';
    setTimeout(showData, 1000);

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


function showData() {
    document.getElementById("loading").style.display = 'none';
    document.getElementById("content-body").style.display = 'block';
}

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
    else {
        alert("Login Falied");
        document.getElementById('txtId').value = "";
        document.getElementById('txtPwd').value = "";
    }

})

function reDirect() {
    window.location.href = '/Pages/CreateBlog';
}