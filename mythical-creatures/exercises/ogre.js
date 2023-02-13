class Ogre {
  constructor (details) {
    this.name = details.name;
    this.home = details.abode || `Swamp`;
    this.swings = 0;
  }

  encounter = (human) => {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swings += 1;
    }

    if (this.swings === 2) {
      human.knockedOut = true;
    }
  };

  swingAt = () => {
    this.swings += 1;
  };

  apologize = (human) => {
    human.knockedOut = false;
  };
}

module.exports = Ogre;