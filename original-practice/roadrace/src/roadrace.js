class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(distance) {
    this.distance = distance
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }

  registerParticipants(runnerInfo) {
    this.participants.push(runnerInfo);
  }

  completeRace(){
    // this.participants.runRace()
    for (var i = 0; i < this.participants.length; i++) {
      if (!this.participants[i].completedRaces[this.name]) {
        console.log(this.participants[runRace()]);


        return true;

      }
    }
  }
}

module.exports = Roadrace;
