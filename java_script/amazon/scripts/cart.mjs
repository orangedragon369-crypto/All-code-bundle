class Cart{
    constructor(tax) {
        this.items = [];
        this.prices = [];
        this.num = [];
        this.pics = [];
        this.cost = 0;
        this.taxes = this.cost * tax;
        this.total = this.cost + this.taxes;
    }

    count(){
        let much = this.items.length;
        for (items in this.num) much += num[items] > 1 ? 1 : 0;
        much = much >= 100 ? "99+": much;
        return much;
    }

    len(which){
        return this.which.length -1;
    }
    
    addItem(item, cost, num, pics){
        this.items.push(item);
        this.prices.push(cost);
        this.num.push(num);
        this.pics.push(pics);
        this.cost += cost * num;
    }

    pop(item){
        item = this.getItem(item);
        this.items.pop(item[3]);
        cost -= this.prices.pop(item[3]) * this.num.pop(item[3]);
        return item;
    }

    getItem(item){
        let toReturn = [];
        item = typeof(items) === "number" ? item : this.items.findIndex(item);
        toReturn.push(this.items.at(item));
        toReturn.push(this.prices.at(item));
        toReturn.push(this.num.at(item));
        toReturn.push(this.pics.at(item));
        toReturn.push(item);
        return toReturn;
    }

    saveItems(){
        localStorage.setItem("this.items", this.items);
        localStorage.setItem("this.prices", this.prices);
        localStorage.setItem("this.num", this.num);
        localStorage.setItem("this.pics", this.pics);
        localStorage.setItem("this.cost", this.cost);
    }

    getInfoStorage(){
        this.items = localStorage.getItem("this.items") !== null? JSON.parse(localStorage.getItem("this.items")): this.items;
        this.prices = localStorage.getItem("this.prices") !== null? JSON.parse(localStorage.getItem("this.prices")): this.prices;
        this.num = localStorage.getItem("this.num") !== null? JSON.parse(localStorage.getItem("this.num")): this.num;
        this.pics = localStorage.getItem("this.pics") !== null? JSON.parse(localStorage.getItem("this.pics")): this.pics;
        this.cost = localStorage.getItem("this.cost") !== null? JSON.parse(localStorage.getItem("this.cost")): 0;
    }

    clear(){
        this.items = [];
        this.prices = [];
        this.num = [];
        this.pics = [];
        this.cost = 0;
    }

    delete(item){this.pop(item)}
}

const products = new Cart(0);
const cart = new Cart(.0745);
cart.getInfoStorage()
export {cart};