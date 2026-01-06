import SectionTab from "./SectionTab";
import SingleInfoData from "./SingleInfoData";

export default function OneTypeSort({name, game, toSet, types = [], finalOnClick, split = null}){
    let api = "";
    switch (game){
        case "/mh/Wor":
            api = [`https://mhw-db.com/${name}?q={%22${toSet}%22:%22`, `%22}&p={%22id%22:true,%20%22name%22:true}`]
            break;
        default:
            return null;
    }
    return(
        <SectionTab name={name} id={name} parrentId={game} ulContents={<>
            {types.map((type) => {
                return (
                    <SectionTab key={type} name={type} id={`/${type}`} parrentId={game+`/${type}`} ulContents={
                        <SingleInfoData api={api[0]+type+api[1]} startsId={`${game}/${name}/${type}`} split={split} finalOnClick={(item) => finalOnClick(item)}/>
                    }/>
                );
            })}
        </>}/>
    );
}