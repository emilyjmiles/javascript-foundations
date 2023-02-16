class Snowman {
  constructor (details) {
    this.carrots = details.carrots;
    this.coal = details.coal;
    this.buttons = details.buttons;
    this.snowballs = details.snowballs;
    this.magicHat = false;
  };

  canWearMagicHat = () => {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      return this.magicHat = false;
    }

    return this.magicHat = true;
  };
};

module.exports = Snowman;