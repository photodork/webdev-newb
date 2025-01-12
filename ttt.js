let box = document.querySelectorAll(".tic")
let game = document.querySelector(".game")
let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
let bool = true
box.forEach((but)=>{
    but.addEventListener("click",(e)=>{
        if(bool == true && but.innerText == ""){ // box.disable = true
            but.innerHTML = "<h1>X<h1/>"
            bool = false
            check()
        }
        else if(bool == false && but.innerText == ""){
            but.innerHTML = "<h1>O</h1>"
            bool = true
            check()
        }
    })
})
function check(){
    for(ele of arr) {
        if(box[ele[0]].innerText != "" && box[ele[1]].innerText != "" && box[ele[2]].innerText != ""){
            if(box[ele[0]].innerText == box[ele[1]].innerText && box[ele[1]].innerText == box[ele[2]].innerText){
                box[ele[0]].style.fontSize = "2rem"
                box[ele[1]].style.fontSize = "2rem"
                box[ele[2]].style.fontSize = "2rem"
                wonMsg(box[ele[0]].innerText)
                end()
                return
            }
        }
        cond = checkDrawCond()
        if(cond){
            drawMsg()
            end()
            return
        }
    }
}
function drawMsg(msg){
    let draw = document.createElement("div")
    draw.innerText = "It's a draw!"
    draw.style.fontSize = "3rem"
    draw.style.display = "flex"
    draw.style.alignItems = "center"
    draw.style.justifyContent = "center"
    draw.style.marginBottom = "10px"
    game.prepend(draw)
}
function wonMsg(msg){
    let win = document.createElement("div")
    win.innerText = msg+" WON!"
    win.style.fontSize = "3rem"
    win.style.display = "flex"
    win.style.alignItems = "center"
    win.style.justifyContent = "center"
    win.style.marginBottom = "10px"
    game.prepend(win)
}
let reset = document.querySelector("#reset")
reset.addEventListener("click",(e)=>{
    location.reload()
})
function end(){
    box.forEach((but)=>{
        but.style.pointerEvents = "none"
    })
}
function checkDrawCond(){
    for(but of box){
        if(but.innerText == ""){
            return false
        }
    }
    return true
}
