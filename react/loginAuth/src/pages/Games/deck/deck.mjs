import Card from "./card.mjs";

export default class Deck {
    constructor(cardSetCount, cards = []){
        this.cardCode = [];
        this.cardOrder = [];
        this.cards = {};
        this.cycleList(cards, (info) => this.cardCode.push(info));
    }
    
    cycleList(list, code = ()=> null){
        list.map((item) => {
            if (typeof item === "object" && item) {
                cycleList(item, code)
            } else {
                code(item, list, code)
            }
        })
    }

    createCards(color, range, attribute = () => null) {
        
        this.cards[key] = Card(id, color, num, attribute);
    }
}