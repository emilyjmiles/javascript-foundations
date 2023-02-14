var Skier = require('./Skier');

class Lift {
  constructor(seats, lift) {
    this.inService = true;
    this.limit = seats;
    this.skiers = [];
    this.safetyBar = lift || 'up';
  }
  admitSkier(name, hasTicket) {
    var skier = new Skier(name, hasTicket);
    if (hasTicket === false) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
    if ((this.limit > this.skiers.length) && (skier.hasLiftTicket === true)) {
      this.skiers.push(skier)
    }
    return `Sorry, ${name}. Please wait for the next lift!`
  }
  startLift() {
    if (this.limit === this.skiers.length) {
      this.safetyBar = 'down';
    } if (this.skiers.length === 3) {
      return `We still need 1 more skier!`
    } if (this.skiers.length === 1) {
      return `We still need 2 more skiers!`
    }
  }
}

module.exports = Lift;
