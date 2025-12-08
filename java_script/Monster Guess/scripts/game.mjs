const moreInfoButton = document.getElementById('more');
const submitButton = document.getElementById('submit');
const answerInput = document.getElementById('answer');
const info = document.getElementById('info');
let monster

async function getMonsterInfo() {
    const response = await fetch(`https://wilds.mhdb.io/en/monsters/${Math.floor(Math.random()*33)}`);
    const data = await response.json();
    monster = data;
    console.log(monster);
    info.innerHTML = `
                    <div class="hint">
                        This monster is a ${monster.species} type monster. It has a base health of ${monster.baseHealth} and size range of ${monster.size.mini}m-${monster.size.gold}m, averaging at ${monster.size.base}m.
                    </div>`;
}

getMonsterInfo();