class SkatePark {
  constructor (details) {
    this.name = details.name;
    this.yearFounded = details.year;
    this.style = details.type;
    this.features = details.features;
    this.isPrivate = details.isPrivate || false;
    this.cost = details.price || 0;
    this.occupants = [];
  };

  admit = (skater) => {
    if (this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    }

    if (!this.isPrivate && this.occupants.length < 3) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    }

    if (this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    }

    return `Sorry, we are at max capacity. Thank you for understanding.`;

  };
};

module.exports = SkatePark;