let NumItem1 = 0
let NumItem2 = 0
let NumItem3 = 0
let NumItem4 = 0
const Item1 = document.getElementById("item-1")
const Item2 = document.getElementById("item-2")
const Item3 = document.getElementById("item-3")
const Item4 = document.getElementById("item-4")
const MainBlock = document.getElementById("main-block")
const CartContainer = document.getElementsByClassName("cart-container")[0]
const CartItem = document.getElementsByClassName("cart-item")
let CurrentItem = 0
let Moving
Item1.addEventListener("mousedown", function () {
    CurrentItem = 1
    Moving = Item1.cloneNode(true)
    MovingNow()
})
Item2.addEventListener("mousedown", function () {
    CurrentItem = 2
    Moving = Item2.cloneNode(true)
    MovingNow()
})
Item3.addEventListener("mousedown", function () {
    console.log(3)
    CurrentItem = 3
    Moving = Item3.cloneNode(true)
    MovingNow()
})
Item4.addEventListener("mousedown", function () {
    CurrentItem = 4
    Moving = Item4.cloneNode(true)
    MovingNow()
})
function MovingNow() {
    Moving.style.position = "fixed"
    Moving.style.pointerEvents = "none"
    console.log(window.innerWidth)
    if (window.innerWidth > 800) Moving.style.width = "calc(30vw - 40px)"
    else Moving.style.width = "calc(80vw - 40px)"
    MainBlock.appendChild(Moving)
    window.addEventListener("mousemove", function (e) {
        Moving.style.translate = "calc(" + e.clientX + "px - 50%) calc(" + e.clientY + "px - 50%)"
    })
}
CartContainer.addEventListener("mouseup", function () {
    if (CurrentItem !== 0) {
        if(CurrentItem === 1){
            NumItem1++
            UpdateCart()
        }
        else if(CurrentItem === 2){
            NumItem2++
            UpdateCart()
        }
        else if(CurrentItem === 3){
            NumItem3++
            UpdateCart()
        }
        else if(CurrentItem === 4){
            NumItem4++
            UpdateCart()
        }
        CurrentItem = 0
        CartContainer.style.backgroundColor = "#22335599"
        Moving.remove()
    }
})
CartContainer.addEventListener("mouseover", function () {
    if (CurrentItem !== 0) CartContainer.style.backgroundColor = "#112F"
})
CartContainer.addEventListener("mouseout", function () {
    CartContainer.style.backgroundColor = "#22335599"
})
window.addEventListener("mouseup", function () {
    setTimeout(function () {
        if (CurrentItem !== 0) {
            CurrentItem = 0
            Moving.remove()
        }
    }, 0)
})
CartItem[1].addEventListener('click', function () {
    NumItem1 = 0
    UpdateCart()
})
CartItem[2].addEventListener('click', function () {
    NumItem2 = 0
    UpdateCart()
})
CartItem[3].addEventListener('click', function () {
    NumItem3 = 0
    UpdateCart()
})
CartItem[4].addEventListener('click', function () {
    NumItem4 = 0
    UpdateCart()
})
function UpdateCart() {
    CartItem[1].innerText = 'СТАРР:1: ' + NumItem1 + ' шт (' + NumItem1 * 2700 + 'RUB)'
    CartItem[2].innerText = 'СТАРР:2: ' + NumItem2 + ' шт (' + NumItem2 * 800 + 'RUB)'
    CartItem[3].innerText = 'СТАРР:3: ' + NumItem3 + ' шт (' + NumItem3 * 1700 + 'RUB)'
    CartItem[4].innerText = 'СТАРР:4: ' + NumItem4 + ' шт (' + NumItem4 * 1100 + 'RUB)'
    CartItem[5].innerText = 'Общая стоимость: ' + (NumItem1 * 2700 + NumItem2 * 800 + NumItem3 * 1700 + NumItem4 * 1100) + 'RUB'
}