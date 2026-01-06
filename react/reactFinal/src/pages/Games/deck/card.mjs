class Card {
  constructor(value, color = "black", effectFactory = null) {
    this.value = value;
    this.color = color;
    this.effectFactory = typeof effectFactory === "function" ? effectFactory : (() => () => ({ type: "NONE" }));
    this.location = null;
  }

  effect() {
    try {
      return this.effectFactory();
    } catch (e) {
      console.error("Card.effect() factory threw:", e);
      return { type: "NONE" };
    }
  }
}

class Player {
  constructor(name, handSize = 0, order = 0) {
    this.name = name;
    this.handSize = handSize;
    this.hand = [];
    this.order = order;
  }

  play(cardId) {
    const idx = this.hand.indexOf(cardId);
    if (idx === -1) return false;
    const last = this.hand.length - 1;
    [this.hand[idx], this.hand[last]] = [this.hand[last], this.hand[idx]];
    this.hand.pop();
    return true;
  }
}

export { Card, Player };