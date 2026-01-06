export default function infoButton(parrentId){
    const itm = document.getElementById(parrentId+"C");
    if(!itm)return;
    itm.classList.toggle("closed");

    const stat = document.getElementById(parrentId+"stat");
    if(!stat)return;
    stat.innerHTML = stat.innerHTML === "&gt;" ? "v": "&gt;";
}