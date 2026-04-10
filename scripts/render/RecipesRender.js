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

        for (let i = 0; i < this.recipeList.length; i++) {
            const recipe = this.recipeList[i];
            const recipeRender = new RecipeRender();
            recipeRender.render(this.container, recipe, TemplateClass);
        }

    }
}