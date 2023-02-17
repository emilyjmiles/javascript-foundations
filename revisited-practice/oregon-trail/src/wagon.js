class Wagon {
  constructor (details) {
    this.title = details.name;
    this.wheels = details.wheels || [];
    this.axles = details.axles || [];
    this.oxen = details.oxen || [];
    this.yokes = details.yokes || [];
    this.food = details.food;
    this.ammunition = details.ammunition;
    this.clothes = details.clothes;
    this.settlers = details.settlers || [];
  };

  addPart = (part) => {
    const parts = ['wheels', 'axles', 'oxen', 'yokes'];

    parts.find(item => {
      if (item.includes(part.type)) {
        this[item].push(part);
      }
    });
  };

  canTravel = () => {
    const partsRequired = [
      { part: 'wheels', amount: 4 },
      { part: 'axles', amount: 2 },
      { part: 'oxen', amount: 2 },
      { part: 'yokes', amount: 1 }
    ];

    let returnStatement = true;

    partsRequired.forEach(part => {
      if (this[part.part].length < part.amount || !this.settlers.length) {
        returnStatement = false;
      }
    });

    partsRequired.forEach(part => {
      if (this[part.part].some(element => element.broken)) {
        returnStatement = false;
      }
    });

    if (this.settlers.some(settler => settler.status === `dead`)) {
      returnStatement = false;
    }

    if (this.yokes.length !== this.oxen.length / 2) {
      returnStatement = false;
    }

    return returnStatement;
  };
};

module.exports = Wagon;