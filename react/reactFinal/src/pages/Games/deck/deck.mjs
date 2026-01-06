import { Card, Player } from "./card.mjs";

class Deck {
  constructor(cardSetCount = 1, cardSpec = [], startHand = 0) {
    this.deckCount = cardSetCount;
    this.cardSpec = cardSpec;
    this.cardOrder = [];
    this.cards = {};
    this.current = 0;
    this.discard = [];
    this.players = {};
    this.playerOrder = [];
    this.playNext = 1;
    this.startHand = startHand;

    this.createDeck();
  }

  _buildRangeFromSpec(value) {
    const range = [];
    if (!Array.isArray(value)) return range;
    for (let i = 0; i < value.length; i++) {
      const v = value[i];
      const next = value[i + 1];
      if (typeof v === "number" && typeof next === "number") {
        for (let n = v; n <= next; n++) range.push(n);
        i++;
      } else {
        range.push(v);
      }
    }
    return range;
  }

  createDeck() {
    for (let set = 0; set < this.deckCount; set++) {
      let color = null;
      let range = [];
      let effectFactory = null;
      for (const item of this.cardSpec) {
        const t = typeof item;
        if (t === "string") {
          color = item;
          range = [];
          effectFactory = null;
        } else if (Array.isArray(item)) {
          range = this._buildRangeFromSpec(item);
        } else if (t === "function") {
          effectFactory = item(color, range, set);
          if (typeof effectFactory !== "function") {
            const possibleAction = effectFactory;
            effectFactory = () => possibleAction || { type: "NONE" };
          }
        } else if (t === "number") {
          const num = item;
          this.createCards(num, color, range, effectFactory);
          range = [];
          effectFactory = null;
        } else {
        }
      }
    }
  }

  createCards(num, color, range, effectFactory) {
    for (let copy = 0; copy < num; copy++) {
      for (const val of range) {
        const id = this.cardOrder.length;
        this.cards[id] = new Card(val, color, typeof effectFactory === "function" ? effectFactory : (() => ({ type: "NONE" })));
        this.cardOrder.push(id);
      }
    }
  }

  shuffle() {
    const arr = this.cardOrder;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  createPlayer(name) {
    const nomen = new Player(name, this.startHand, this.playerOrder.length);
    this.players[name] = nomen;
    this.playerOrder.push(name);
    for (let i = 0; i < this.startHand; i++) {
      this.draw(name);
    }
    return nomen;
  }

  draw(playerName) {
    const id = this.cardOrder.pop();
    if (id === undefined) return null;
    const p = this.players[playerName];
    if (!p) return null;
    p.hand.push(id);
    return id;
  }

  play(playerName, cardId, wildColor = null) {
    const player = this.players[playerName];
    if (!player) {
      console.warn("Unknown player:", playerName);
      return;
    }

    const didPlay = player.play(cardId);
    if (!didPlay) {
      console.warn("Player does not have card", cardId);
      return;
    }
    
    const card = this.cards[cardId];
    if ((card.color === "wild" || card.color === "any") && wildColor) {
      card.color = wildColor;
    }

    const action = card.effect() || { type: "NONE" };
    this.processAction(action);

    if (!action.preventAutoAdvance) {
      this.endTurn();
    }
    this.discard.push(cardId);
  }

  endTurn() {
    const total = this.playerCount();
    if (total === 0) return;
    this.current = (this.current + this.playNext + total) % total;
  }

  playerCount() {
    return this.playerOrder.length;
  }

  processAction(action = { type: "NONE" }) {
    switch (action.type) {
      case "NONE":
        break;

      case "DRAW": {
        const amount = action.amount || 0;
        const next = this._nextPlayerName();
        for (let i = 0; i < amount; i++) this.draw(next);
        if (action.skipNext) this.endTurn();
        break;
      }

      case "REVERSE":
        this.reverseDirection();
        break;

      case "SKIP":
        this.endTurn();
        break;

      case "WILD":
        break;

      case "WILD_DRAW4": {
        const next = this._nextPlayerName();
        for (let i = 0; i < 4; i++) this.draw(next);
        this.endTurn();
        break;
      }

      default:
        console.warn("Unknown action type:", action);
    }
  }

  _nextPlayerName() {
    const total = this.playerCount();
    if (total === 0) return null;
    const idx = (this.current + this.playNext + total) % total;
    return this.playerOrder[idx];
  }

  reverseDirection() {
    this.playNext *= -1;
  }
}

const unoSpec = [
  "#ff0000", [0, 9], () => (() => ({ type: "NONE" })), 2,
  "#ff0000", ["Reverse"], () => (() => ({ type: "REVERSE" })), 2,
  "#ff0000", ["Skip"], () => (() => ({ type: "SKIP" })), 2,
  "#ff0000", ["Draw2"], () => (() => ({ type: "DRAW", amount: 2, skipNext: true })), 2,

  "#00cd00", [0, 9], () => (() => ({ type: "NONE" })), 2,
  "#00cd00", ["Reverse"], () => (() => ({ type: "REVERSE" })), 2,
  "#00cd00", ["Skip"], () => (() => ({ type: "SKIP" })), 2,
  "#00cd00", ["Draw2"], () => (() => ({ type: "DRAW", amount: 2, skipNext: true })), 2,

  "#0000ff", [0, 9], () => (() => ({ type: "NONE" })), 2,
  "#0000ff", ["Reverse"], () => (() => ({ type: "REVERSE" })), 2,
  "#0000ff", ["Skip"], () => (() => ({ type: "SKIP" })), 2,
  "#0000ff", ["Draw2"], () => (() => ({ type: "DRAW", amount: 2, skipNext: true })), 2,

  "#ffff02", [0, 9], () => (() => ({ type: "NONE" })), 2,
  "#ffff02", ["Reverse"], () => (() => ({ type: "REVERSE" })), 2,
  "#ffff02", ["Skip"], () => (() => ({ type: "SKIP" })), 2,
  "#ffff02", ["Draw2"], () => (() => ({ type: "DRAW", amount: 2, skipNext: true })), 2,

  "wild", ["Wild"], () => (() => ({ type: "WILD" })), 4,
  "wild", ["WildDraw4"], () => (() => ({ type: "WILD_DRAW4" })), 4
];

const unoDeck = new Deck(1, unoSpec, 7);
unoDeck.shuffle();

const standard = [
    "#ff0000", ["A", 2, 10, "J", "Q", "K", "Joker"], () => null, 2,
    "#000000", ["A", 2, 10, "J", "Q", "K", "Joker"], () => null, 2,
    "#ff0000", ["A", 2, 10, "J", "Q", "K"], () => null, 2,
    "#000000", ["A", 2, 10, "J", "Q", "K"], () => null, 2
];

export { unoDeck, standard, Deck };