class Direwolf {
  constructor (name, home, size) {
    this.name = name;
    this.home = home || `Beyond the Wall`;
    this.size = size || `Massive`;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect = (stark) => {
    this.huntsWhiteWalkers = false;
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.starksToProtect.push(stark);
    }
  };

  leave = (stark) => {
    if (this.starksToProtect.includes(stark)) {
      const index = this.starksToProtect.indexOf(stark);
      this.starksToProtect.splice(index, 1);
      stark.safe = false;
    }
  };
}

module.exports = Direwolf;