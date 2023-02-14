const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkDetails) {
    this.name = starkDetails.name;
    this.location = starkDetails.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return 'Winter is Coming';
    }
      return 'The North Remembers';
  }

  callDirewolf(direwolf, home) {
    var direwolf = new Direwolf(direwolf, home);
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf;
  }
}


module.exports = Stark;
