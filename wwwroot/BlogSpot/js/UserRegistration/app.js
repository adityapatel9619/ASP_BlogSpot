
//window.onload = function () {
//    document.getElementById("loading").style.display = 'block';
//    setTimeout(showData, 1000);
//}

//function showData() {
//    document.getElementById("loading").style.display = 'none';
//    document.getElementById("content-body").style.display = 'block';
//}

document.getElementById("myBtnSubmit").addEventListener("click", function (e) {

    validateForm();

    e.preventDefault();
})

function validateForm() {
    let fname = document.getElementById("txtFName").value;
    let mname = document.getElementById("txtMName").value;
    let lname = document.getElementById("txtLName").value;
    let pbname = document.getElementById("txtPBName").value;
    let tel = document.getElementById("txtTel").value;
    let age = document.getElementById("txtAge").value;
    let dob = document.getElementById("txtDob").value;
    let usrnm= document.getElementById("txtUSRName").value;
    let pwd = document.getElementById("txtPwd").value;
    let cnfpwd = document.getElementById("txtCnfPwd").value;

    // first name
    if (fname == "" || fname == null) {
        document.getElementById("txtFName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtFName").classList.remove("is-invalid");
        document.getElementById("txtFName").classList.add("is-valid");
    }

    // middle name
    if (mname == "" || mname == null) {
        document.getElementById("txtMName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtMName").classList.remove("is-invalid");
        document.getElementById("txtMName").classList.add("is-valid");
    }

    // last name
    if (lname == "" || lname == null) {
        document.getElementById("txtLName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtLName").classList.remove("is-invalid");
        document.getElementById("txtLName").classList.add("is-valid");
    }

    // Public Blogging Name
    if (pbname == "" || pbname == null) {
        document.getElementById("txtPBName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtPBName").classList.remove("is-invalid");
        document.getElementById("txtPBName").classList.add("is-valid");
    }

    // Telephone
    if (tel == "" || tel == null) {
        document.getElementById("txtTel").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtTel").classList.remove("is-invalid");
        document.getElementById("txtTel").classList.add("is-valid");
    }

    // Age
    if (age == "" || age == null) {
        document.getElementById("txtAge").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtAge").classList.remove("is-invalid");
        document.getElementById("txtAge").classList.add("is-valid");
    }

    //DoB
    if (dob == "" || dob == null) {
        document.getElementById("txtDob").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtDob").classList.remove("is-invalid");
        document.getElementById("txtDob").classList.add("is-valid");
    }

    // Username
    if (usrnm == "" || usrnm == null) {
        document.getElementById("txtUSRName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtUSRName").classList.remove("is-invalid");
        document.getElementById("txtUSRName").classList.add("is-valid");
    }

    // Password
    if (pwd == "" || pwd == null) {
        document.getElementById("txtPwd").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtPwd").classList.remove("is-invalid");
        document.getElementById("txtPwd").classList.add("is-valid");
    }

    // Confirm Password
    if (cnfpwd == "" || cnfpwd == null) {
        document.getElementById("txtCnfPwd").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtCnfPwd").classList.remove("is-invalid");
        document.getElementById("txtCnfPwd").classList.add("is-valid");
    }
}