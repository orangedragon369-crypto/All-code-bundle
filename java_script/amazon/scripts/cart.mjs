class Cart{
    constructor(tax) {
        this.items = [];
        this.num = [];
        this.cost = 0;
        this.tax = tax;
    }

    count(){
        const total = this.num.reduce((sum, qty) => sum + qty, 0);
        return total >= 100 ? "99+" : total;
    }

    len(what){
        switch (what){
            case "items":
                return this.items.length;
            case "num":
                return this.num.length;
            default:
                return null
        }
    }
    
    addItem(item, num, cost){
        if (this.items.includes(item)) return this.moreItem(item, cost);
        this.items.push(item);
        this.num.push(num);
        this.cost += cost * num;
    }

    moreItem(which, cost){
        this.num[this.items.findIndex((item) => item === which)]++;
        this.cost += cost;
    }

    lessItem(which, cost){
        if (!which) return;
        if (this.getItem(which)[1] > 0){
            this.num[this.items.findIndex((item) => item === which)]--;
            this.cost -= cost;
        }
    }

    pop(){
        let item = [this.items.pop(), this.num.pop()];
        return item;
    }

    getItem(name){
        let item = this.items.findIndex((it) => it === name)
        if (item === -1) return [null, null];
        return [this.items.at(item), this.num.at(item)];
    }

    saveItems(){
        localStorage.setItem("this.items", JSON.stringify(this.items));
        localStorage.setItem("this.num", JSON.stringify(this.num));
        localStorage.setItem("this.cost", JSON.stringify(this.cost));
    }

    getInfoStorage(){
        this.items = localStorage.getItem("this.items") !== null? JSON.parse(localStorage.getItem("this.items")): this.items;
        this.num = localStorage.getItem("this.num") !== null? JSON.parse(localStorage.getItem("this.num")): this.num;
        this.cost = localStorage.getItem("this.cost") !== null? JSON.parse(localStorage.getItem("this.cost")): 0;
    }

    clear(){
        this.items = [];
        this.num = [];
        this.cost = 0;
    }

    delete(item, price){
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.cost -= price*this.num[index];
            this.items.splice(index, 1);
            this.num.splice(index, 1);
        }

        if (this.num[index] === 0) {
            this.items.splice(index, 1);
            this.num.splice(index, 1);
        }
    }
}

const cart = new Cart(.0745);
cart.getInfoStorage()

export default cart;
