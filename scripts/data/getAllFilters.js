import { recipes } from "../../data/recipes.js";
import Filter from "../class/Filter.js";

export default function getAllFilters() {
    const ingredients_list = [];
    const appliances_list = [];
    const ustensils_list = [];

    recipes.forEach(recipe => {

        // Get All Ingredients
        recipe.ingredients.forEach(ingredient => {
            if (!ingredients_list.includes(ingredient.ingredient)) {
                ingredients_list.push(ingredient.ingredient);
            }
        });

        // Get All Appliances
        if (!appliances_list.includes(recipe.appliance)) {
            appliances_list.push(recipe.appliance);
        }

        // Get All Ustensils
        recipe.ustensils.forEach(ustensil => {
            if (!ustensils_list.includes(ustensil)) {
                ustensils_list.push(ustensil);
            }
        });

    });

    ingredients_list.sort();
    ingredients_list.forEach((ingredient, index) => {
        new Filter(ingredient, "ingredients", index);
    });

    appliances_list.sort();
    appliances_list.forEach((appliance, index) => {
        new Filter(appliance, "appliances", index);
    });

    ustensils_list.sort();
    ustensils_list.forEach((ustensil, index) => {
        new Filter(ustensil, "ustensils", index);
    });

    window.globalData = {
        ...window.globalData,
        ingredients_list,
        appliances_list,
        ustensils_list
    };
}