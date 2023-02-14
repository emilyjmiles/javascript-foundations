class Hobbit {
  constructor(name) {
    this.name = name.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = true;
  }
  celebrateBirthday() {
    this.age ++
    if (this.age <= 32) {
      this.adult;
    } else if (this.age <= 100) {
      this.adult = true;
    } else {
      this.old = true;
    }
  }
  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing;
      return "Here is the ring!";
    } else {
      this.hasRing = false;
      return "You can't have it!";
    }
  }
}


module.exports = Hobbit;
