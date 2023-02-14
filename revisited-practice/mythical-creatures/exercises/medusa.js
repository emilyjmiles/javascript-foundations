var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim = (victim) => {
    let addStatue = new Statue(victim.name);
    let freePerson;

    if (this.statues.length === 3) {
      let setFree = this.statues.shift();
      freePerson = new Person(setFree.name);
      freePerson.mood = `relieved`;
    }
    if (this.statues.length < 3) {
      this.statues.push(addStatue);
    }

    return freePerson;
  };
};

module.exports = Medusa;