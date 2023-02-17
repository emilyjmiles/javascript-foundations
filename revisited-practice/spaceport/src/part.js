class Part {
  constructor (details) {
    this.name = details.name;
    this.type = details.type;
    this.value = details.value;
    this.broken = false;
    this.isValid = true;
  };

  checkForValidity = () => {
    !this.name || !this.type || !this.value
      ? this.isValid = false
      : this.isValid = true;

    const requiredProperties = ['name', 'type', 'value'];
    let missingProperty;

    requiredProperties.forEach(property => {
      if (this[property] === undefined) {
        missingProperty = property;
      }
    });

    if (!this.isValid) {
      return `This part needs a ${missingProperty}!`;
    }
  };
};

module.exports = Part;