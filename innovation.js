const PlanChoice = document.getElementsByClassName("plan-choice")
const PlanPrice = document.getElementsByClassName("plan-price")
const PlanTry = document.getElementsByClassName("plan-try")
const Main = document.querySelector("main")
let PriceFor0 = "80"
let PriceFor1 = "90"
let PriceFor2 = "100"
PlanChoice[0].style.backgroundColor = "black"
PlanChoice[0].style.color = "white"
PlanChoice[0].addEventListener("click", function () {
    PlanChoice[0].style.backgroundColor = "black"
    PlanChoice[0].style.color = "white"
    PlanChoice[1].style.backgroundColor = "initial"
    PlanChoice[1].style.color = "initial"
    PlanChoice[2].style.backgroundColor = "initial"
    PlanChoice[2].style.color = "initial"
    PlanPrice[0].innerText = "80"
    PlanPrice[1].innerText = "90"
    PlanPrice[2].innerText = "100"
    PriceFor0 = "80"
    PriceFor1 = "90"
    PriceFor2 = "100"
})
PlanChoice[1].addEventListener("click", function () {
    PlanChoice[0].style.backgroundColor = "initial"
    PlanChoice[0].style.color = "initial"
    PlanChoice[1].style.backgroundColor = "black"
    PlanChoice[1].style.color = "white"
    PlanChoice[2].style.backgroundColor = "initial"
    PlanChoice[2].style.color = "initial"
    PlanPrice[0].innerText = "240"
    PlanPrice[1].innerText = "270"
    PlanPrice[2].innerText = "300"
    PriceFor0 = "240"
    PriceFor1 = "270"
    PriceFor2 = "300"
})
PlanChoice[2].addEventListener("click", function () {
    PlanChoice[0].style.backgroundColor = "initial"
    PlanChoice[0].style.color = "initial"
    PlanChoice[1].style.backgroundColor = "initial"
    PlanChoice[1].style.color = "initial"
    PlanChoice[2].style.backgroundColor = "black"
    PlanChoice[2].style.color = "white"
    PlanPrice[0].innerText = "960"
    PlanPrice[1].innerText = "980"
    PlanPrice[2].innerText = "1200"
    PriceFor0 = "960"
    PriceFor1 = "980"
    PriceFor2 = "1200"
})
const GoToForm = document.getElementById("go-to-form")
GoToForm.addEventListener('click', function () {
    window.location.href = "form.html"
})
const SeeStudies = document.getElementById("see-studies")
function Trust() {
    SeeStudies.innerText = "Поверьте нам!"
}
PlanTry[0].addEventListener("click", function () {
    let Oops = document.createElement("div")
    Oops.className = "error"
    Oops.innerText = "Oтлично! \nС вашего счета списано " + PriceFor0
    Main.appendChild(Oops)
    setTimeout(function () {
        Oops.style.top = "0"
        Oops.style.opacity = "0"
        setTimeout(function () {
            Oops.remove()
        }, 1000)
    }, 1000)
})
PlanTry[1].addEventListener("click", function () {
    let Oops = document.createElement("div")
    Oops.className = "error"
    Oops.innerText = "Oтлично! \nС вашего счета списано " + PriceFor1
    Main.appendChild(Oops)
    setTimeout(function () {
        Oops.style.top = "0"
        Oops.style.opacity = "0"
        setTimeout(function () {
            Oops.remove()
        }, 1000)
    }, 1000)
})
PlanTry[2].addEventListener("click", function () {
    let Oops = document.createElement("div")
    Oops.className = "error"
    Oops.innerText = "Отлично! \nС вашего счета списано " + PriceFor2
    Main.appendChild(Oops)
    setTimeout(function () {
        Oops.style.top = "0"
        Oops.style.opacity = "0"
        setTimeout(function () {
            Oops.remove()
        }, 1000)
    }, 1000)
})