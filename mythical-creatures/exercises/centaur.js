class Centaur {
  constructor(centaur, mood) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (this.cranky === false && this.layingDown === false) {
      return 'Twang!!!';
    }
    return 'NO!';
  }

  run() {
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!';
    } else if (this.cranky === false) {
      this.cranky = true;
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      return 'ZZZZ';
    }
    return 'NO!'
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = false;
    return "Not while I'm laying down!"
  }
}



module.exports = Centaur;
