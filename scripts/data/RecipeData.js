import { recipes } from "../../data/recipes.js";

export default class RecipeData {

    getAll() {

        const recipesList = recipes;

        const recipes_list = recipes.map(recipe => recipe);
        const selected_recipes_list = recipes.map(recipe => recipe.id);

        window.globalData = {
            ...window.globalData,
            selected_recipes_list,
            recipes_list
        };

        return recipesList;
    }

    getOne(recipe_id) {

        const recipe = recipes.find(r => r.id === recipe_id);

        return [recipe];
    }
}