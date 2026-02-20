import { recipes } from "../../data/recipes.js";
export default class RecipeData {

    getAll() {

        const recipesList = recipes;
        const selected_recipes_list = [];
        const recipes_list = [];
        for (const recipe of recipes) {
            selected_recipes_list.push(recipe.id);
            recipes_list.push(recipe);
        }
        window.globalData = {
            ...window.globalData,
            selected_recipes_list,
            recipes_list
        }
        return recipesList;

    }

    getOne(recipe_id) {

        const recipe = recipes.find(r => r.id === recipe_id);
        return [recipe]

    }

}