class Sphinx {
  constructor () {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle = (riddle) => {
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }
    this.riddles.push(riddle);
  };

  attemptAnswer = (answer) => {
    this.heroesEaten += 1;

    this.riddles.forEach((riddle, index) => {
      if (riddle.answer === answer) {
        this.riddles.splice(index, 1);
      }
    });

    if (this.riddles.length) {
      return `That wasn't that hard, I bet you don't get the next one`;
    }

    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
  };
}

module.exports = Sphinx;