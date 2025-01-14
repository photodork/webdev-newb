let arr = []

let input = document.querySelector("#inp")
let previous = document.querySelector("#pre")
let rem = document.querySelector("#remain")

let a = Math.floor(Math.random()*100)+1

let reset = document.querySelector("#res")
reset.addEventListener("click",()=>{
    location.reload()
})

let btn = document.querySelector("#btn")
function end(){
    btn.style.pointerEvents = "none"
}
let rev = document.querySelector(".mess")
btn.addEventListener("click",(e)=>{
    if(!input.value || isNaN(input.value)){
        rev.innerText = "NaN"
    }
    else if(rem.innerText == 0){
        rev.innerText = "No attempts left"
        reset.innerText = "Restart"
        end()
    }
    else if(rem.innerText != 0){
        arr.push(input.value)
        previous.innerText = arr
        rem.innerText -= 1
        if(parseFloat(input.value) < a){
            rev.innerText = "Guess a larger number"
        }
        else if(parseFloat(input.value) > a){
            rev.innerText = "Guess a smaller number"
        }
        else{
            rev.innerText = `Correct Guess in ${10 - rem.innerText} attempt(s)!`
            reset.innerText = "Restart"
            end()
        }
    }
})