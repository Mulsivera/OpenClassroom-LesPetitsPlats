export function recipeSorter() {

    const recipes_list = window.globalData.recipes_list;
    const actual_search = window.globalData.actual_search;

    for (const recipe of recipes_list) {

        const recipe_article_id = "recipe_" + recipe.id;
        const recipe_article = document.getElementById(recipe_article_id);

        const recipe_ingredients_name_list = recipe.ingredients.map(ing => ing.ingredient);

        if (actual_search === "") {
            recipe_article.style.display = "block";
        } else {

            if (
                recipe.name.includes(actual_search) ||
                recipe.description.includes(actual_search) ||
                recipe.appliance.includes(actual_search) ||
                recipe_ingredients_name_list.some(name => name.includes(actual_search)) ||
                recipe.ustensils.some(ustensil => ustensil.includes(actual_search))
            ) {
                recipe_article.style.display = "block";
            } else {
                recipe_article.style.display = "none";
            }
        }
    }
}