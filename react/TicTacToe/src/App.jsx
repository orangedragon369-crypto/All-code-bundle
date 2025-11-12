import { useState } from 'react';
import BoardBtn from "./Btn.jsx";
import './App.css'

export default function App() {
    const [count, setCount] = useState(false);
   
    let x = null;

    const handleClick= function onClick() {
        setCount((count) => count + count? -1: 1);
        return x = count? "o":"x";
    };

    return (
        <>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        <br/>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        <br></br>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        <BoardBtn handleClick={handleClick()}/>
        </>
)}