const Suit = {
    HEARTS: "Hearts",
    DIAMONDS: "Diamonds",
    SPADES: "Spades",
    CLUBS: "Clubs"
};

const Value = {
    ACE: 11,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 10,
    QUEEN: 10,
    KING: 10
};

const FaceValue = {
    ACE: "Ace",
    TWO: "Two",
    THREE: "Three",
    FOUR: "Four",
    FIVE: "Five",
    SIX: "Six",
    SEVEN: "Seven",
    EIGHT: "Eight",
    NINE: "Nine",
    TEN: "Ten",
    JACK: "Jack",
    QUEEN: "Queen",
    KING: "King"
};

const PlayerAction = {
    HIT: 0,
    STICK: 1,
    BUST: 2
};

Object.freeze(Suit);
Object.freeze(Value);
Object.freeze(FaceValue);
Object.freeze(PlayerAction);

module.exports = {Suit, Value, FaceValue, PlayerAction};