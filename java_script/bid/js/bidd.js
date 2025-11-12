const who = document.getElementById("person");
const bid = document.getElementById("cash");
const btn = document.getElementById("button");
const win = document.getElementById("winning");
const stuff = document.getElementById("stuff");
const count = document.getElementById("entries");
const clear = document.getElementById("clear");

let bids = JSON.parse(localStorage.getItem("bids"));
let amount = JSON.parse(localStorage.getItem("amount"));

if (bids === null) {bids = [];amount = [];}

let bidWName = localStorage.getItem("bidWName");
let bidWCount = localStorage.getItem("bidWCount");

clear.addEventListener("click", () => {
    bids = [];
    amount = [];
    bidWName = "No one";
    bidWCount = 0;
    saveBids(1);
    num();
    win.innerHTML = "No one has bid."
});

btn.addEventListener("click",async() => {
    let change = 0;
    if (bidWCount < parseFloat(bid.value)) {
        bidWName = who.value;
        bidWCount = parseFloat(bid.value);
        change = 1
    }
    try{
        bids.push(who.value)
        amount.push(parseFloat(bid.value));
    }
    catch(error){
        bids = [who.value]
        amount = [parseFloat(bid.value)];
    };
    saveBids(change);
    num();
    entered()
    winner()
});

function saveBids(setWin){
    localStorage.setItem("bids", JSON.stringify(bids));
    localStorage.setItem("amount", JSON.stringify(amount));
    if (setWin) {
        localStorage.setItem("bidWName", who.value);
        localStorage.setItem("bidWCount", bid.value);
    }
}

function winner () {win.innerHTML = `${bidWName} is winning with a bid of ${bidWCount}.`;}
function num() {count.innerHTML = `Total entries: ${bids.length > 0 ? bids.length: 0}`;}

function entered () {
    let entries = ``;
    for (items in bids) {
        entries += `${bids[items]}: $${amount[items]}<br>`;
    }
    stuff.innerHTML = entries;
}

winner();