import "./packing-list.css";

export default function PackingListItem({ item, handleClick}){
    return <li onClick={() => handleClick(item)}>{item.title} {item.isPacked ? `${item.title} √`: `${item.title}`}</li>;
}