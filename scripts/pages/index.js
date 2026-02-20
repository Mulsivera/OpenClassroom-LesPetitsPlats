import Category from "../class/Category.js";
import Searchbar from "../class/Searbar.js";
import getAllFilters from "../data/getAllFilters.js";
import RecipeData from "../data/RecipeData.js";
import RecipesRender from "../render/RecipesRender.js";
import { RecipeCard } from "../template/RecipeCard.js";

async function init() {

    const selected_ingredients_list = [];
    const selected_appliances_list = [];
    const selected_ustensils_list = [];
    const actualsearch = "";

    window.globalData = {
        selected_ingredients_list,
        selected_appliances_list,
        selected_ustensils_list,
        actualsearch
    };

    const mainSearchbar = new Searchbar("mainSearchbar", "mainEmptyButton");
    const ingredientsSearchbar = new Searchbar("ingredientsSearchbar", "ingredientsEmptyButton");
    const appliancesSearchbar = new Searchbar("appliancesSearchbar", "appliancesEmptyButton");
    const ustensilsSearchbar = new Searchbar("ustensilsSearchbar", "ustensilsEmptyButton");

    const ingredientsCategroy = new Category("ingredients");
    const appliancesCategroy = new Category("appliances");
    const ustensilsCategroy = new Category("ustensils");

    const filters = new getAllFilters();

    const recipesData = new RecipeData().getAll();
    const recipesRender = new RecipesRender("recipes_list_div",recipesData).render(RecipeCard);

}

init()