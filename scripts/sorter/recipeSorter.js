import { recipesNumber } from "../utils/recipesNumber.js";
import { filterSorter } from "./filterSorter.js";

export function recipeSorter() {

    const recipes_list = window.globalData.recipes_list || [];
    const actual_search = (window.globalData?.actual_search || "").toLowerCase();
    const selected_appliances_list = (window.globalData.selected_appliances_list || []).map(a => a.toLowerCase());
    const selected_ingredients_list = (window.globalData.selected_ingredients_list || []).map(i => i.toLowerCase());
    const selected_ustensils_list = (window.globalData.selected_ustensils_list || []).map(u => u.toLowerCase());

    recipes_list.forEach(recipe => {

        const recipe_article = document.getElementById("recipe_" + recipe.id);

        const recipe_ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const recipe_ustensils = recipe.ustensils.map(u => u.toLowerCase());
        const recipe_appliance = recipe.appliance.toLowerCase();
        const recipe_name = recipe.name.toLowerCase();
        const recipe_description = recipe.description.toLowerCase();

        const as_search =
            actual_search === "" ||
            recipe_name.includes(actual_search) ||
            recipe_description.includes(actual_search) ||
            recipe_appliance.includes(actual_search) ||
            recipe_ingredients.some(ingredient => ingredient.includes(actual_search)) ||
            recipe_ustensils.some(ustensil => ustensil.includes(actual_search));

        const as_ingredients =
            selected_ingredients_list.length === 0 ||
            selected_ingredients_list.every(selected =>
                recipe_ingredients.some(recipeIng =>
                    recipeIng.includes(selected)
                )
            );

        const as_ustensils =
            selected_ustensils_list.length === 0 ||
            selected_ustensils_list.every(selected =>
                recipe_ustensils.some(recipeUst =>
                    recipeUst.includes(selected)
                )
            );

        const as_appliances =
            selected_appliances_list.length === 0 ||
            selected_appliances_list.some(selected =>
                recipe_appliance.includes(selected)
            );

        recipe_article.style.display = (as_search && as_ingredients && as_ustensils && as_appliances)
            ? "block"
            : "none";
    });

    recipesNumber();
    filterSorter();
}