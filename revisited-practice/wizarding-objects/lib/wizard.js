class Wizard {
  constructor (details) {
    this.name = details.name;
    this.petsCount;
    this.pets = [];
    this.wand;
  };

  adoptPet = (pet) => {
    this.pets.push(pet);
    this.petsCount = this.pets.length;
  };

  petList = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const pets = this.pets.reduce((list, pet) => {
      let start = `A`;

      if (vowels.includes(pet.type.charAt(0))) {
        start = `An`;
      }

      list.push(`${start} ${pet.type} named ${pet.name}`);

      return list;
    }, []);

    return `${pets.join('; ')}.`;
  };

  getWand = (wand) => {
    this.wand = wand;
  };

  castSpell = (spell) => {
    return this.wand.cast(spell);
  };
};

module.exports = Wizard;