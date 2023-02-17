class Planet {
  constructor (details) {
    this.name = details.name;
    this.shop = details.shop;
    this.currentShip;
    this.coordinates = details.coordinates;
  };

  landShip = (ship) => {
    this.currentShip = ship;
  };

  calculateDistance = (planet) => {
    const x = planet.coordinates.x - this.coordinates.x;
    const y = planet.coordinates.y - this.coordinates.y;
    const z = planet.coordinates.z - this.coordinates.z;

    return Math.sqrt((x * x) + (y * y) + (z * z));
  };

  refuel = () => {
    this.currentShip.fuel = this.currentShip.fuelCapacity;
  };

  giveClearance = (planet) => {
    if (!this.currentShip.fuel) {
      return `Clearance denied: Cannot fly without fuel`;
    };
    this.currentShip.fuel = 0;
    planet.currentShip = this.currentShip;
    delete this.currentShip;
    return `Clearance granted: Enjoy your trip to ${planet.name}`;
  };
};

module.exports = Planet;