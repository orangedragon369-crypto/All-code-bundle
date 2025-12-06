import Uno from "./Games/uno/Uno";
import PrisonersDilema from "./Games/prisonersDilema/PrisonersDilema";
import GameIcon from "./Games/GameIcons";
import { useState } from "react";

export default function GamePage(){
    const games = [
        ["Uno", "src/Images/download.png", Uno], ["Prisoners Dilema", "src/Images/download.jpeg", PrisonersDilema]
    ]
    const [Game, setGame] = useState("span");

    function onClick(component){
        if (Game !== component){
            setGame(() => component);
            window.scrollTo(0, 0);
            return;
        }
        setGame(() => "span");
        return
    }
    return (
        <main className="games-main">
            <Game />
            {games.map(([name, img, display], index) => (
                <GameIcon key={index} name={name} img={img} display={display} click={onClick}/>
            ))}
        </main>
    );
}