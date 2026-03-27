import RecipeRender from "./RecipeRender.js";

export default class RecipesRender {

    constructor(containerId, recipeList) {

        this.container = document.getElementById(containerId);
        this.recipeList = recipeList;

    }

    clear() {
        this.container.innerHTML = "";
    }

    render(TemplateClass) {

        this.clear();

        this.recipeList.forEach(recipe => {
            const recipeRender = new RecipeRender();
            recipeRender.render(this.container, recipe, TemplateClass);
        });

    }
}