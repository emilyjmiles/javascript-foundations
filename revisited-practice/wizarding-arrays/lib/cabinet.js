class Cabinet {
  constructor () {
    this.potions = [];
  };

  isEmpty = () => {
    return !this.potions.length ? true : false;
  };

  add = (potion) => {
    if (Array.isArray(potion)) {
      potion.forEach(item => this.potions.push(item));
    } else {
      this.potions.push(potion);
    }
  };

  takeFirstPotion = () => {
    return this.potions.splice(0, 1).join();
  };

  takePotionWithName = (potionName) => {
    return this.potions.find((potion, index) => {
      if (potion.name === potionName) {
        this.potions.splice(index, 1);
        return potion;
      }
    });
  };

  count = (potionName) => {
    return this.potions.reduce((amount, potion) => {
      if (potion.name === potionName) {
        amount += 1;
      }

      return amount;
    }, 0);
  };
};

module.exports = Cabinet;