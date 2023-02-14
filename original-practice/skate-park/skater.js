class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks;
    this.money = skater.cash;
    this.frustration = 0;
  }
  practice(trick) {
    if (trick !== 'kickflip') {
      this.frustration++
      this.tricks.bigSpin = true;
      this.tricks.treflip = true;
      return `I just learned to ${trick}!!!`
    }
    this.tricks.kickflip = true;
  }
}


module.exports = Skater;
