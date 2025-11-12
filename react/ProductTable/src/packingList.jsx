import {useState} from "react";
import PackingListItem from "./PackingListItem.jsx";

export default function PackingList() {
    const [list, setList] = useState([
        {id: 1, title: 'Computer', isPacked: false}
    ])

    const togglePacked = (item) => {
        setList().map((i) => {
            if (i.id === item.id){
                i.isPacked = true;
            }
            return i
        })
    };

    return (
        <div>
            <h3>Trevor's Packing List</h3>
            {list.map((item) => <PackingListItem item={item}/>)}
        </div>
    )
}