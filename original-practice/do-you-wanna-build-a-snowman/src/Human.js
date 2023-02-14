var Snowman = require('./Snowman');

class Human {
  constructor(humanName) {
    this.name = humanName;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    };
  }

  gatherMaterials(materials, quantity) {
    this.materials[materials] = this.materials[materials] + quantity;
  }

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    snowman.canWearMagicHat();
    return snowman;
  }

  placeMagicHat() {
    this.buildASnowman()
    if (this.buildASnowman().magicHat === true) {
      return 'Woah, this snowman is coming to life!';
    }
    return "I guess I didn't build it correctly.";
  }
}

module.exports = Human;
