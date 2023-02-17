class Part {
  constructor (part) {
    this.type = part;
    this.broken = false;
    this.breakOccurences = 0;
  };

  break = () => {
    this.breakOccurences += 1;
    this.broken = true;
  };

  repair = () => {
    if (this.breakOccurences < 2) {
      this.broken = false;
    }

    return `This ${this.type} has seen better days, we'll need a brand new one!`;
  };
};

module.exports = Part;
