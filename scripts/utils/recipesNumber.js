export function recipesNumber() {

    let recipe_number = 0;
    const recipes = document.getElementsByClassName("recipe_article");

    for (let i = 0; i < recipes.length; i++) {

        const display = window.getComputedStyle(recipes[i]).display;

        if (display !== "none") {
            recipe_number++;
        }
    }

    const recipe_number_text = document.getElementById("recipes_number");
    recipe_number_text.textContent = recipe_number + " recettes";

    const no_recipes_text = document.getElementById("no_recipes");

    if (recipe_number === 0) {
        no_recipes_text.style.display = "block";
    } else {
        no_recipes_text.style.display = "none";
    }
}