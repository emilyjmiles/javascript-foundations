class Centaur {
  constructor (details) {
    this.name = details.name;
    this.breed = details.type;
    this.cranky = false;
    this.count = 0;
    this.standing = true;
    this.layingDown = false;
  };

  shootBow = () => {
    this.count += 1;
    if (this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }

    return `Twang!!!`;
  };

  run = () => {
    this.count += 1;
    if (this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }

    return `Clop clop clop clop!!!`;
  };

  sleep = () => {
    if (this.layingDown) {
      this.cranky = false;
      this.count = 0;
      return `ZZZZ`;
    }

    return `NO!`;
  };

  layDown = () => {
    this.standing = false;
    this.layingDown = true;
  };

  standUp = () => {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion = () => {
    if (this.standing) {
      this.cranky = false;
    }

    return `Not while I'm laying down!`;
  };
};

module.exports = Centaur;