const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
    instructions: [
      "boil the spaghetti for 9 minutes",
      "season the ground beef with salt and pepper",
      "cut 2 onions and put them in the blender"
    ]
  },
  {
    name: "Chicken Stir-Fry",
    ingredients: ["chicken breast", "bell pepper", "broccoli", "soy sauce", "ginger", "garlic"]
  },
  { name: "Vegetable Soup", ingredients: ["carrot", "celery", "onion", "potato", "vegetable broth"] }
];

function filterRecipes() {
  const ingredientInput = document.getElementById("ingredientInput").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(ingredientInput))
  );

  displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");
    recipeElement.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    recipeList.appendChild(recipeElement);
  });
}
