class Runner {
  constructor(runnerName, runnerAge) {
    this.name = runnerName;
    this.age = runnerAge;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(milesRun) {
    this.milesRun += milesRun;
    this.fitness += milesRun;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(raceName, milesRun) {
    // for (var i = 0; i < this.completedRaces.length; i++) {
    // } if (!this.completedRaces.includes(raceName)) {
      this.completedRaces.push(raceName);
      this.runSomeMiles(milesRun);
      // this.milesRun += milesRun;
      // this.fitness += milesRun;
    // }
  }
}

module.exports = Runner;
