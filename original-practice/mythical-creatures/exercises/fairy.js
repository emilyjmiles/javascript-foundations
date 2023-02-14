class Fairy {
  constructor(name, disposition){
    this.name = name
    this.dust = 10;
    this.disposition = 'Good natured';
    this.clothes = {
      dresses: ['Iris'],
    }
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses([flower1, flower2, flower3]) {
    this.clothes.dresses.push(flower1, flower2, flower3);
    if (flower3 === undefined) {
      this.clothes.dresses.pop(flower3);
    }
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
    }
  }
}


module.exports = Fairy;
