class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.disposition = `Good natured`;
    this.humanWards = [];
    this.clothes = {
      dresses: [`Iris`],
    };
  }

  receiveBelief = () => {
    const addDust = this.dust += 1;

    return addDust - this.dust;
  };

  believe = () => {
    const addDust = this.dust += 10;

    return addDust - this.dust;
  };

  makeDresses = (dresses) => {
    dresses.forEach(dress => {
      if (!this.clothes.dresses.includes(dress)) {
        this.clothes.dresses.push(dress);
      };
    });
  };

  becomeProvoked = () => {
    this.disposition = `Vengeful`;
  };

  replaceInfant = (infant) => {
    this.humanWards.push(infant);
    if (this.disposition === `Vengeful`) {
      infant.disposition = `Malicious`;
    }

    if (this.humanWards.length === 3) {
      this.disposition = `Good natured`;
    }

    return infant;
  };
}

module.exports = Fairy;