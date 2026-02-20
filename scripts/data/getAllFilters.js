import { recipes } from "../../data/recipes.js";
import Filter from "../class/Filter.js";

export default function getAllFilters() {
    const ingredients_list = [];
    const appliance_list = [];
    const ustensils_list = [];
    for(const recipe of recipes) {
        // Get All Ingredients
        const recipe_ingredients = recipe.ingredients;
        recipe_ingredients.forEach(ingredient => {
            if (!ingredients_list.includes(ingredient.ingredient)) {
                ingredients_list.push(ingredient.ingredient);
            }
        });
        // Get All Appliances
        if(!appliance_list.includes(recipe.appliance))
        {
            appliance_list.push(recipe.appliance);
        }
        // Get All Usentils
        const recipe_ustensils = recipe.ustensils;
        recipe_ustensils.forEach(ustensil => {
            if (!ustensils_list.includes(ustensil)) {
                ustensils_list.push(ustensil);
            }
        });
    }
    ingredients_list.sort();
    ingredients_list.forEach(ingredient => {
        new Filter(ingredient,"ingredients");
    })
    appliance_list.sort();
    appliance_list.forEach(appliance => {
        new Filter(appliance,"appliances");
    })
    ustensils_list.sort();
    ustensils_list.forEach(ustensil => {
        new Filter(ustensil,"ustensils");
    })
    window.globalData = {
        ...window.globalData,
        ingredients_list,
        appliance_list,
        ustensils_list
    }
}
