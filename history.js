const Main = document.querySelector("main")
for (let i = 0; i < 100; i++) {
    let Line = document.createElement("div")
    console.log(Math.floor(Math.random() * 100 - 50) + "px " + Math.floor(Math.random() * 100 - 50) + "px")
    Line.className = "line"
    Line.style.translate = Math.floor(Math.random() * 200 - 100) + "vw " + Math.floor(Math.random() * 200 - 100) + "vh"
    Line.style.rotate = Math.floor(Math.random() * 360) + "deg"
    Main.appendChild(Line)
}