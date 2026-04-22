import { recipesNumber } from "../utils/recipesNumber.js";
import { filterSorter } from "./filterSorter.js";

export function recipeSorter() {

    const recipes_list = window.globalData.recipes_list || [];
    const actual_search = (window.globalData?.actual_search || "").toLowerCase();
    const selected_appliances_list = window.globalData.selected_appliances_list || [];
    const selected_ingredients_list = window.globalData.selected_ingredients_list || [];
    const selected_ustensils_list = window.globalData.selected_ustensils_list || [];

    recipes_list.forEach(recipe => {

        const recipe_article = document.getElementById("recipe_" + recipe.id);

        const recipe_ingredients = [];
        recipe.ingredients.forEach(i => {
            recipe_ingredients.push(i.ingredient.toLowerCase());
        });

        const recipe_ustensils = [];
        recipe.ustensils.forEach(u => {
            recipe_ustensils.push(u.toLowerCase());
        });

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
                recipe_ingredients.forEach(i => {
                    if (i.includes(actual_search)) {
                        as_search = true;
                    }
                });

                if (!as_search) {
                    recipe_ustensils.forEach(u => {
                        if (u.includes(actual_search)) {
                            as_search = true;
                        }
                    });
                }
            }
        }

        let as_ingredients = true;

        if (selected_ingredients_list.length > 0) {
            selected_ingredients_list.forEach(s => {
                const selected = s.toLowerCase();
                let found = false;

                recipe_ingredients.forEach(r => {
                    if (r.includes(selected)) {
                        found = true;
                    }
                });

                if (!found) {
                    as_ingredients = false;
                }
            });
        }

        let as_ustensils = true;

        if (selected_ustensils_list.length > 0) {
            selected_ustensils_list.forEach(s => {
                const selected = s.toLowerCase();
                let found = false;

                recipe_ustensils.forEach(r => {
                    if (r.includes(selected)) {
                        found = true;
                    }
                });

                if (!found) {
                    as_ustensils = false;
                }
            });
        }

        let as_appliances = true;

        if (selected_appliances_list.length > 0) {
            as_appliances = false;

            selected_appliances_list.forEach(s => {
                const selected = s.toLowerCase();

                if (recipe_appliance.includes(selected)) {
                    as_appliances = true;
                }
            });
        }

        if (recipe_article) {
            recipe_article.style.display =
                (as_search && as_ingredients && as_ustensils && as_appliances)
                    ? "block"
                    : "none";
        }
    });

    recipesNumber();
    filterSorter();
}