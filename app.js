const flipBtn = document.querySelector("#flipBtn")
const bColorText = document.querySelector('#backgroundColorText')
const body = document.getElementById("body")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let hexColor;
flipBtn.addEventListener("click", () => { 
    hexColor = "#"
    for(i = 0; i<6; i++) {
        let randomNum = Math.floor(Math.random() * 16) 
        hexColor += hex[randomNum]
    }
    setAllProperties()
})
function setAllProperties() {
    bColorText.textContent = `Background color: ${hexColor}`
    body.style.backgroundColor = hexColor
}