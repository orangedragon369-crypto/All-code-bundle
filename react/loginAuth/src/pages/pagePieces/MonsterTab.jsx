import SectionTab from "./SectionTab";
import SingleInfoData from "./SingleInfoData";

export default function MonsterTab(){
    return(
        <SectionTab name="Monsters" id="Mon" parrentId="mhWor" ulContents={<>
            <SectionTab name="Herbivore" id="her" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonHer"/>
            }/>
            <SectionTab name="Fanged Wyvern" id="Fan" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonFan"/>
            }/>
            <SectionTab name="Wingdrake" id="Win" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonWin"/>
            }/>
            <SectionTab name="Neopteron" id="Neo" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonNeo"/>
            }/>
            <SectionTab name="Fish" id="Fis" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonFis"/>
            }/>
            <SectionTab name="Bird Wyvern" id="Bir" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonBir"/>
            }/>
            <SectionTab name="Brute Wyvern" id="Bru" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonBru"/>
            }/>
            <SectionTab name="Piscine Wyvern" id="Pis" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonPis"/>
            }/>
            <SectionTab name="Flying Wyvern" id="Fly" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonFly"/>
            }/>
            <SectionTab name="Elder Drangon" id="Eld" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonEld"/>
            }/>
            <SectionTab name="Relict" id="Rel" parrentId="mhWorMon" ulContents={
                <SingleInfoData api="" startId="mhWorMonRel"/>
            }/>
        </>}/>
    );
}