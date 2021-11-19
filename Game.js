const Dealer = require("./Dealer");
const Player = require("./Player");
const { PlayerAction } = require("./constants");

class Game {

    constructor() {
        //create dealer and deck
    this.numPlayers = 3;
    this.blackJackDealer = new Dealer();
    this.playerList = new Array(this.numPlayers);
    this.bustPlayers = [];
    this.stickPlayers = [];

    //create players
    this.playerList.push(new Player("Kate"));
    this.playerList.push(new Player("Jonny"));
    this.playerList.push(new Player("May"));
    
    const deck = this.blackJackDealer.deck;
    deck.map(card => card.printCard());
    this.playerList.map(player => console.log(player.name, ":", player.value));

    this.dealRound();
    this.dealRound();

    this.playerList.map(player => console.log(player.name, ":", player.playerDeck, ", value:", player.value));
    
    }

    dealRound() {
        //init game (deal 2 cards each)
    this.playerList.map(player => {
        let card = this.blackJackDealer.dealCard();
        player.updatePlayerDeck(card);
    });
    }

    playRounds() {
        let round = 0;
        let winner = this.checkWinner();
        while(winner == null) {
            this.stickPlayers = [];
            round++;
            this.playerList.map(player => this.performPlayerAction(player))
            winner = this.checkWinner();
        }
        console.log("Game finished in", round, "rounds"); 
        this.playerList.map(player => console.log(player.name, ":", player.playerDeck));
        console.log("And the winner is...", winner);
    //check each player status and perform action for each player (hit, bust, stick)
    //check win condition
    }

    performPlayerAction(player) {
        if(player.value <= 17) {
            //draw a card
            let card = this.blackJackDealer.dealCard();
            console.log("Player", player.name, "got card: ", card);
            player.updatePlayerDeck(card);
        } else if (player.value > 17 && player.value < 21) {
            //stick player
            console.log("Player", player.name, "is stick!");
            this.stickPlayers.push(player);
        } else if (player.value > 21) {
            //go bust
            console.log("Player", player.name, "is bust!");
            this.bustPlayers.push(player);
        }
    }

    checkWinner() {
        const normalWinner = this.playerList.filter(p => p.value == 21)[0]
        let winner = null;
        if(normalWinner) {
            winner = normalWinner;
        } else if (this.bustPlayers.length == this.numPlayers) {
            winner = this.bustPlayers.pop().name;
            winner = this.bustPlayers.reduce((prev, curr) => prev.value < curr.value ? curr : prev).name
        } else if (this.stickPlayers.length == this.numPlayers || this.numPlayers == (this.stickPlayers.length + this.bustPlayers.length)) {
            winner = this.stickPlayers.reduce((prev, curr) => prev.value < curr.value ? curr : prev).name
        }
        return winner;
    }

}

const blackJackGame = new Game();
blackJackGame.playRounds();