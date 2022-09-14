
let box = document.getElementById("box")
let topLeft = document.getElementById("topleft")
let topRight = document.getElementById("topright")
let botLeft = document.getElementById("botleft")
let botRight = document.getElementById("botright")

topRight.addEventListener("input", function(evt){ 
    let trValue = evt.target.value
    box.style.borderTopRightRadius = `${trValue}px`
})
topLeft.addEventListener("input", function(evt){ 
    let trValue = evt.target.value
    box.style.borderTopLeftRadius = `${trValue}px`
})
botLeft.addEventListener("input", function(evt){ 
    let trValue = evt.target.value
    box.style.borderBottomLeftRadius = `${trValue}px`
})
botRight.addEventListener("input", function(evt){ 
    let trValue = evt.target.value
    box.style.borderBottomRightRadius = `${trValue}px`
})

let boxCS = window.getComputedStyle(box)

console.log(boxCS.borderRadius);