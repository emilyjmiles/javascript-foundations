class Craft {
  constructor (details) {
    this.name = details.type;
    this.materials = details.materials;
    this.completed = false;
  }

  completeCraft = () => {
    this.completed = true;

    return `All done! It looks great!`;
  };

  calculateProjectTotal = () => {
    return this.materials.reduce((total, material) => {
      total += material.calculateMaterialCost();

      return total;
    }, 0);
  };
}

module.exports = Craft;
