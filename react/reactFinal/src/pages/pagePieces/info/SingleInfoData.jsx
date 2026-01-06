import { useEffect, useState } from "react";
import getApi from "../../../scriptsOnly/api.mjs";
import SplitOne from "./listSplitter";

export default function SingleInfoData({ api, startsId,  split = null, sort = null, finalOnClick}) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        async function load() {
            const data = await getApi(api);

            if (!Array.isArray(data)) {
                console.error("API did not return an array:", data);
                return;
            }

            if (sort) {
                const toBe = data.map(item => item.name +"/" + item.id);
                setNames(toBe.sort());
            } else {
                setNames(data.map(item => item.name + "/" + item.id));
            }
        }

        load();
    }, []);

    if (split) {
        return SplitOne (names, 0, startsId, split, finalOnClick);
    }

    return (
        <>
            {names.map((name) => {
                const title = name.split("/");
                return (<div key={startsId + name}>
                    <button className="infoBtn" onClick={() => finalOnClick(`${startsId}/${name}`)}>{title[0]}</button>
                    <span>&ensp;</span>
                </div>);
            })}
        </>
    );
}