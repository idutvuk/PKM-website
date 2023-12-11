const ImgContainer = document.getElementById("img-container")
const PrSnow = document.getElementById("pr-snow")
document.addEventListener("scroll", function () {
    if (window.scrollY < 180) {
        ImgContainer.style.left = (10 - window.scrollY / 180 * 8) + "vw"
        PrSnow.style.maxHeight = (360 - window.scrollY) + "px"
    }
    else {
        ImgContainer.style.left = "2vw"
        PrSnow.style.maxHeight = "180px"
    }
})
let Item1 = 0
let Item2 = 0
let Item3 = 0
let Item4 = 0
const ItemAdd = document.getElementsByClassName("item-add")
function AddToCart(num) {
    switch (num) {
        case 1: {
            Item1++
            if(Item1 === 1){
                ItemAdd[0].innerText = "Добавлено!"
            }
            else{
                ItemAdd[0].innerText = "Добавлено! x" + Item1
            }
            break
        }
        case 2: {
            Item2++
            if(Item2 === 1){
                ItemAdd[1].innerText = "Добавлено!"
            }
            else{
                ItemAdd[1].innerText = "Добавлено! x" + Item2
            }
            break
        }
        case 3: {
            Item3++
            if(Item3 === 1){
                ItemAdd[2].innerText = "Добавлено!"
            }
            else{
                ItemAdd[2].innerText = "Добавлено! x" + Item3
            }
            break
        }
        case 4: {
            Item4++
            if(Item4 === 1){
                ItemAdd[3].innerText = "Добавлено!"
            }
            else{
                ItemAdd[3].innerText = "Добавлено! x" + Item4
            }
            break
        }
    }
}
const Content = document.getElementById("content")
function OpenCart() {
    let Back = document.createElement("div")
    Back.className = "cart-background"
    Content.appendChild(Back)
    let Cart = document.createElement("div")
    Cart.className = "cart-container"
    Content.appendChild(Cart)
    let CartName = document.createElement("div")
    let Cart1 = document.createElement("div")
    let Cart2 = document.createElement("div")
    let Cart3 = document.createElement("div")
    let Cart4 = document.createElement("div")
    let CartSum = document.createElement("div")
    let CartApply = document.createElement("div")
    CartName.className = "cart-item"
    Cart1.className = "cart-item"
    Cart2.className = "cart-item"
    Cart3.className = "cart-item"
    Cart4.className = "cart-item"
    CartSum.className = "cart-item"
    CartApply.className = "cart-button"
    CartName.innerText = "Корзина"
    Cart1.innerText = 'Вьюга: ' + Item1 + ' шт (' + Item1 * 0.1 + 'RUB)'
    Cart2.innerText = 'Метель: ' + Item2 + ' шт (' + Item2 * 10 + 'RUB)'
    Cart3.innerText = 'Буран: ' + Item3 + ' шт (' + Item3 * 100 + 'RUB)'
    Cart4.innerText = 'Сибирьff: ' + Item4 + ' шт (' + Item4 * 3400 + 'RUB)'
    CartSum.innerText = 'Общая стоимость: ' + (Item1 * 0.1 + Item2 * 10 + Item3 * 100 + Item4 * 3400) + 'RUB'
    CartApply.innerText = 'Принять'
    Cart1.addEventListener('click', function () {
        RemoveFromCart(1)
        Cart1.innerText = 'Вьюга: ' + Item1 + ' шт (' + Item1 * 0.1 + 'RUB)'
        CartSum.innerText = 'Общая стоимость: ' + (Item1 * 0.1 + Item2 * 10 + Item3 * 100 + Item4 * 3400) + 'RUB'
    })
    Cart2.addEventListener('click', function () {
        RemoveFromCart(2)
        Cart2.innerText = 'Метель: ' + Item2 + ' шт (' + Item2 * 10 + 'RUB)'
        CartSum.innerText = 'Общая стоимость: ' + (Item1 * 0.1 + Item2 * 10 + Item3 * 100 + Item4 * 3400) + 'RUB'
    })
    Cart3.addEventListener('click', function () {
        RemoveFromCart(3)
        Cart3.innerText = 'Буран: ' + Item3 + ' шт (' + Item3 * 100 + 'RUB)'
        CartSum.innerText = 'Общая стоимость: ' + (Item1 * 0.1 + Item2 * 10 + Item3 * 100 + Item4 * 3400) + 'RUB'
    })
    Cart4.addEventListener('click', function () {
        RemoveFromCart(4)
        Cart4.innerText = 'Сибирь: ' + Item4 + ' шт (' + Item4 * 3400 + 'RUB)'
        CartSum.innerText = 'Общая стоимость: ' + (Item1 * 1000 + Item2 * 1800 + Item3 * 1400 + Item4 * 3400) + 'RUB'
    })
    CartApply.addEventListener('click', function () {
        Back.remove()
        Cart.remove()
    })
    Back.addEventListener('click', function () {
        Back.remove()
        Cart.remove()
    })
    Cart.appendChild(CartName)
    Cart.appendChild(Cart1)
    Cart.appendChild(Cart2)
    Cart.appendChild(Cart3)
    Cart.appendChild(Cart4)
    Cart.appendChild(CartSum)
    Cart.appendChild(CartApply)
}
function RemoveFromCart(num) {
    switch (num) {
        case 1: {
            Item1 = 0
            ItemAdd[0].innerText = "Добавить в корзину"
            break
        }
        case 2: {
            Item2 = 0
            ItemAdd[1].innerText = "Добавить в корзину"
            break
        }
        case 3: {
            Item3 = 0
            ItemAdd[2].innerText = "Добавить в корзину"
            break
        }
        case 4: {
            Item4 = 0
            ItemAdd[3].innerText = "Добавить в корзину"
            break
        }
    }
}
const CartOpen = document.getElementById("cart-open")
document.addEventListener('scroll', function () {
    if (window.scrollY > 0) CartOpen.style.opacity = "1"
    else CartOpen.style.opacity = "0"
})