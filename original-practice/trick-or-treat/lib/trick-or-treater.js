class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.candies.push(candy);
    this.countCandies = this.bag.count +=1
    this.hasCandy = true;
    console.log(this.countCandies);
  }

  eat() {
    this.countCandies = this.bag.count -=1
    this.bag.candies.length = 0
  }
}

module.exports = TrickOrTreater;
