class VendingMachine {
  constructor (details) {
    this.id = details.id;
    this.isBroken = details.isBroken;
    this.snacks = [];
  };

  addSnacks = (snack) => {
    if (this.snacks.length) {
      for (let i = 0; i < this.snacks.length; i++) {
        if (this.snacks[i].name === snack.name) {
          return `Sorry, that snack is already stocked! Try adding a different snack.`;
        }
        this.snacks.push(snack);
      }
    }
    this.snacks.push(snack);
  };

  purchaseSnack = (snack, amount) => {
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].itemsInStock === 0) {
        return `Sorry, no items in stock. Try another item.`;
      }

      if (this.snacks[i].price > amount) {
        return `Sorry, not enough payment. Please add more money.`;
      }

      if (this.snacks[i].name === snack) {
        this.snacks[i].itemsInStock -= 1;
        return `Success! Here is $${amount - this.snacks[i].price} back!`;
      };
    }
  };
};

module.exports = VendingMachine;
