import cart from '../cart.mjs';
import updateCount from '../../modular_page_pieces/header.mjs';
import fillCart from '../cart_orderHTML.mjs';

function buttonBindings(status, item){
    if (status === "none") {
        const addBtn = document.getElementById(`product${item.id}`);
        if (!addBtn) return;

        addBtn.addEventListener("click", () => {
            cart.addItem(item.id, 1, item.price);
            updateCartUI("exists", item);
        });

    } else {
        const plus = document.getElementById(`product+${item.id}`);
        const minus = document.getElementById(`product-${item.id}`);
        const count = document.getElementById(`count-${item.id}`);

        if (!plus || !minus || !count) return;

        plus.addEventListener("click", () => {
            cart.moreItem(item.id, item.price);
            updateCartUI("exists", item);
        });

        minus.addEventListener("click", () => {
            cart.lessItem(item.id, item.price);

            if (!cart.getItem(item.id)[1] >= 1) {
                updateCartUI("none", item);
                if (window.location.pathname.endsWith("cart.html")) {
                    fillCart();
                    location.reload();
                }
            } else {
                updateCartUI("exists", item);
            }
        });
    }
    cart.saveItems();
}


async function updateCartUI(status, item) {
    const container = document.getElementById(`cart-status-${item.id}`);
    if (container === null) return;
    if (status === "none") {
        container.innerHTML = `
            <button class="addCart" id="product${item.id}">Add to Cart</button>
        `;
    } else {
        container.innerHTML = `
            <button class="carted" id="product-${item.id}">-</button>
            <span  id="count-${item.id}" class="carted">${cart.getItem(item.id)[1]}</span>
            <button class="carted" id="product+${item.id}">+</button>
        `;
    }

    updateCount();
    
    buttonBindings(status, item);
}

export {buttonBindings, updateCartUI};