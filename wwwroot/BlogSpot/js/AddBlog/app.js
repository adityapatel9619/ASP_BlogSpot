// Shwowing and hiding of paragraph
var paraThree = document.getElementById("Para3");
var paraAdd = document.getElementById("addPara");
paraThree.style.display = "none";

document.getElementById("addPara-icon").addEventListener('click', function () {
    paraThree.style.display = "block";
    paraAdd.style.display = "none";
})

document.getElementById("removePara-icon").addEventListener('click', function () {
    paraThree.style.display = "none";
    paraAdd.style.display = "block";
})

// reload window
document.getElementById("btnClear").addEventListener('click', function () {
    window.location.reload();
})


document.getElementById("btnSubmit").addEventListener('click', function () {
    validateFeild();
})


function validateFeild() {
    // for validation
    let valTxtTitle = myTrim(document.getElementById("txtTitle").value);
    let valTxtParaOne = myTrim(document.getElementById("txtPara1").value);
    let valTxtParaTwo = myTrim(document.getElementById("txtPara2").value);

    // Title
    if (valTxtTitle == "" || valTxtTitle == null) {
        document.getElementById("txtTitle").style.borderColor = 'red';
        document.getElementById("txtTitle").style.background = "#FFCECE";
    }
    else {
        document.getElementById("txtTitle").style.borderColor = 'green';
        document.getElementById("txtTitle").style.background = "";
    }

    // Paragraph 1
    if (valTxtParaOne == "" || valTxtParaOne == null) {
        document.getElementById("txtPara1").style.borderColor = 'red';
        document.getElementById("txtPara1").style.background = "#FFCECE";
    }
    else {
        document.getElementById("txtPara1").style.borderColor = 'green';
        document.getElementById("txtPara1").style.background = "";
    }

    // Paragraph 2
    if (valTxtParaTwo == "" || valTxtParaTwo == null) {
        document.getElementById("txtPara2").style.borderColor = 'red';
        document.getElementById("txtPara2").style.background = "#FFCECE";
    }
    else {
        document.getElementById("txtPara2").style.borderColor = 'green';
        document.getElementById("txtPara2").style.background = "";
    }

}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}