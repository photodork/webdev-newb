let body = document.querySelector("body");
let theme = document.querySelector("#theme")
let mode = "Light-Mode"
theme.addEventListener("click",(e)=>{
    if(mode == "Light-Mode"){
        body.style.backgroundColor = "black"
        body.style.color = "white"
        mode = "Dark-Mode"
        theme.innerText = mode
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        mode = "Light-Mode"
        theme.innerText = mode
    }
})
let main = document.querySelector("#calc")
calc.addEventListener("click",(e)=>{
    let inp = document.querySelectorAll("input")
    let weight = parseFloat(inp[0].value)
    let height = parseFloat(inp[1].value)
    height = height/100
    let bmi = weight / height**2
    let answer = document.createElement("p")
    answer.innerText = `${Math.round(bmi*100)/100}` //or use bmi.toFixed(2)
    let result=document.querySelector(".res")
    result.innerText=""
    result.appendChild(answer)
})