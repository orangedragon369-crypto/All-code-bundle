import {useState} from 'react';
import {useEffect} from 'react';

function onSearch(name, stock){
    if (name){}
}

export default function SearchBar(){
    const [search, setSearch] = useState("");
    const [onlyInStock, setOnlyInStock] = useState(false);

    const handleSeachChange = (ev) => {
        setSearch(ev.target.value);
        onSearch({name: ev.target.value, onlyInStock});
        console.log(search);
    }

    const handleInStockChange = (ev) => {
        setOnlyInStock(ev.target.checked);
        onSearch({name: ev.target.value, onlyInStock});
        console.log(onlyInStock);
    }

    useEffect(() => {
        onSearch({ name: search, onlyInStock});
        [search, onlyInStock]
    })

    return(
        <form>
            <input type="text" placeholder='Search...' value={search} onChange={handleSeachChange}></input>
            <label htmlFor='inStock'>
                <input type='checkbox' id='inStock' checked={onlyInStock} onChange={handleInStockChange}></input>
                Only show products in stock
            </label>
        </form>
    )
}