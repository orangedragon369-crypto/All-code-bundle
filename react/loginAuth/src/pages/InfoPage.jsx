import "../style/index.css";
import SectionTab from "./pagePieces/SectionTab";
import SingleInfoData from "./pagePieces/SingleInfoData.jsx";
import MonsterTab from "./pagePieces/MonsterTab.jsx";

export default function infoPage(){
    return (
        <main className="info-main">
            <div className="info">
                <SectionTab name="Monster Hunter" id="mh" parrentId="" ulContents={<>
                    <SectionTab name="World" id="Wor" parrentId="mh" ulContents={<>
                        <SectionTab name="Ailments" id="Ail" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/ailments?p=%7B%22name%22:true%7D" startsId="mhWorAil"/>
                        }/>
                        <SectionTab name="Areas" id="Are" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/locations?p=%7B%22name%22:true%7D" startsId="mhWorAre"/>
                        }/>
                        <SectionTab name="Armor" id="Arm" parrentId="mhWor" ulContents="sets"/>
                        <SectionTab name="Charms" id="Cha" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/charms?p=%7B%22name%22:true%7D" startsId="mhWorCha" split={20} sort={true}/>
                        }/>
                        <SectionTab name="Items" id="Ite" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/items?limit=400&offset=0&p=%7B%22name%22:true%7D" startsId="mhWorIte" split={60} sort={true}/>
                        }/>
                        <MonsterTab />
                        <SectionTab name="Skills" id="Ski" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/skills?p=%7B%22name%22:true%7D" startsId="mhWorSki" split={20} sort={true}/>
                        }/>
                        <SectionTab name="Weapons" id="Wea" parrentId="mhWor" ulContents="type/tree"/></>
                    }/>
                    {/* <SectionTab name="Wilds" id="Wil" parrentId="mh" ulContents={<>
                        <SectionTab name="Areas" id="Are" parrentId="mhWil" ulContents="main/miner"/>
                        <SectionTab name="Armor" id="Arm" parrentId="mhWil" ulContents="sets"/>
                        <SectionTab name="Charms" id="Cha" parrentId="mhWil" ulContents="all"/>
                        <SectionTab name="Items" id="Ite" parrentId="mhWil" ulContents="all"/>
                        <SectionTab name="Monsters" id="Mon" parrentId="mhWil" ulContents="size/species"/>
                        <SectionTab name="Skills" id="Ski" parrentId="mhWil" ulContents="placeable"/>
                        <SectionTab name="Weapons" id="Wea" parrentId="mhWil" ulContents="type/tree"/>
                    </>}/> */}</>
                } />
                {/* <SectionTab name="Dungeons & Dragons" id="dnd" parrentId="" ulContents="D&D cont"/> */}
            </div>
            <div className="data"></div>
        </main>
    );
}
``
//'https://wilds.mhdb.io/en/mosters?p={"species": true, "name":true}'