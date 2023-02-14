class Roadrace {
  constructor (details) {
    this.name = details.title;
    this.location = details.city;
    this.distance = 0;
    this.participants = [];
  };

  setDistance = (miles) => {
    this.distance = miles;

    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  };

  registerParticipants = (runner) => {
    if (!this.participants.includes(runner)) {
      this.participants.push(runner);
    };
  };

  completeRace = () => {
    this.participants.forEach(runner => {
      runner.completedRaces.push(this.name);
      runner.runSomeMiles(this.distance);
    });
  };
};

module.exports = Roadrace;
