class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snacks) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snacks.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.';
      }
    }
    this.snacks.push(snacks);
  }
  purchaseSnack(snacks, payment) {
    for (var i = 0; i < this.snacks.length; i++) {
    if (this.snacks[i].itemsInStock === 0) {
      return 'Sorry, no items in stock. Try another item.';
    }
    if (this.snacks[i].price > payment) {
      return 'Sorry, not enough payment. Please add more money.';
    }
    if (this.snacks[i].name === snacks) {
        this.snacks[i].removeItem();
        var change = payment - this.snacks[i].price;
        return `Success! Here is $${change} back!`;
      }
    }
  }
}

module.exports = VendingMachine;
