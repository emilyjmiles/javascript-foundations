class SkatePark {
  constructor (skater) {
    this.name = skater.name;
    this.yearFounded = skater.year;
    this.style = skater.type;
    this.features = skater.features;
    this.isPrivate = skater.isPrivate || false;
    this.cost = skater.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    // console.log(skater);
    if (this.cost === 0) {
      this.occupants.push(skater);
      return `Welcome to the free Major Taylor Skatepark!`;
    } if (this.cost === 12) {
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return `Welcome to Curbside, the cost will be $${this.cost}.00.`;
    } if (skater.money < this.cost) {
      this.isPrivate = true; 
      console.log(skater.money);
      return `Sorry, you don't have enough money.`;
    }
  }
}

module.exports = SkatePark;
