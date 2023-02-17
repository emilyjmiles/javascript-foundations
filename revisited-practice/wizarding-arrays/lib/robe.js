class Robe {
  constructor () {
    this.pockets = [[], [], [], [], [], [], [], [], [], []];
  };

  addToPocket = (item) => {
    for (let i = 0; i < this.pockets.length; i++) {
      if (!this.pockets[i].length) {
        return this.pockets[i].push(item);
      };
    }
  };

  retrieve = (item) => {
    this.pockets.forEach(pocket => {
      pocket.forEach(element => {
        if (element === item) {
          pocket.pop();
        }
      });
    });

    return item;
  };

  emptyAllPockets = () => {
    this.pockets.forEach(pocket => {
      pocket.forEach(element => pocket.pop(element));
    });
  };
};

module.exports = Robe;