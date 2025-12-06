let pastAction = [];
let y = "C"

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const points = document.getElementById("points");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
    function stratCase(person){
        switch (person){
            case "deffect":
                return "D";
            case "coop":
                return "C";
            case "randD":
                return y = Math.round(Math.random()*10)===5?"D":"C";
            case "cTill":
                return y = pastAction.at(-1) === "D"||pastAction.at(-2) === "D" ? "D" : "C";
            case "random":
                return y = Math.round(Math.random())? "D": "C";
            case "forgive":
                return y = pastAction.at(-1)==="D"?"D":"C";
            default:
        }
        return person;
    }
    stratCase(player1);
    stratCase(player2);
let num = document.getElementById("num");

document.getElementById("btn").addEventListener("click", () => {
    pastAction = [];
    
    for (let i = 0; i < parseInt(num.value); i++){
        pastAction.push(stratCase(player1.value));
        pastAction.push(stratCase(player2.value));
    }

    
    let p1score = 0;
    let p2score = 0;

    for (let i = 0, x = 1; i < pastAction.length; i += 2, x += 2){
        if (pastAction[i] === pastAction[x]){
            if (pastAction[i]==="C") {
                p1score += 3;
                p2score += 3;
            } else {
                p1score++;
                p2score++;
            }
        } else {
            if (pastAction[i]==="C"){
                p1score++;
                p2score += 5;
            } else {
                p1score += 5;
                p2score++;
    }}}
    points.innerHTML = `
                <div>
                    Player 1: ${p1score} points
                </div>
                <div>
                    Player 2: ${p2score} points
                </div>`;
    
    let p1 = ``;
    let p2 = ``;
    for (let i = 0, x = 1; i < pastAction.length; i += 2, x += 2){
        p1 += pastAction[i] === "D"?`<span class="deffect">${pastAction[i]}&ensp;</span>`:`<span class="coop">${pastAction[i]}&ensp;</span>`;
        p2 += pastAction[x] === "C"?`<span class="coop">${pastAction[x]}&ensp;</span>`:`<span class="deffect">${pastAction[x]}&ensp;</span>`;
        if (i >=50){break}
    } 
    result1.innerHTML = `${p1}`;
    result2.innerHTML = `${p2}`;
    for (let i = 0, x = 1; i < pastAction; i += 2, x += 2){console.log(`player 1: ${pastAction[i]}     player 2: ${pastAction[x]}`)}
});