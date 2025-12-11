const total = document.getElementById("total-score");
const average = document.getElementById("average");
const best = document.getElementById("best");
const mon = document.getElementById("mon-count");

function renderStats(){
    total.innerText = getLocal("total");
    best.innerText = getLocal("best");
    let monsters = getLocal("mon");
    console.log(monsters)
    let done = [];
    monsters.map((thing)=> {
        let times = 0;
        if (done.indexOf(thing) === -1){
            monsters.forEach((nomen)=>{if(thing===nomen)times++})
            mon.innerHTML += `<li>${thing}: ${times}</li>`
            done.push(thing)
        }
    });
    average.innerText = getLocal("average").length > 0?`${getLocal("total")/getLocal("average").length}`:"0";
}

export default function setStats(stat, increase){
    if (stat === "best"){
        saveLocal(getLocal(stat) > increase ? getLocal(stat): increase, stat);
    } else if (stat === "total"){
        saveLocal(getLocal(stat)+increase, stat);
    } else {
        let list = getLocal(stat);
        list.push(increase)
        saveLocal(list, stat);
    }
    return getLocal(stat);
}

function getLocal(what){
    return localStorage.getItem(what) ? JSON.parse(localStorage.getItem(what)):(what === "best"||what === "total"? 0: []);
}

function saveLocal(what, as){
    localStorage.setItem(as, JSON.stringify(what));
}

if (window.location.href.split("/").at(-1) === "stats.html"){
    renderStats();
}