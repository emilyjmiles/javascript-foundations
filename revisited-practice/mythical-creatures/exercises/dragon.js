class Dragon {
  constructor (name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealCount = 0;
  };

  greet = () => {
    return `Hi, ${this.rider}!`;
  };

  eat = () => {
    this.mealCount++;

    if (this.mealCount > 2) {
      this.hungry = false;
    }
  };
};

module.exports = Dragon;