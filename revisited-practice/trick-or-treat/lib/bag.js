class Bag {
  constructor () {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  };

  fill = (candy) => {
    this.candies.push(candy);
    this.count = this.candies.length;
  };

  contains = (candyName) => {
    return this.candies.some(candy => candy.type === candyName);
  };
};

module.exports = Bag;