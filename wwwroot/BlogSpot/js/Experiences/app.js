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