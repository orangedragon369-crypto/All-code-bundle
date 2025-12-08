import { useEffect, useState } from 'react';
import BoardBtn from "./Btn.jsx";
import './App.css'

let whos = ["", "", "", "", "", "", "", "", ""];

export default function App() {
    const [count, setCount] = useState(0)
    let clicked = [false, false, false, false, false, false, false, false, false];

    function handleClick(tile){ 
        if (!clicked[tile]){
            setCount(count+1);
            clicked[tile] = true;
            return whos[tile] = count%2? "o":"x";
        } else {
            alert("Already Clicked");
        }
    };

    function reset(){
        whos = ["", "", "", "", "", "", "", "", ""];;
        clicked = [false, false, false, false, false, false, false, false, false];;
        setCount(0);
    }

    useEffect(()=> {
        function checkWin(which){
            let won = false;
            for (let i = 0; i < 8; i+=3){
                if (whos[i] === which && whos[i+1] === which && whos[i+2] === which){
                    won = true;
                }
            }
            for (let i = 0; i < 3; i++){
                if (whos[i] === which && whos[i+3] === which && whos[i+6] === which){
                    won = true;
                }
            }
            if(whos[0] === which && whos[4] === which && whos[8] === which){
                won = true;
            }
            if(whos[2] === which && whos[4] === which && whos[6] === which){
                won = true;
            }
            if (won) {
                alert(which + " won the game!");
                reset();
            }
        }

        if (count >= 4){
            checkWin("x");
            checkWin("o");
        }
    }, [count])

    return (
        <main>
            <div className='row'>
                <BoardBtn tile={-1} handleClick={reset}/>
                <div className='board'>1&ensp;</div>
                <div className='board'>2&ensp;</div>
                <div className='board'>3&ensp;</div>
            </div>
            <div className='row'>
                <div className='board'>A</div>
                <BoardBtn tile={0} handleClick={handleClick}/>
                <BoardBtn tile={1} handleClick={handleClick}/>
                <BoardBtn tile={2} handleClick={handleClick}/>
            </div>
            <div className='row'>
                <div className='board'>B</div>
                <BoardBtn tile={3} handleClick={handleClick}/>
                <BoardBtn tile={4} handleClick={handleClick}/>
                <BoardBtn tile={5} handleClick={handleClick}/>
            </div>
            <div className='row'>
                <div className='board'>C</div>
                <BoardBtn tile={6} handleClick={handleClick}/>
                <BoardBtn tile={7} handleClick={handleClick}/>
                <BoardBtn tile={8} handleClick={handleClick}/>
            </div>
        </main>
)}

export {whos};