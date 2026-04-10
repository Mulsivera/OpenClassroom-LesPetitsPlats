import { recipes } from "../../data/recipes.js";
import Filter from "../class/Filter.js";

export default function getAllFilters() {

    const ingredients_list = [];
    const appliances_list = [];
    const ustensils_list = [];

    for (let i = 0; i < recipes.length; i++) {

        const recipe = recipes[i];

        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j].ingredient;

            let exists = false;

            for (let k = 0; k < ingredients_list.length; k++) {
                if (ingredients_list[k] === ingredient) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                ingredients_list.push(ingredient);
            }
        }

        let applianceExists = false;

        for (let k = 0; k < appliances_list.length; k++) {
            if (appliances_list[k] === recipe.appliance) {
                applianceExists = true;
                break;
            }
        }

        if (!applianceExists) {
            appliances_list.push(recipe.appliance);
        }

        for (let j = 0; j < recipe.ustensils.length; j++) {
            const ustensil = recipe.ustensils[j];

            let exists = false;

            for (let k = 0; k < ustensils_list.length; k++) {
                if (ustensils_list[k] === ustensil) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                ustensils_list.push(ustensil);
            }
        }
    }

    for (let i = 0; i < ingredients_list.length; i++) {
        ingredients_list.sort();
        new Filter(ingredients_list[i], "ingredients", i);
    }

    for (let i = 0; i < appliances_list.length; i++) {
        appliances_list.sort();
        new Filter(appliances_list[i], "appliances", i);
    }

    for (let i = 0; i < ustensils_list.length; i++) {
        ustensils_list.sort();
        new Filter(ustensils_list[i], "ustensils", i);
    }

    window.globalData = {
        ...window.globalData,
        ingredients_list,
        appliances_list,
        ustensils_list
    };
}