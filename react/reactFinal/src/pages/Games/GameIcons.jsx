export default function GameIcon({ name, img, display, click}){
    return (
        <div className="icon-holder">
            <button className="icon" style={{backgroundImage: `url(${img})`}} onClick={() => click(display)}></button>
            <p>{name}</p>
        </div>
    );
}