var Part = require('./part');

class Shop {
  constructor (details) {
    this.name = details.name;
    this.inventory = {};
  };

  addInventory = (part) => {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  };

  outfitShip = (ship, partName) => {
    if (!ship.captain) {
      return `Cannot outfit a ship without a captain`;
    }
    if (ship.captain.credits < this.inventory[partName].value) {
      const needed = this.inventory[partName].value - ship.captain.credits;
      return `You require ${needed} more credits to make this purchase`;
    }
    ship.captain.credits -= this.inventory[partName].value;
    ship.parts[partName] = this.inventory[partName];
    delete this.inventory[partName];
    return `${partName} added to ship`;
  };

};

module.exports = Shop;