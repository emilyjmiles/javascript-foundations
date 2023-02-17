class Gear {
  constructor (gear, amount) {
    this.type = gear;
    this.quantity = amount;
  };

  checkForValidity = () => {
    const validGear = ['food', 'ammunition', 'clothes'];
    let returnStatement;

    if (!validGear.includes(this.type)) {
      returnStatement = `I don't think a ${this.type} will help us.`;
      this.type = null;
    } else {
      returnStatement = `Great, we'll need lots of ${this.type}!`;
    }

    return returnStatement;
  };
};

module.exports = Gear;
