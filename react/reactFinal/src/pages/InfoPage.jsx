import "../style/index.css";
import SectionTab from "./pagePieces/info/SectionTab.jsx";
import SingleInfoData from "./pagePieces/info/SingleInfoData.jsx";
import OneTypeSort from "./pagePieces/info/OneTypeSort.jsx";
import Info from "./pagePieces/info/info.jsx";
import { useState } from "react";

export default function infoPage(){
    const [current, setCurrent] = useState("");
    return (
        <main className="info-main">
            <div className="info">
                <SectionTab name="Monster Hunter" id="/mh" parrentId="" ulContents={<>
                    <SectionTab name="World" id="/Wor" parrentId="/mh" ulContents={<>
                        <SectionTab name="Ailments" id="/ailments" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/ailments?p={%22id%22:%20true,%20%22name%22:true}" 
                                startsId="/mh/Wor/ailments" finalOnClick={(name) => setCurrent(name)}/>
                        }/>
                        <SectionTab name="Areas" id="/locations" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/locations?p={%22id%22:%20true,%20%22name%22:true}" 
                                startsId="/mh/Wor/locations" finalOnClick={(name) => setCurrent(name)}/>
                        }/>
                        <SectionTab name="Armor" id="/armor" parrentId="/mh/Wor" ulContents="Comming Soon"/>
                        <SectionTab name="Charms" id="/charms" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/charms?p={%22id%22:%20true,%20%22name%22:true}" 
                                startsId="/mh/Wor/charms" split={20} sort={true} finalOnClick={(name) => setCurrent(name)}/>
                        }/>
                        <SectionTab name="Items" id="/items" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/items?p={%22id%22:%20true,%20%22name%22:true}" 
                                startsId="/mh/Wor/items" split={60} sort={true} finalOnClick={(name) => setCurrent(name)}/>
                        }/>
                        <OneTypeSort
                            name="monsters"
                            game="/mh/Wor" 
                            toSet="species"
                            types={[
                                "bird wyvern", "brute wyvern", "elder dragon", 
                                "fanged beast", "fanged wyvern", "fish",
                                "flying wyvern", "herbivore", "lynian", "neopteron",
                                "piscine wyvern", "relict", "wingdrake"
                            ]} 
                            finalOnClick={(name) => setCurrent(name)}/>
                        <SectionTab name="Skills" id="/skills" parrentId="/mh/Wor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/skills?p={%22id%22:%20true,%20%22name%22:true}" 
                                startsId="/mh/Wor/skills" split={20} sort={true} finalOnClick={(name) => setCurrent(name)}/>
                        }/>
                        <OneTypeSort
                            name="weapons"
                            game="/mh/Wor" 
                            toSet="type"
                            types={[
                                "great-sword", "long-sword", "sword-and-shield", 
                                "dual-blades", "hammer", "hunting-horn",
                                "lance", "gunlance", "switch-axe", "charge-blade",
                                "insect-glaive", "light-bowgun", "heavy-bowgun", "bow"
                            ]} 
                            split={25}
                            finalOnClick={(name) => setCurrent(name)} />
                    </>}/>
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
//'https://wilds.mhdb.io/en/mosters?p={"species": true, "name":true}'
//https://mhw-db.com/monsters?q=%7B%22type%22%3A%22large%22%7D&p=%7B%22name%22%3Atrue%7D