import {startTimer} from "./timer.mjs";
import {data} from "./getQA.mjs";

const rSlashW = document.getElementById("rSlashW");

function correct() {
    clearInterval(15);
    rSlashW.classList.remove("red");
    rSlashW.classList.remove("green");
    rSlashW.classList.add("green");
    rSlashW.innerHTML = "<h2>Correct!</h2>";

    startTimer(2, () => {
        data[4]++;
        data[5]++;
    });
}

function wrong() {
    clearInterval(15);
    rSlashW.classList.remove("red");
    rSlashW.classList.remove("green");
    rSlashW.classList.add("red");
    rSlashW.innerHTML = "<h2>Try again!</h2>";

    startTimer(2, () => {
        data[5]++;
        ;
    })
}

export {correct, wrong};