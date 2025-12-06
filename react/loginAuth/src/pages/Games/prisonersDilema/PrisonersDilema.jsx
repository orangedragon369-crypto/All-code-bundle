import PlayerOption from "./PlayerOption";
import "../../../style/index.css";
import { useState } from "react";

export default function PrisonersDilema() {
  const [pastAction, setPastAction] = useState([]);
  const [resultsP1, setResultsP1] = useState("");
  const [resultsP2, setResultsP2] = useState("");
  const [points, setPoints] = useState("");
  const [strat1, setStrat1] = useState("");
  const [strat2, setStrat2] = useState("");

  function stratCase(person, history) {
    switch (person) {
      case "deffect":
        return "D";
      case "coop":
        return "C";
      case "randD":
        return Math.random() * 10 === 5 ? "D" : "C";
      case "cTill":
        return history.at(-1) === "D" || history.at(-2) === "D" ? "D" : "C";
      case "random":
        return Math.random() > 0.5 ? "D" : "C";
      case "forgive":
        return history.at(-1) === "D" ? "D" : "C";
      default:
        return person;
    }
  }

  function onClick() {
    const numRounds = parseInt(document.getElementById("num").value);
    let history = [];

    for (let i = 0; i < numRounds; i++) {
      let p1 = stratCase(strat1, history);
      let p2 = stratCase(strat2, history);
      history.push(p1, p2);
    }

    setPastAction(history);

    // scoring
    let p1score = 0;
    let p2score = 0;

    for (let i = 0; i < history.length; i += 2) {
      const a = history[i];
      const b = history[i + 1];

      if (a === b) {
        if (a === "C") {
          p1score += 3;
          p2score += 3;
        } else {
          p1score++;
          p2score++;
        }
      } else {
        if (a === "C") {
          p1score++;
          p2score += 5;
        } else {
          p1score += 5;
          p2score++;
        }
      }
    }

    setPoints(`Player 1: ${p1score} pts  |  Player 2: ${p2score} pts`);

    let p1str = "";
    let p2str = "";

    for (let i = 0; i < history.length && i < 100; i += 2) {
      p1str += history[i];
      p2str += history[i + 1];
    }

    setResultsP1(p1str);
    setResultsP2(p2str);
  }

  return (
    <div className="play-screen">
      <PlayerOption name="player1" strat={strat1}/>
      <span>&ensp;VS.&ensp;</span>
      <PlayerOption name="player2" strat={strat2}/>&ensp;
      <input className="bckgrnd" type="number" id="num" placeholder="How many rounds?" />
      <button type="button" id="btn" className="bckgrnd" onClick={onClick}>
        Run Game
      </button>
      <div className="view around">
        <h3><b>Results</b></h3>
      </div>
      <div className="view">{points}</div>
    </div>
  );
}
