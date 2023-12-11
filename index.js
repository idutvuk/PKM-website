let Background = document.getElementById("background-image")
let MainName = document.getElementById("main-name")
document.addEventListener('scroll', function () {
    if (window.scrollY < 400) {
        Background.style.scale = (1 + window.scrollY / 400) + ""
        if (window.innerWidth > 1000) {
            MainName.style.translate = "0 " + (window.scrollY / 2) + "px"
        }
        else {
            MainName.style.translate = "0 " + (window.scrollY / 15) + "vw"
        }
    }
})