const total = document.getElementById("total-score");
const average = document.getElementById("average");
const best = document.getElementById("best");
const aveTime = document.getElementById("timeAv");
const totime = document.getElementById("totalTime");
const bestime = document.getElementById("bestTime");
const mon = document.getElementById("mon-count");

function renderStats(){
    total.innerText = getLocal("total", "total");
    best.innerText = getLocal("best", "best");
    totime.innerText = getLocal("allTimes", "total");
    bestime.innerText = getLocal("bestTime", "best");

    let monsters = getLocal("mon");
    let done = [];
    monsters.map((thing)=> {
        let times = 0;
        if (done.indexOf(thing) === -1){
            monsters.forEach((nomen)=>{if(thing===nomen)times++})
            mon.innerHTML += `<li>${thing}: ${times}&emsp;&emsp;&emsp;</li>`
            done.push(thing)
        }
    });
    average.innerText = Math.round(getLocal("scores").length > 0?`${getLocal("total", "total")/getLocal("scores").length}`:"0");
    aveTime.innerText = Math.ceil(getLocal("scores").length > 0?`${getLocal("allTimes", "total")/getLocal("scores").length}`:"0");
}

export default function setStats(stat, increase, type = null){
    if (type === "best"){
        saveLocal(getLocal(stat, type) > increase ? getLocal(stat, type): increase, stat);
    } else if (type === "total"){
        saveLocal(getLocal(stat, type)+increase, stat);
    } else {
        let list = getLocal(stat, type);
        list.push(increase)
        saveLocal(list, stat);
    }
    return getLocal(stat, type);
}

function getLocal(what, type = null){
    return localStorage.getItem(what) ? JSON.parse(localStorage.getItem(what)):(type === "best"||type === "total"? 0: []);
}

function saveLocal(what, as){
    localStorage.setItem(as, JSON.stringify(what));
}

if (window.location.href.split("/").at(-1) === "stats.html"){
    renderStats();
}