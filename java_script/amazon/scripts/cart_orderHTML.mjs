import cart from "./cart.mjs";
import {apiFetch} from "./itemStuff/items.mjs";
import updateCount from "../modular_page_pieces/header.mjs";
import { updateCartUI, buttonBindings} from "./itemStuff/itemBtn.mjs";

let shipping = [0, 4.99, 9.99];
let dateNTime = [9, 6, 3];
export default async function fillCart (){
    const cartCollect = document.getElementById("cart-collection");
    if (cart.len("num") < 1) {
        cartCollect.innerHTML = "<div>There is nothing in the cart yet.</div>";
        return
    }
    const data = await apiFetch();
    let cartTotal = "";
    let changeNeeded = 0;
    data.forEach( item => {
        let num = cart.getItem(item.id)[1]
        if (num >= 1) {
            changeNeeded++
            cartTotal += `
                        <div class="item-box cont">
                            <img src="${item.image}" width="175px">
                            <div class="ainer space">
                                <b>${item.title}</b>
                                <div>$${item.price}</div>
                                <div><span>Quantity:</span><span id="cart-status-${item.id}"></span></div>
                            </div>
                            <div class="ainer space">
                                <b>Choose a delivery option:</b>
                                <form>
                                    <input type="radio" id="good" name="Shipping" value="HTML">
                                    <label for="good">
                                        <span>${dateNTime[0]} days Free Shipping($${shipping[0]})</span>
                                    </label><br>
                                    <input type="radio" id="better" name="Shipping" value="CSS">
                                    <label for="better">
                                        <span>${dateNTime[1]} days</span>
                                        <div>&emsp;&ensp;Express Shipping($${shipping[1]})</div>
                                    </label><br>
                                    <input type="radio" id="best" name="Shipping" value="JavaScript">
                                    <label for="best">
                                        <span>${dateNTime[2]} days</span>
                                        <div>&emsp;&ensp;Express+ Shipping($${shipping[2]})</div>
                                    </label>
                                </form>
                            </div>
                        </div>`;
        }
    });

    cartCollect.innerHTML = changeNeeded > 0 ? cartTotal: cartCollect.innerHTML;
    data.forEach( (item) => {cart.getItem(item.id)[1] === null ? changeNeeded = changeNeeded : updateCartUI("exists", item)});
}

function order(){
    cart.clear();
    updateCount();
    alert(`You have successfully order the contents of your cart, costing $${cart.total} in total.`);
    cart.saveItems();
}


if (window.location.pathname.split("/").pop() === "cart.html") {
    fillCart();
    const placeOrder = document.getElementById("order");
    placeOrder.addEventListener("click", order);
}
