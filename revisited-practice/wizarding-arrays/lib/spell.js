class Spell {
  constructor (spell, description) {
    this.name = spell;
    this.description = description;
    this.executionHistory = [];
  };

  execute = (object) => {
    if (Array.isArray(object)) {
      return object.reduce((list, item) => {
        this.executionHistory.push(item);
        list.push(`Success! You've cast a spell on the ${item}.`);

        return list;
      }, []).join(' ');
    }

    this.executionHistory.push(object);
    return `Success! You've cast a spell on the ${object}.`;
  };

  clearExecutionHistory = () => {
    this.executionHistory = [];
  };
};

module.exports = Spell;