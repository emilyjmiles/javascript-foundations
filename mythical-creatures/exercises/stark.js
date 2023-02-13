const Direwolf = require("./direwolf");

class Stark {
  constructor (details) {
    this.name = details.name;
    this.location = details.area || `Winterfell`;
    this.safe = false;
  }

  sayHouseWords = () => {
    if (!this.safe) {
      return `Winter is Coming`;
    }

    return `The North Remembers`;
  };

  callDirewolf = (name, home) => {
    const direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.starksToProtect.push(this);
    this.safe = true;

    return direwolf;
  };
}

module.exports = Stark;