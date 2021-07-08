
var myNav = document.getElementById('mynav');
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 200) {
        myNav.classList.add("scrolled");
        myNav.classList.remove("bg-dark");
    }
    else {
        myNav.classList.add("bg-dark");
        myNav.classList.remove("scrolled");
    }
}