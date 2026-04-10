import { recipesNumber } from "../utils/recipesNumber.js";
import { filterSorter } from "./filterSorter.js";

export function recipeSorter() {

    const recipes_list = window.globalData.recipes_list || [];
    const actual_search = (window.globalData?.actual_search || "").toLowerCase();
    const selected_appliances_list = window.globalData.selected_appliances_list || [];
    const selected_ingredients_list = window.globalData.selected_ingredients_list || [];
    const selected_ustensils_list = window.globalData.selected_ustensils_list || [];

    for (let i = 0; i < recipes_list.length; i++) {

        const recipe = recipes_list[i];
        const recipe_article = document.getElementById("recipe_" + recipe.id);

        const recipe_ingredients = [];
        for (let j = 0; j < recipe.ingredients.length; j++) {
            recipe_ingredients.push(recipe.ingredients[j].ingredient.toLowerCase());
        }

        const recipe_ustensils = [];
        for (let j = 0; j < recipe.ustensils.length; j++) {
            recipe_ustensils.push(recipe.ustensils[j].toLowerCase());
        }

        const recipe_appliance = recipe.appliance.toLowerCase();
        const recipe_name = recipe.name.toLowerCase();
        const recipe_description = recipe.description.toLowerCase();

        let as_search = actual_search === "";

        if (!as_search) {
            if (
                recipe_name.includes(actual_search) ||
                recipe_description.includes(actual_search) ||
                recipe_appliance.includes(actual_search)
            ) {
                as_search = true;
            } else {
                for (let j = 0; j < recipe_ingredients.length; j++) {
                    if (recipe_ingredients[j].includes(actual_search)) {
                        as_search = true;
                        break;
                    }
                }

                if (!as_search) {
                    for (let j = 0; j < recipe_ustensils.length; j++) {
                        if (recipe_ustensils[j].includes(actual_search)) {
                            as_search = true;
                            break;
                        }
                    }
                }
            }
        }

        let as_ingredients = true;

        if (selected_ingredients_list.length > 0) {
            for (let s = 0; s < selected_ingredients_list.length; s++) {
                const selected = selected_ingredients_list[s].toLowerCase();
                let found = false;

                for (let j = 0; j < recipe_ingredients.length; j++) {
                    if (recipe_ingredients[j].includes(selected)) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    as_ingredients = false;
                    break;
                }
            }
        }

        let as_ustensils = true;

        if (selected_ustensils_list.length > 0) {
            for (let s = 0; s < selected_ustensils_list.length; s++) {
                const selected = selected_ustensils_list[s].toLowerCase();
                let found = false;

                for (let j = 0; j < recipe_ustensils.length; j++) {
                    if (recipe_ustensils[j].includes(selected)) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    as_ustensils = false;
                    break;
                }
            }
        }

        let as_appliances = true;

        if (selected_appliances_list.length > 0) {
            as_appliances = false;

            for (let s = 0; s < selected_appliances_list.length; s++) {
                const selected = selected_appliances_list[s].toLowerCase();

                if (recipe_appliance.includes(selected)) {
                    as_appliances = true;
                    break;
                }
            }
        }

        if (recipe_article) {
            recipe_article.style.display =
                (as_search && as_ingredients && as_ustensils && as_appliances)
                    ? "block"
                    : "none";
        }
    }

    recipesNumber();
    filterSorter();
}