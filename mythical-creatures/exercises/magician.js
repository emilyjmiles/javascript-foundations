class Magician {
  constructor(object) {
    this.name = `The Great ${object.name}`;
    this.assistant = object.assistant;
    this.favoriteAccessory = object.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(spellWord) {
    return `${spellWord.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!';
  } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}

module.exports = Magician;
