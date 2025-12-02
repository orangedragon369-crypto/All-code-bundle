import "../style/index.css";
import SectionTab from "./pagePieces/SectionTab";
import SingleInfoData from "./pagePieces/SingleInfoData.jsx";
import MonsterTab from "./pagePieces/MonsterTab.jsx";
import Info from "./pagePieces/info.jsx";
import { useState } from "react";



export default function infoPage(){
    const [current, setCurrent] = useState("");
    
    function setInfo (data) {
        setCurrent(data);
        console.log(data);
    }

    return (
        <main className="info-main">
            <div className="info">
                <SectionTab name="Monster Hunter" id="/mh" parrentId="" ulContents={<>
                    <SectionTab name="World" id="/Wor" parrentId="/mh" ulContents={<>
                        <SectionTab name="Ailments" id="/Ail" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/ailments?p={%22id%22:%20true,%20%22name%22:true}" startsId="/mh/Wor/Ail"/>
                        }/>
                        <SectionTab name="Areas" id="/Are" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/locations?p={%22id%22:%20true,%20%22name%22:true}" startsId="/mh/Wor/Are"/>
                        }/>
                        <SectionTab name="Armor" id="/Arm" parrentId="/mh/Wor" ulContents="sets"/>
                        <SectionTab name="Charms" id="/Cha" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/charms?p={%22id%22:%20true,%20%22name%22:true}" startsId="/mh/Wor/Cha" split={20} sort={true}/>
                        }/>
                        <SectionTab name="Items" id="/Ite" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/items?p={%22id%22:%20true,%20%22name%22:true}" startsId="/mh/Wor/Ite" split={60} sort={true}/>
                        }/>
                        <MonsterTab />
                        <SectionTab name="Skills" id="/Ski" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/skills?p={%22id%22:%20true,%20%22name%22:true}" startsId="/mh/Wor/Ski" split={20} sort={true}/>
                        }/>
                        <SectionTab name="Weapons" id="/Wea" parrentId="/mh/Wor" ulContents="type/tree"/></>
                    }/>
                    {/* <SectionTab name="Wilds" id="/Wil" parrentId="/mh" ulContents={<>
                        <SectionTab name="Areas" id="Are" parrentId="/mh/Wil" ulContents="main/miner"/>
                        <SectionTab name="Armor" id="Arm" parrentId="/mh/Wil" ulContents="sets"/>
                        <SectionTab name="Charms" id="Cha" parrentId="/mh/Wil" ulContents="all"/>
                        <SectionTab name="Items" id="Ite" parrentId="/mh/Wil" ulContents="all"/>
                        <SectionTab name="Monsters" id="Mon" parrentId="/mh/Wil" ulContents="size/species"/>
                        <SectionTab name="Skills" id="Ski" parrentId="/mh/Wil" ulContents="placeable"/>
                        <SectionTab name="Weapons" id="Wea" parrentId="/mh/Wil" ulContents="type/tree"/>
                    </>}/> */}</>
                } />
                {/* <SectionTab name="Dungeons & Dragons" id="dnd" parrentId="" ulContents="D&D cont"/> */}
            </div>
            <Info dataId={current}/>
        </main>
    );
}

//export { setInfo };
//'https://wilds.mhdb.io/en/mosters?p={"species": true, "name":true}'
//https://mhw-db.com/monsters?q=%7B%22type%22%3A%22large%22%7D&p=%7B%22name%22%3Atrue%7D