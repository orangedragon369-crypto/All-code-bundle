export default function AnalyzeInfo({ dataId, type }) {
    console.log(dataId);
    if (!dataId || typeof dataId !== "object") {
        return <div>No data available.</div>;
    }
    switch (type) {
        case "ailments":
            console.log(dataId);
            return (<div>
                <h4>Description:</h4><p>{dataId.description}</p>
                <h4>Prevention:</h4>
                <div><span>Items:&ensp;</span><span>{dataId.protection.items.map((solve, index) => {
                    return (<div key={"propItem"+ index}>
                        {solve.name}: {solve.description}
                    </div>);
                })}</span></div><br></br>
                <div><span>Skills:&ensp;</span><span>{dataId.protection.skills.map((solve, index) => {
                    return (<div key={"propSkill"+ index}>
                        {solve.name}: {solve.description}
                    </div>);
                })}</span></div>
                <h4>Recovery</h4>
                <div><span>Actions:&ensp;</span>{dataId.recovery.actions.map((solve, index) => {
                    return (<span key={"propSkill"+ index}>
                        {solve}
                    </span>);
                })}</div><br></br>
                <div><span>Items:&ensp;</span><span>{dataId.recovery.items.map((solve, index) => {
                    return (<div key={"propItem"+ index}>
                        {solve.name}: {solve.description}
                    </div>);
                })}</span></div>
            </div>);
        case "armor":
            return (<>Comming soon
            </>);
        case "locations":
            return (<div>
                <h4>Zones:</h4><p>{dataId.zoneCount}</p>
                <h4>Camps:</h4><div>{dataId.camps.map((camp) => (
                    <div key={camp.id}><span>{camp.name}:&ensp;</span><span> zone {camp.zone}</span></div>
                ))}</div>
            </div>);
        case "items":
            return (<>
                <h4>Rarity:</h4><p>{dataId.rarity}</p>
                <h4>Description:</h4><p>{dataId.description}</p>
                <h4>Value:</h4><p>{dataId.value}</p>
                <h4>Carry Limit:</h4><p>{dataId.carryLimit}</p>
            </>);
        case "monsters":
            return (<>
                <h4>Size:</h4><p>{dataId.type}</p>
                <h4>Description:</h4><p>{dataId.description}</p>
                <h4>Found:</h4><ul>{dataId.locations.map((local)=> (
                    <p key={local.id}>{local.name}</p>
                ))}</ul>
                <h4>Ailments utilized:</h4><ul>{dataId.ailments.map((sickness) => {
                    return (<span key={sickness.id}>{sickness.name}:&ensp;{sickness.description}</span>);
                })}</ul>
                <h4>Elements utilized:</h4><ul>{dataId.elements.map((sickness) => {
                    return (<span key={sickness}>{sickness}</span>);
                })}</ul>
                <h4>Resistances:</h4><ul>{dataId.resistances.map((res, index)=> (
                    <p key={index}>{res.element}</p>
                ))}</ul>
                <h4>Weaknesses:</h4><ul>{dataId.weaknesses.map((type, index)=> (
                    <p key={index}>{type.element} level: {type.stars}</p>
                ))}</ul>
                <h4>Rewards:</h4><ul>{dataId.rewards.map((item, index)=> (<div key={item.id}>
                    <p>{item.item.name}: {item.item.description}</p>
                    {item.conditions.map((condition, index) => (
                        <span key={index}>
                            <p>Rank: {condition.rank}</p>
                            <ul>
                                <p>Collection type: {condition.type}</p>
                                <ul>
                                    <p>Part: {condition.subtype}</p>
                                    <p>Quantity: {condition.quantity}</p>
                                    <p>Chance: {condition.chance}%</p>
                                </ul>
                            </ul>
                        </span>
                    ))}
                </div>))}</ul>
            </>);
        case "skills":
             return (<>
                <h4>Description:</h4><p>{dataId.description}</p>
                {dataId.ranks.map((rank) => (<>
                    <h4 key={rank.level}>Rank: {rank.level}</h4>
                    <ul>Description: {rank.description}</ul>
                </>))}
             </>);
        case "charms":
            return (<>
                {dataId.ranks.map((rank) => (<div key={rank.level}>
                    <h4>Rank {rank.id}:&ensp;</h4>
                    <div><span>Skills:&ensp;</span><span>{rank.skills.map((skill) => {
                    return (<div key={skill.id}>
                        {skill.skillName}: {skill.description}
                    </div>);
                })}</span></div><br></br>
                    <div><span>Rarity</span><span>&ensp;{rank.rarity}</span></div><br></br>
                    <div><span>Crafting material:</span><ul>{rank.crafting.materials.map((material, index) => (
                        <li key={index}>{material.quantity} {material.item.name}</li>
                    ))}</ul></div>
                </div>))}</>);
        case "weapons":
            return (<>
                <div>Rarity: {dataId.rarity}</div>
                <img src={dataId.assets.image} alt={dataId.name}/><br></br>
                <div>Displayed Attack: {dataId.attack.display}&ensp;|&ensp;Raw Attak: {dataId.attack.raw}</div>
                <div>Elderseal: {dataId.elderseal? dataId.elderseal:"None"}&ensp;|&ensp;Affinity: {dataId.attributes.affinity}%</div><br></br>
                <div><span>Element:&ensp;</span>{dataId.elements.map((element, index) => {
                    if (element.hidden === true) {
                        return (<span key={index}>{element.type} &#40;{element.damage}&#41;&ensp;</span>);
                    }
                    return (<span key={index}>{element.type} {element.damage}&ensp;</span>);
                })}</div>
                <div><span>Slots: &ensp;</span>{dataId.slots.map((slot, index) => {
                    if (index === 0){
                        return (<span key={index}>{slot.rank}</span>);
                    }
                    return (<span key={index}>, {slot.rank}</span>);
                })}</div><br></br>
                <div>Damage Type: {dataId.damageType}</div>
                {dataId.durability.map((sharp, index) => {
                    if (index === 0){
                        return (<div key={index}>
                            <div>Base Sharpness:</div>
                            <ul>
                                <span>Red: {sharp.red}&ensp;</span>
                                <span>Orange: {sharp.orange}&ensp;</span>
                                <span>Yellow: {sharp.yellow}&ensp;</span>
                                <span>Green: {sharp.green}&ensp;</span>
                                <span>Blue: {sharp.blue}&ensp;</span>
                                <span>White: {sharp.white}&ensp;</span>
                                <span>Purple: {sharp.purple}&ensp;</span>
                            </ul>
                            <div>Sharpness for Handicraft levels 1-5:</div>
                        </div>);
                    } else {
                        return (<div key={index}>
                            <ul>
                                <span>{index}: Red: {sharp.red}&ensp;</span>
                                <span>Orange: {sharp.orange}&ensp;</span>
                                <span>Yellow: {sharp.yellow}&ensp;</span>
                                <span>Green: {sharp.green}&ensp;</span>
                                <span>Blue: {sharp.blue}&ensp;</span>
                                <span>White: {sharp.white}&ensp;</span>
                                <span>Purple: {sharp.purple}&ensp;</span>
                            </ul>
                        </div>);
                    }
                })}
                <div>Forgeable: {dataId.crafting.craftable?"Yes":"No"}</div>
                <div>Crafting material:</div>
                <ul>{dataId.crafting.upgradeMaterials.map((material, index) => (
                        <li key={index}>{material.quantity} {material.item.name}</li>
                ))}</ul>
            </>);
        default:
            return <p>No info available for this data type: {type}</p>;
    }
}