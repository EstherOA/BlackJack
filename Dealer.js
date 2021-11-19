const Card = require("./Card");
const { Suit, Value, FaceValue } = require("./constants");

class Dealer{

    constructor() {
        //create deck -> create cards of each type and suit        
        this.deck = new Array(52);
        
        for(let suit in Suit) {
            for (let val of Object.keys(Value)) {
                this.deck.push(new Card(suit, FaceValue[val], Value[val]));       
            }
        }
    }

    get getDeck() {
        return this.deck;
    }

    /**
     * @param {any[]} deck
     */
    set setDeck(deck) {
        this.deck = deck;
    }

    shuffleDeck() {
        //TODO: add shuffle algorithm
        //shuffle deck -> shuffle deck
    }

    dealCard() {
        return this.deck.pop();
        //remove num of cards from deck
        //invoke callback passing cards
    }
}

module.exports = Dealer;