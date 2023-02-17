class Recipe {
  constructor (details) {
    this.name = details.name;
    this.ingredients = details.ingredients;
    this.attempted = false;
    this.rating;
  };

  rateRecipe = (rating) => {
    this.attempted = true;
    this.rating = rating;
  };

  changeIngredientAmount = (item, amount) => {
    this.ingredients.forEach(ingredient => {
      if (ingredient.name === item) {
        ingredient.changeAmount(amount);
      }
    });
  };

  generateGroceryList = () => {
    const list = [];

    this.ingredients.forEach(ingredient => {
      list.push(`${ingredient.amount} ${ingredient.name}`);
    });

    return `You need: ${list.join(', ')}`;
  };
};

module.exports = Recipe;
