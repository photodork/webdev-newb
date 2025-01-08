let btn = document.querySelector("#btn");
let body = document.querySelector("#parent");
let info = document.querySelector("#info");
let mode = "light-mode"
btn.addEventListener("click", (e)=>{
    if(mode == "light-mode"){
        body.style.backgroundColor = "black"
        body.style.color = "white"
        info.innerText = "Dark-Mode"
        mode = "dark-mode"
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        info.innerText = "Light-Mode"
        mode = "light-mode"
    }
})