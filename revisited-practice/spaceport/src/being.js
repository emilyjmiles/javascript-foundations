class Being {
  constructor (name, type) {
    this.name = name;
    this.isAlive = true;
    this.species = type;
    this.credits = 0;
  };

  updateCredits = (amount) => {
    this.credits += amount;
  };
};

module.exports = Being;
