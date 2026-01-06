import { unoDeck } from "../deck/deck.mjs";
import AddPlayerMenu from "../AddPlayerMenu";

export default function Uno(){
    return (<div className="play-screen">
        <AddPlayerMenu deck={unoDeck} minPlayer={2}/>
        {unoDeck.playerOrder.map((player, index) => {
            if (unoDeck.current === index){
                return (<div key={index} className="current">
                    <div>{player}</div><div>{unoDeck.players[player].hand.length}</div>
                </div>);
            } else if (unoDeck.current +1 === index) {
                return (<div key={index} className="next">
                    <div>{player}</div><div>{unoDeck.players[player].hand.length}</div>
                </div>);
            }
            return (<div key={index}>
                <div>{player}</div><div>{unoDeck.players[player].hand.length}</div>
            </div>);
        })}
    </div>)
}