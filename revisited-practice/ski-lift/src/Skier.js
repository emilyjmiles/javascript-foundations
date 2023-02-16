class Skier {
  constructor (name, ticket) {
    this.name = name;
    this.hasLiftTicket = ticket;
    this.skillLevel = 1;
    this.nextSlope = `green circle`;
  };

  takeLesson = () => {
    this.skillLevel += 1;
  };

  pickSlope = () => {
    if (this.skillLevel < 5 && this.skillLevel >= 3) {
      this.nextSlope = `blue square`;
    }
    if (this.skillLevel >= 5) {
      this.nextSlope = `black diamond`;
    }
  };
};

module.exports = Skier;