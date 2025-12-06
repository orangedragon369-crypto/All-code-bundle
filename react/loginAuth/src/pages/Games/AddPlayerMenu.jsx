import { useState } from "react";

export default function AddPlayerManu({deck, minPlayer}){
    const [name, setName] = useState("")
    if (deck.playerCount() >= minPlayer) return null;
    return(
        <div className="get-player-info">
            <form>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
            </form>
            <button onClick={() => {
                    deck.createPlayer(name);
                    setName("");
                    if (deck.playerCount() < minPlayer){
                        return null;
                    }
                }}>Next</button>
        </div>
    );
}