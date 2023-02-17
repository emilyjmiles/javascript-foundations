class Ingredient {
  constructor (details) {
    this.name = details.name;
    this.amount = details.amount;
  };

  changeAmount = (amount) => {
    this.amount = amount;
  };
};

module.exports = Ingredient;
