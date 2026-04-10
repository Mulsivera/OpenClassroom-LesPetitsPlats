import { recipes } from "../../data/recipes.js";

export default class RecipeData {

    getAll() {

        const recipesList = recipes;
        const selected_recipes_list = [];
        const recipes_list = [];

        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            selected_recipes_list.push(recipe.id);
            recipes_list.push(recipe);
        }

        window.globalData = {
            ...window.globalData,
            selected_recipes_list,
            recipes_list
        };

        return recipesList;
    }

    getOne(recipe_id) {

        let recipe = null;

        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id === recipe_id) {
                recipe = recipes[i];
                break;
            }
        }

        return [recipe];

    }

}