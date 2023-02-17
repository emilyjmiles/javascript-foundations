class Snack {
  constructor (snack) {
    this.type = snack;
    this.deliciousLevel = `extra`;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  };

  getEaten = () => {
    this.amount -= 10;

    if (this.amount <= 20) {
      this.cuttingItClose = true;
    }
  };

  checkForHealthy = () => {
    if (this.type.toLowerCase().includes(`fruit`)) {
      return true;
    }

    return false;
  };
};

module.exports = Snack;
