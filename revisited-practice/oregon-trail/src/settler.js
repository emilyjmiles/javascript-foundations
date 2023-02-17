class Settler {
  constructor (details) {
    this.name = details.name;
    this.age = details.age;
    this.nationality = details.nationality || `unknown`;
    this.status = `healthy`;
    this.ailments = [];
  };

  experienceDistress = (ailment) => {
    if (this.status !== `dead`) {
      this.ailments.push(ailment);
    }
    if (this.ailments.length === 1) {
      this.status = `fair`;
    }
    if (this.ailments.length === 2) {
      this.status = `poor`;
    }
    if (this.ailments.length === 3) {
      this.status = `dead`;
    }
  };

  heal = () => {
    if (this.status !== `dead`) {
      this.ailments = [];
      this.status = `healthy`;
    }

    return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
  };
};

module.exports = Settler;