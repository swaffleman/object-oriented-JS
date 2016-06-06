function DiceRoll(sides) {
  this.sides = sides;
}

DiceRoll.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var dice1 = new DiceRoll(6);


var dice2 = new DiceRoll(10);

console.log(dice1.roll===dice2.roll);