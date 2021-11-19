class Card {

    constructor(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
    }

    // get getValue() {
    //     return this.value;
    // }

    // /**
    //  * @param {int} value
    //  */
    // set setValue(value) {
    //     this.value = value;
    // }

    printCard() {
        console.log(this.value, this.faceValue, this.suit);
    }

}

module.exports = Card;