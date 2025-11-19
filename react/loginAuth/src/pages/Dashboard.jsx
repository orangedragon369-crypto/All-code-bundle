import "../style/index.css";
import GiveJoke from "./pagePieces/GetJokes";

export default function Dashboard(){
    return(
        <main className="dash-main">
            <div className="joke">
                <h2>Jokes</h2>
                <hr></hr>
                <div id="joke-info">
                    <GiveJoke />
                </div>
            </div>
            <div className="content">
                <div className="row">
                    <div className="cats-fact-day">
                        <h2>Daily Cat facts</h2>
                        <div>cat fact.</div>
                    </div>
                    <div className="used-recently">
                        <h2>Jump back in</h2>
                        <div>what ever you did earlier.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="score">
                        <h2>
                            <span>High Scores&ensp;</span>
                            <select id="game">
                                <option>choose an option</option>
                            </select>
                        </h2>
                        <ol className="scores">
                            <li>hi</li>
                        </ol>
                    </div>
                    <div className="games-soon">
                        <h2>Common Games</h2>
                        <div id="game-area"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}