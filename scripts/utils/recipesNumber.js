export function recipesNumber() {

    const recipes = Array.from(document.getElementsByClassName("recipe_article"));

    const recipe_number = recipes
        .filter(recipe => window.getComputedStyle(recipe).display !== "none")
        .length;

    const recipe_number_text = document.getElementById("recipes_number");
    recipe_number_text.textContent = `${recipe_number} recettes`;

    const no_recipes_text = document.getElementById("no_recipes");

    no_recipes_text.style.display = recipe_number === 0 ? "block" : "none";
}