console.log("connected");

class Card{
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
    
    show(){
        console.log(`${this.name} of ${this.suit}`);
    }
}

class Deck{
    constructor(){
        this.reset();
        // this.cards = this.reset();
        this.shuffle();
    }

    reset(){
        let res = [];
        const vals = ["Ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
        const suits = ["clubs", "diamonds", "hearts", "spades"];

        suits.forEach(suit =>{
            vals.forEach(function(val, idx){
                res.push(new Card(suit, name, idx + 1))
            })
        })
        return res
    }

    deal(){
        let rdx = Math.floor(Math.random()* this.cards.length);
        let card = this.cards.splice(rdx, 1);
        return card[0];
    }

    shuffle(){
        let c = this.cards
        for(let i = c.length-1; i > 0; i--){
            let rdx = Math.floor(Math.random() * (i+1))
            let t = c[rdx];
            c[rdx] = c[i];
            c[i] = t;
        }
    }
}

class Player{
    constructor(name,){
        this.name = name;
        this.hand = [];
    }   
    
    draw(deck){
        let card = deck.deal();
        this.hand.push(card);
    }

    discard(){
        return this.hand.shift();
    }
}