function cakes(recipe, available) {
  let numPos = 0;
  for (const [key, value] of recipe.entries()){
    console.log(`${key} and ${value}`);
  }
  return numPos;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe, available);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
cakes(recipe, available);