import cart from "../scripts/cart.mjs";

function renderHeader(){
    const header = document.createElement("header");
    header.innerHTML = `            <a href="index.html"><div class="logo-on-black"></div></a>
                <form id="search-holder">
                    <input type="text" placeholder="Search" class="search">
                    <input type="submit" value="Search" class="btn">
                </form>
                <div class="cont space">
                    <div class="cont center">
                        <p><span>Returns</span><br>
                        <b>& Orders</b></p>
                    </div>
                    <div class="cart"><br>
                        <h3 class="cart-head center cart-count"></h3>
                    </div>
                    <div class="center cont set-bottom">
                        <a href="cart.html">Cart</a>
                    </div>
                </div>
            </div>`;
    header.classList.add("cont", "between", "light-frost");
    document.body.prepend(header);
}

renderHeader();

function updateCount(){
    const cartCount = document.getElementsByClassName("cart-count");
    for (let i = 0; i < cartCount.length; i++){
        cartCount[i].innerHTML = cart.count();
    }
}

updateCount();

export default updateCount;
