const Ingredient = require('./ingredient.js');
var Recipe = require('./recipe.js');

class Chef {
  constructor (name, recipes) {
    this.name = name;
    this.recipeBox = recipes;
  };

  tryRecipe = (recipeName, rating) => {
    this.recipeBox.forEach(recipe => {
      if (recipe.name === recipeName) {
        recipe.rateRecipe(rating);
      };
    });
  };

  addRecipe = (recipeName, ingredients) => {
    const recipe = new Recipe({ name: recipeName, ingredients: ingredients });

    this.recipeBox.push(recipe);
  };

  changeRecipe = (recipeName, item, amount) => {
    this.recipeBox.forEach(recipe => {
      if (recipe.name === recipeName) {
        recipe.ingredients.forEach(ingredient => {
          if (ingredient.name === item) {
            ingredient.changeAmount(amount);
          }
        });
      };
    });
  };
};

module.exports = Chef;
