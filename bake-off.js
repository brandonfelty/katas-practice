//function that helps determine which recipes match the ingredients that both bakeries have in stock.

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // want to define a variable that returns the bestRecipe
  const bestRecipe = "";

  function ingredientCheck(bakery) {
    const availableIngredients = [];
    for (let i = 0; i < bakery.length; i++) {
      for (let j = 0; j < recipes.length; j++) {
        for (let x = 0; x < recipes[j].ingredients.length; x++) {
          if (recipes[j].ingredients[x] === bakery[i]) {
            availableIngredients.push(bakeryRecipeObject);
          }
        }
      }
    }
    return availableIngredients;
  }
  
  for (i = 0; i < recipes.length; i++) {
    for (k = 0; k < availableIngredients(bakeryA).length; k++) {
      for (j = 0); j < availableIngredients(bakeryB).length; k++) {

      }
    }
  }

  return bestRecipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));