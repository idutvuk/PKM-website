const MenuContainer = document.getElementById("menu-container")
const MenuOpener = document.getElementById("menu-opener")
const MenuLine = document.getElementsByClassName("menu-line")
let MenuOpened = false
MenuOpener.addEventListener("click", function () {
    if (!MenuOpened) {
        MenuOpen()
    }
    else {
        MenuClose()
    }
})
window.addEventListener("resize", function () {
    MenuOpened = false
    if (window.innerWidth > 800) {
        MenuOpen()
    }
    else {
        MenuClose()
    }
})
function MenuOpen() {
    MenuOpened = true
    MenuContainer.style.translate = "0 0"
    MenuLine[0].style.rotate = "135deg"
    MenuLine[1].style.rotate = "-135deg"
    MenuLine[0].style.translate = "0 6px"
    MenuLine[1].style.translate = "0 -6px"
    MenuLine[2].style.opacity = "0"
    MenuLine[2].style.translate = "0 -24px"
}
function MenuClose() {
    MenuOpened = false
    MenuContainer.style.translate = "0 -100vh"
    MenuLine[0].style.rotate = "0deg"
    MenuLine[1].style.rotate = "0deg"
    MenuLine[0].style.translate = "0 0"
    MenuLine[1].style.translate = "0 0"
    MenuLine[2].style.opacity = "1"
    MenuLine[2].style.translate = "0 0"
}
const Icon = document.getElementById("icon")
Icon.addEventListener("click", function () {
    document.location.href = "history.html"
})