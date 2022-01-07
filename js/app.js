document.onscroll = function (e) {
    document.querySelector(".headerbg").setAttribute("style", "top: -" + (window.scrollY / 2) + "px");
}