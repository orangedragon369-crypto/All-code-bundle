import "../style/index.css";
import GiveJoke from "./pagePieces/dashboard/GetJokes.jsx";
import GiveFact from "./pagePieces/dashboard/CatFact.jsx";
import GameIcon from "./Games/GameIcons.jsx";
import RandomCat from "./pagePieces/dashboard/RandCatID.jsx";

export default function Dashboard(){
    return(
        <main className="dash-main">
            <div className="joke">
                <h2>Jokes</h2>
                <hr></hr>
                <div id="joke-info">
                    <GiveJoke />
                    <GiveJoke />
                    <GiveJoke />
                    <GiveJoke />
                </div>
            </div>
            <div className="content">
                <div className="row">
                    <div className="facts">
                        <h2>Did you know?</h2>
                        <GiveFact />
                    </div>
                    <div className="used-recently">
                        <RandomCat width={300}/>
                    </div>
                </div>
                <div className="row">
                    <div className="score">
                        <h2>
                            <span>Info Sources&ensp;</span>
                        </h2>
                        <ul className="scores">
                            <li>Monster Hunter World</li>
                            <p>Coming Soon</p>
                            <li>D&D</li>
                            <li>Monster Hunter Wilds</li>
                        </ul>
                    </div>
                    <div className="games-soon">
                        <h2>Common Games</h2>
                        <div id="game-area">{/* 
                            <GameIcon name={"Uno (Comming Soon"} img={"src/Images/download.png"} display={() => "span"} click={() => null}/> */}
                            <GameIcon name={"Prisoners Delema"} img={"src/Images/download.jpeg"} display={() => "span"}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}