class Potion {
  constructor (potion, rareness) {
    this.name = potion;
    this.rareness = rareness || 0;
  };

  isRare = () => {
    return this.rareness >= 8 ? true : false;
  };
};

module.exports = Potion;