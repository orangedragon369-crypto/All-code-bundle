import SectionTab from "./SectionTab";

function chunk(list, size) {
    const out = [];
    for (let i = 0; i < list.length; i += size) {
        out.push(list.slice(i, i + size));
    }
    return out;
}
export default function splitOne(list, offset, parentId, split, finalOnClick) {
        const groups = chunk(list, split);

        return (
            <>
                {groups.map((group, i) => {
                    const start = offset + i * split + 1;
                    const end = offset + Math.min((i + 1) * split, list.length);

                    return (
                        <SectionTab
                            key={`${parentId}/${start}-${end}`}
                            name={`${start}-${end}`}
                            id={`${start}-${end}`}
                            parrentId={parentId}
                            ulContents={
                                <>
                                    {group.map((name) => {
                                        const title = name.split("/");
                                        return(<div key={parentId+"/"+name}>
                                            <button className="infoBtn" onClick={() => finalOnClick(`${parentId}/${name}`)}>{title[0]}</button>
                                            <span>&ensp;</span>
                                        </div>);
                                    })}
                                </>
                            }
                        />
                    );
                })}
            </>
        );
}