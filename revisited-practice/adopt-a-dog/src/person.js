var Dog = require("./dog.js");

class Person {
  constructor (name, dog) {
    this.name = name;
    this.dog = dog;
  };

  fillFoodBowl = () => {
    this.dog.eat();
  };

  throwBall = () => {
    if (this.dog.fetchBall() === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`;
    };
  };

  introduceNewFriends = (dog) => {
    this.dog.makeNewFriend(dog);
  };

  adoptAPup = (name, age) => {
    if (this.dog === undefined) {
      this.dog = new Dog({ name: name, age: age });
    }

    return `You can't adopt ${name}. You already have ${this.dog.name}!`;
  };
};

module.exports = Person;
