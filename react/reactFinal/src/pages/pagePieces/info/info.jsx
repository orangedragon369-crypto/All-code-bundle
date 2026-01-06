import { useEffect, useState } from "react";
import getApi from "../../../scriptsOnly/api.mjs";
import AnalyzeInfo from "./AnalyzeInfo";

export default function Info({dataId}){
    if (dataId === ""){
        return(<div className="data">No viable info selected yet. Choose an option on the left to get started.</div>);
    }

    let api = "";
    const dataLabel = dataId.split("/");
    const size = dataLabel.length;
    const [details, setDetails] = useState("");

    if (dataLabel[1] === "mh" && size >= 3) {
        if (dataLabel[2] === "Wor"){
            api += "https://mhw-db.com/"
        }
        api += dataLabel[3] + "/" + dataLabel.at(-1);
    } else {
        return(<div className="data">No viable info selected yet. Choose an option on the left to get started.</div>)
    }

    useEffect(() => {
        async function load() {
            const data = await getApi(api);
            setDetails(data);
        }
        load();
    }, [dataId]);

    console.log(api);
    return(<div className="data">
        <h2>{details.name}</h2>
        <AnalyzeInfo dataId={details} type={dataLabel[3]}/>
    </div>);
}