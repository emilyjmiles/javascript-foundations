class Dog {
  constructor (details) {
    this.name = details.name;
    this.age = details.age;
    this.hungry = true;
    this.energyLevel = 5;
    this.friends = [];
  };

  eat = () => {
    if (!this.hungry) {
      return `I refuse to eat.`;
    }

    this.hungry = false;
    return `Yum!`;
  };

  fetchBall = () => {
    if (this.energyLevel > 3) {
      this.energyLevel -= 1;
      return `This is fun!`;
    }

    return `Nah, I'm going to sleep instead.`;
  };

  sleep = () => {
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    }

    return `I have too much energy to rest. I'm going to chew something instead.`;
  };

  makeNewFriend = (dog) => {
    this.friends.push(dog.name);
  };
};

module.exports = Dog;
