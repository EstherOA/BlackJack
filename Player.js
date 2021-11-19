class Player {

    constructor(name) {
        this.name = name;
        this.value = 0;
        this.playerDeck = [];
        this.updatePlayerDeck.bind(this);
    }

    updatePlayerDeck(card) {
        this.playerDeck.push(card);
        this.value += card.value;
    }
 
}

module.exports = Player;