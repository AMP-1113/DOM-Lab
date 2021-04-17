// DOM Lab

// Task 

let total = document.getElementById("total");
let cola = document.getElementById("lime-cola");
let peanuts = document.getElementById("salted-peanuts");
let chocolate = document.getElementById("chocolate-bar");
let gummies = document.getElementById("fruit-gummies");
let cost;
let totalCost = 0;

cola.addEventListener("click", (e) => {
    e.preventDefault();
    cost = 2;
    totalCost += cost;
    total.innerText = `Total: $${totalCost}`;
});

peanuts.addEventListener("click", (e) => {
    e.preventDefault();
    cost = 3;
    totalCost += cost;
    total.innerText = `Total: $${totalCost}`;
});
 
chocolate.addEventListener("click", (e) => {
    e.preventDefault();
    cost = 4;
    totalCost += cost;
    total.innerText = `Total: $${totalCost}`;
});

gummies.addEventListener("click", (e) => {
    e.preventDefault();
    cost = 6;
    totalCost += cost;
    total.innerText = `Total: $${totalCost}`;
});


//Task 2

