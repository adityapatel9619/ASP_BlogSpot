document.getElementById('mynewBtn').addEventListener('click', function (e) {

    validateForm();

    e.preventDefault();
})

function validateForm() {
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;

    if (name == "" || name == null) {
        document.getElementById("txtName").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtName").classList.remove("is-invalid");
        document.getElementById("txtName").classList.add("is-valid");
    }

    if (email == "" || email == null) {
        document.getElementById("txtEmail").classList.add("is-invalid");
    }
    else {
        document.getElementById("txtEmail").classList.remove("is-invalid");
        document.getElementById("txtEmail").classList.add("is-valid");
    }

}


