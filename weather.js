let url = "https://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes"
document.querySelector("button").addEventListener("click",()=>{
    document.querySelector("#temp").innerText = ""
    document.querySelector("#w").innerText = ""
    let input = document.querySelector("input").value
    if(input == ""){
        document.querySelector("#temp").innerText = "Enter a city!"
    }
    url = `https://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${input}&aqi=yes`
    async function fk(){
        try {
            let promise = await fetch(url)
            let promiseTwo = await promise.json()
            document.querySelector("#w").innerText = promiseTwo.current.condition.text
            document.querySelector("#temp").innerText = promiseTwo.current.temp_c
            console.log(promiseTwo)
        } catch (error) {
            document.querySelector("#temp").innerText = "City not found"
        }
    }
    fk()
})