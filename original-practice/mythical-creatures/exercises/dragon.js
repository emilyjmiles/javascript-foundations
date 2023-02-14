class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.ate = 0;
  }
  eat() {
    this.ate ++
    if (this.ate > 2) {
      this.hungry = false;
    }
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
}



module.exports = Dragon;
