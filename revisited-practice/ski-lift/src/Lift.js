var Skier = require('./skier');

class Lift {
  constructor (maxSkiers) {
    this.inService = true;
    this.limit = maxSkiers;
    this.skiers = [];
    this.safetyBar = `up`;
  };

  admitSkier = (name, ticket) => {
    const skier = new Skier(name, ticket);

    if (this.limit > this.skiers.length && ticket) {
      this.skiers.push(skier);
    }
    if (!ticket) {
      return `Sorry, ${name}. You need a lift ticket!`;
    }

    return `Sorry, ${name}. Please wait for the next lift!`;
  };

  startLift = () => {
    const spotsAvailable = this.limit - this.skiers.length;

    if (this.limit === this.skiers.length) {
      this.safetyBar = `down`;
    }
    if (spotsAvailable === 1) {
      return `We still need ${spotsAvailable} more skier!`;
    }
    if (spotsAvailable > 1) {
      return `We still need ${spotsAvailable} more skiers!`;
    }
  };
};

module.exports = Lift;