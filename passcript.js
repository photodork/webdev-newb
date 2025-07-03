function checkStrength(){
    var password = document.getElementById("in").value;
    var strength = 0;
    const commonPasswords = [
        "password",
        "123123",
        "abc123",
        "password1",
        "iloveyou",
        "123321",
        "1q2w3e4r",
        "monkey",
        "dragon",
        "654321",
        "superman",
        "asdfghjkl",
        "admin",
        "welcome",
        "login",
        "princess",
        "letmein",
        "football",
        "baseball",
        "starwars",
        "hello",
        "freedom",
        "whatever",
        "trustno1",
        "batman",
        "shadow",
        "passw0rd",
        "master",
        "qazwsx",
        "zaq1zaq1"
    ];
    let div = document.querySelector(".outerbox");
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.length >= 12) {
        strength += 1;
    }
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }
    if (/[a-z]/.test(password)) {
        strength += 1;
    }
    if (/\d/.test(password)) {
        strength += 1;
    }
    if (/[\W_]/.test(password)) {
        strength += 1;
    }
    if (/abc|123|abcd|qwerty/i.test(password)){
        strength = 1;
    }
    if (/^(.)\1+$/.test(password)){
        strength = 1;
    } 
    if (commonPasswords.includes(password.toLowerCase())){
        strength = 1;
    } 

    var strengthText = "";
    switch (strength) {
        case 0:
            strengthText = "Enter a password!";
            div.style.borderColor = "#023e7d";
            break;
        case 1:
            strengthText = "Very Weak";
            div.style.borderColor = "#B00020";
            break;
        case 2:
            strengthText = "Weak";
            div.style.borderColor = "#FF6F00";
            break;
        case 3:
            strengthText = "Good";
            div.style.borderColor = "#FFB300";
            break;
        case 4:
            strengthText = "Strong";
            div.style.borderColor = "#1E88E5";
            break;
        case 5:
            strengthText = "Very Strong";
            div.style.borderColor = "#43A047";
            break;
        case 6:
            strengthText = "Excellent";
            div.style.borderColor = "#00C853";
            break;
    }
    let child = document.querySelector("#child");
    child.innerText = strengthText;
}
function toggle(){
    const passin = document.querySelector("#in");
    const icon = document.querySelector("#toggle");
    const type = passin.getAttribute("type") 
    if( type === 'password') {
        passin.setAttribute("type", "text");
        icon.textContent = 'Hide';
    }else{
        passin.setAttribute("type", "password");
        icon.textContent = 'Show';
    }
}
function copy(){
    const passin = document.querySelector("#in");
    if(!passin.value) {
        return;
    }
    passin.select();
    document.execCommand("copy");
    const msg = document.querySelector("#copymsg");
    msg.innerText = "Password copied to clipboard!";
    msg.style.color = "green";
    setTimeout(() => msg.innerText = "", 2000);
}
