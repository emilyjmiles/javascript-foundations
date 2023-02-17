var Being = require('./being');
var Part = require('./part');

class Ship {
  constructor (details) {
    this.name = details.name;
    this.type = details.type;
    this.maxCrew = details.maxCrew;
    this.odometer = details.odometer || 0;
    this.fuelCapacity = details.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = details.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = details.parts || {};
    this.readyToFly = true;
  };

  addCrew = (beings) => {
    for (let i = 0; i < beings.length; i++) {
      if (this.crew.length < this.maxCrew && beings[i] instanceof Being) {
        this.crew.push(beings[i]);
      }
    }
  };

  loadCargo = (cargo) => {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  };

  updatePart = (part) => {
    if (this.parts[part.type]) {
      const valueDifference = this.parts[part.type].value - part.value;
      this.parts[part.type] = part;
      return valueDifference;
    }
    this.parts[part.type] = part;
  };

  checkReadiness = () => {
    const required = ['captain', 'fuel', 'parts'];

    for (let i = 0; i < required.length; i++) {
      if (required[i] === `parts`) {
        const parts = Object.entries(this[required[i]]);
        if (!parts.length) {
          this.readyToFly = false;
          return `Cannot fly without ${required[i]}`;
        }
      }
      if (!this[required[i]]) {
        this.readyToFly = false;
        if (required[i] === `captain`) {
          required[i] = `a captain`;
        }
        return `Cannot fly without ${required[i]}`;
      }
    }

    return `Good to go!`;
  };
};

module.exports = Ship;