import {cart} from "./cart.mjs";
import {} from "./items.mjs";

let shipping = [0, 4.99, 9.99];
let dateNTime = [9, 6, 3];
function fillCart (){
    const cartCollect = document.getElementById("cart-collection");
    for (item in cart.items){
        cartCollect.innerHTML += `
                    <div class="item-box cont">
                        <img src="${cart.pics[item]}" width="175px">
                        <div class="ainer space">
                            <b>${cart.items[item]}</b>
                            <div>${cart.prices[item]}</div>
                            <div><span>Quantity: ${cart.num[items]}</span><button onclick="cart.delete()"></button></div>
                        </div>
                        <div class="ainer space">
                            <b>Choose a delivery option:</b>
                            <form>
                                <input type="radio" id="good" name="Shipping" value="HTML">
                                <label for="good">
                                    <span>${dateNTime[0]}</span>
                                    <div>&emsp;&ensp;Free Shipping($${shipping[0]})</div>
                                </label><br>
                                <input type="radio" id="better" name="Shipping" value="CSS">
                                <label for="better">
                                    <span>${dateNTime[1]}</span>
                                    <div>&emsp;&ensp;Express Shipping($${shipping[1]})</div>
                                </label><br>
                                <input type="radio" id="best" name="Shipping" value="JavaScript">
                                <label for="best">
                                    <span>${dateNTime[2]}</span>
                                    <div>&emsp;&ensp;Express+ Shipping($${shipping[2]})</div>
                                </label>
                            </form>
                        </div>
                    </div>`
    }
}

function order(){
    alert(`You have successfully order the contents of your cart, costing $${cart.total} in total.`);
    cart.clear();
}

fillCart()
const placeOrder = document.getElementById("order");
placeOrder.addEventListener("click", order);