class Wand {
  constructor (wood, length, core) {
    this.type = wood;
    this.size = length;
    this.core = core;
  };

  cast = (spell) => {
    return `Casting ${spell}!`;
  };
};

module.exports = Wand;