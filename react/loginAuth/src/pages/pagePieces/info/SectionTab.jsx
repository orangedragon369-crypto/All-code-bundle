import "../../../style/index.css";
import infoButton from "../../../scriptsOnly/infoButton.js";

export default function SectionTab({name, id, parrentId, ulContents}){
    return (
        <>
        <div className="tab"><button id={`${parrentId}${id}`} value="closed" className="infoBtn" onClick={() => infoButton(parrentId + id)}><span id={`${parrentId}${id}stat`}>&gt;</span><span>&ensp; {name} </span></button></div>
        <ul id={`${parrentId}${id}C`} className="closed">
            {ulContents}
        </ul>
        </>
    );
}