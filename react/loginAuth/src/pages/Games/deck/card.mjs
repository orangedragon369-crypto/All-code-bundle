export default class Card {
    constructor(id, color = "black", num = 4, attribute = null){
        this.color = color;
        this.num = num;
        this.id = id;
        this.effect = attribute ? attribute : () => console.log("none");
        this.location = null;
    }
}