import {correct, wrong} from "./questionCheck.mjs";
import { startTimer } from "./timer.mjs";

async function getApi(api) {
    if (api === null) return;
    try{
        const response = await fetch(api)
        if(!response.ok){
            throw new Error("Could not fetch response");
        }
        const data = await response.json();
        return data;
    }
    catch(error) {console.error(error)};
}

async function getAnswers(details) {
  const url = `https://opentdb.com/api.php?amount=${details[3]}&category=${details[0]}&difficulty=${details[1]}&type=${details[2]}`;
  console.log(url);
  const info = await getApi(url);
  const Q = document.getElementById("question")
  const A = document.getElementById("options");
  A.innerHTML = "";

  console.log(info);

  if (!info || !info.results) {
    Q.textContent = "No questions found.";
    return;
  }

  for (let i = 0; i < details[3]; i++) {
    const question = info.results[0];
    Q.innerHTML = `<h2>${question?.question}</h2>`;
    let allAnswers = [...question.incorrect_answers, question.correct_answer];
    if (details[2] === "boolean") allAnswers = ["True", "False"];
    allAnswers.sort(() => Math.random() - 0.5);

    for (let i = 0, y = 0; i < allAnswers.length; i++){
      if (allAnswers[i] !== question.correct_answer){
        A.innerHTML += `<button type="button" value="" id="${i}" class="ans" name="incorrect">${question.incorrect_answers[y]}</button>`;
        y++;
        continue;
      }
      A.innerHTML += `<button type="button" value="true" id="${i}" class="ans" name="correct">${question.correct_answer}</button>`;
      
    }

    const wrongButtons = document.getElementsByName("incorrect");
    for (let i = 0; i < wrongButtons.length; i++) {
      wrongButtons[i].addEventListener("click", wrong);
    }
    
    document.getElementsByName(`correct`)[0].addEventListener("click", correct);
    startTimer(15, () => wrong());
    await data;
  }
}

function current () {
  const runs = JSON.parse(localStorage.getItem("runs"));
  const info = JSON.parse(localStorage.getItem(`runCount:${runs}`));
  return info; // returns [category, difficulty, qtype, num, score, questionsAnswered]
}

let data = current();

//current() = [category, difficulty, qtype, num, score, questionsAnswered]
getAnswers(current(), 0);
localStorage.setItem(`runCount:${JSON.parse(localStorage.getItem("runs"))}`, JSON.stringify(data));

export{data}; 