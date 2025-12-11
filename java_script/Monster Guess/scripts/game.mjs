const info = document.getElementById('info');
const moreInfoButton = document.getElementById('more');
const submitButton = document.getElementById('submit');
const answerInput = document.getElementById('answer');

async function getMonsterInfo() {
    let monster = Math.floor(Math.random()*33);
    let points = 100;
    let partsGiven = [];
    let rewardsGiven = [];
    const response = await fetch(`https://wilds.mhdb.io/en/monsters/${monster}`);
    const data = await response.json();
    console.log(data);
    info.innerHTML = `
                    <div class="hint">
                        This monster is a ${data.species} type monster. It has a base health of ${data.baseHealth} and size range of ${data.size.mini}m-${data.size.gold}m, averaging at ${data.size.base}m.
                    </div>`;

    document.getElementById('score').innerText = `Current Points: ${points}`;

    moreInfoButton.addEventListener('click', () => {
        const hintType = document.getElementById('hintType');

        function giveRand(list, max){
            let rand = Math.floor(Math.random()*max)
            return rand = list.indexOf(rand) === -1? rand : giveRand(list, max)
        }

        switch (hintType.value){
            case "ailment":
                points -= 15;
                if (data.ailments.length === 0) {
                    info.innerHTML += `<div class="hint">This monster does not inflict any standard ailments if any.</div>`;
                    break;
                }
                info.innerHTML += `<div class="hint">This monster can inflict the following ailments: ${data.ailments.join("")}</div>`;
                break;
            case "description":
                points -= 30;
                info.innerHTML += `<div class="hint">${data.description}</div>`;
                break;
            case "location":
                points -= 5;
                info.innerHTML += `<div class="hint">This monster can be found in: ${data.locations.map((local) => {
                    return `${local.name}`;
                })}</div>`;
                break;
            case "parts":
                points -= 15;
                partsGiven.push(giveRand(partsGiven, data.parts.length-1));
                info.innerHTML += `<div class="hint">This monster has the following part: ${data.parts[partsGiven.at(-1)].name}</div>`;
                console.log(data.parts[partsGiven.at(-1)].name);
                break;
            case "resistances":
                points -= 10;
                info.innerHTML += `<div class="hint">This monster has the following resistances: ${data.resistances.map((res)=> {
                    return ` ${res[res.kind] }`;
                })}</div>`;
                break;
            case "Rewards":
                points -= 25;
                rewardsGiven.push(giveRand(rewardsGiven, data.rewards));
                info.innerHTML += `<div class="hint">This monster can reward you with: ${data.rewards[rewardsGiven.at(-1)].item.name}</div>`;
                break;
            case "variants":
                points -= 5;
                info.innerHTML += `<div class="hint">This monster has the following variants: ${data.variants.map((vari)=>{
                    return ` ${vari.kind}`;
                })}</div>`;
                break;
            case "weakness":
                points -= 10;
                info.innerHTML += `<div class="hint">This monster is weak to: ${data.weaknesses.map((weak)=> {
                    return `  ${weak[weak.kind]}`;
                })}</div>`;
                break;
            default:
                console.log("Error in more info switch statements info.value");
        }
        if (points < 0) {
            points = 0;
            gameEnded();
        }
        document.getElementById('score').innerText = `Current Points: ${points}`;
    });

    function gameEnded(){
        const answer = answerInput.value.toLowerCase();
        if (answer === data.name.toLowerCase()) {
            alert(`Correct! You guessed the monster ${data.name} and earned ${points} points!`);
        } else {
            alert(`Incorrect. The correct answer was ${data.name}.`);
        }
    }

    submitButton.addEventListener('click', gameEnded);
}

document.getElementById("restart").addEventListener("click", getMonsterInfo);

getMonsterInfo();