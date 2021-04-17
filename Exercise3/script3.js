let lightBulb = document.getElementById("light-bulb");
let lightBulbBottom = document.getElementById("bulb-bottom")
let on = document.getElementById("on");
let off = document.getElementById("off");
let toggle = document.getElementById("toggle");
let end = document.getElementById("end");

on.addEventListener("click", (e) => {
    lightBulb.classList.remove("off")
    lightBulb.classList.add("on");
});

off.addEventListener("click", (e) => {
    lightBulb.classList.remove("on")
    lightBulb.classList.add("off")
});

toggle.addEventListener("click", (e) => {
    lightBulb.classList.toggle("on")
    lightBulb.classList.toggle("off")
});

end.addEventListener("click", (e) => {
    lightBulb.remove();
    lightBulbBottom.remove();

    let disableButtons = document.querySelectorAll("button");
    for (let button of disableButtons) {
        button.disabled = true;
    }

    let message = document.createElement("div");
    message.innerText = "You will now live the remainder of your life in darkness.";
    message.classList.add("main")
    let messageDiv = document.getElementById("main");
    messageDiv.append(message);
    
});

