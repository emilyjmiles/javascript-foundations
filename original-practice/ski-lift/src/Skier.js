class Skier {
  constructor(name, hasTicket){
    this.name = name;
    this.hasLiftTicket = hasTicket || true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel += 1;
  }
  pickSlope() {
    if (this.skillLevel === 3) {
      this.nextSlope = 'blue square';
    } else {
      this.nextSlope = 'black diamond';
    }
  }
}

module.exports = Skier;
