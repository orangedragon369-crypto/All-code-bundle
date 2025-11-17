import cart from "../cart.mjs"; 
import { updateCartUI} from "./itemBtn.mjs";

let items = document.getElementById("items");

async function apiFetch () {
    try {
        const api = await fetch("https://fakestoreapi.com/products");
        if (!api.ok) {
            throw new Error(`Response status: ${api.status}`);
        }

        const data = await api.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

async function placeItems(){
    const data = await apiFetch();

    

    data.forEach( item => {
        items.innerHTML += `
                <div>
                    <img src="${item.image}" width="150px">
                    <div>
                        <div>${item.title}</div>
                        <div>${item.rating.rate} stars</div>
                        <div class="cont between">
                            <div>$${item.price}</div>
                            <span id="cart-status-${item.id}"></span>
                        </div>
                    </div>
                </div>`;
    });

    data.forEach( (item) => {cart.getItem(item.id)[1] < 1 ? updateCartUI("none", item) : updateCartUI("exists", item)});
}

if (items){placeItems()}

export {apiFetch};