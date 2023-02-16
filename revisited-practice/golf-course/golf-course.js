class GolfCourse {
  constructor (name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  };

  checkInGroup = (golfers) => {
    if (this.openings >= golfers.length) {
      this.openings -= golfers.length;
      golfers.forEach(golfer => this.currentlyPlaying.unshift(golfer.name));
      return `You're checked in. Have fun!`;
    }

    return `Sorry, we are currently booked! Please come back later.`;
  };
};

module.exports = GolfCourse;
