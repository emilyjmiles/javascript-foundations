class LunchBox {
  constructor (details) {
    this.owner = details.owner;
    this.material = details.madeOf;
    this.shape = details.shape;
    this.color = details.color;
    this.snacks = [];
  };

  acquireSnack = (snack) => {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  };

  findHealthySnacks = () => {
    return this.snacks.reduce((list, snack) => {
      if (snack.checkForHealthy()) {
        list.push(snack.type);
      }

      return list;
    }, []);
  };
};

module.exports = LunchBox;
