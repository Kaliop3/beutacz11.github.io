let view = false;
let button = function () {
    let menu = document.getElementsByClassName("menu")[0];
    if (view == false) {
        menu.style.display = "block";
        view = true;
    }
    else {
        menu.style.display = "none";
        view = false;
    }
}