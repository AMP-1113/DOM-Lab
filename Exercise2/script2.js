let button = document.getElementById("button");
let numInput = document.getElementById("how-many")
let whichCoin = document.getElementById("which-coin");
let total = document.getElementById("total");
let cost;
let moneyCounter = 0;

button.addEventListener("click", (e) => {
    let coinQuantity = numInput.value;
    let coinUserChoice = whichCoin.value;
    e.preventDefault();

    if (coinUserChoice === "penny") {
      for (let i = 0; i < coinQuantity; i++) {
        cost = .01;
        moneyCounter += cost;
        total.innerText = `Total: $${moneyCounter.toFixed(2)}`;
      let pennyNew = document.createElement("div");
      pennyNew.innerText = "1¢";
      pennyNew.classList.add("coins", "penny")
      let pennyDiv = document.getElementById("coins");
      pennyDiv.append(pennyNew);

        pennyNew.addEventListener("click", (e) => {
        pennyNew.remove();
        moneyCounter -= cost;
        }); 
      }
    } else if (coinUserChoice === "nickel") {
      for (let i = 0; i < coinQuantity; i++) {
        cost = .05;
        moneyCounter += cost;
        total.innerText = `Total: $${moneyCounter.toFixed(2)}`;
      let nickelNew = document.createElement("div");
      nickelNew.innerText = "5¢";
      nickelNew.classList.add("coins", "nickel")
      let nickelDiv = document.getElementById("coins");
      nickelDiv.append(nickelNew);
        
      nickelNew.addEventListener("click", (e) => {
        nickelNew.remove();
        });
      };
    } else if (coinUserChoice === "dime") {
      for (let i = 0; i < coinQuantity; i++) {
        cost = .1;
        moneyCounter += cost;
        total.innerText = `Total: $${moneyCounter.toFixed(2)}`;
        let dimeNew = document.createElement("div");
        dimeNew.innerText = "10¢";
        dimeNew.classList.add("coins", "dime")
        let dimeDiv = document.getElementById("coins");
        dimeDiv.append(dimeNew);
        
        dimeNew.addEventListener("click", (e) => {
          dimeNew.remove();
          });
        };
    } else {
      for (let i = 0; i < coinQuantity; i++) {
        cost = .25;
        moneyCounter += cost;
        total.innerText = `Total: $${moneyCounter.toFixed(2)}`;
        let quarterNew = document.createElement("div");
        quarterNew.innerText = "25¢";
        quarterNew.classList.add("coins", "quarter");
        let quarterDiv = document.getElementById("coins");
        quarterDiv.append(quarterNew);
      
        quarterNew.addEventListener("click", (e) => {
          quarterNew.remove();
          });
        };
    };
  
});

/*
let updatedTotal = document.createElement("div");
    updatedTotal.innerText = `Total = $${moneyCounter.toFixed(2)}`;
    let totalDiv = document.getElementById("total");
    totalDiv.append(updatedTotal);
    console.log(moneyCounter)

    */