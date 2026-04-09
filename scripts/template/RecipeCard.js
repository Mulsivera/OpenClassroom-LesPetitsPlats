import { createDomElement } from "../utils/createDomElement.js";
import defineIngredientQuantityText from "../utils/defineIngredientQuantityText.js";

export class RecipeCard {

    constructor(recipe) {

        this.id = recipe.id;
        this.image = recipe.image;
        this.name = recipe.name;
        this.serving = recipe.serving;
        this.ingredients_list = recipe.ingredients;
        this.time = recipe.time;
        this.description = recipe.description;
        this.appliance = recipe.appliance;
        this.ustensils_list = recipe.ustensils;
        this.image_link = "/images/recipes/" + this.image;

    }

    create() {

        // ----- Main article -----
        const recipe_article = createDomElement("article", "recipe_article", "recipe_" + this.id, "");

        // ----- Image box -----
        const image_box = createDomElement("div", "recipe_image", "", "");
        image_box.style.backgroundImage = `url("${this.image_link}")`;

        const time_text = createDomElement("p", "recipe_image_time", "", this.time + "min");
        image_box.append(time_text);
        recipe_article.append(image_box);

        // ----- Info box -----
        const infos_box = createDomElement("div", "recipe_infos", "", "");
        recipe_article.append(infos_box);

        // Recipe title
        const recipe_title = createDomElement("p", "recipe_title", "", this.name);
        infos_box.append(recipe_title);

        // Recipe description
        const recipe_description_title = createDomElement("p", "recipe_description-title", "", "RECETTE");
        const recipe_description = createDomElement("p", "recipe_description", "", this.description);
        infos_box.append(recipe_description_title);
        infos_box.append(recipe_description);

        // ----- Ingredients -----
        const recipe_ingredients_title = createDomElement("p", "recipe_ingredients-title", "", "INGRÉDIENTS");
        infos_box.append(recipe_ingredients_title);

        const recipe_ingredients_box = createDomElement("div", "recipe_ingredients-box", "", "");
        infos_box.append(recipe_ingredients_box);

        this.ingredients_list.forEach(ingredient => {
            const ingredient_box = createDomElement("div", "recipe_ingredient-box", "", "");

            const ingredient_name = createDomElement("p", "recipe_ingredient-name", "", ingredient.ingredient);

            const ingredient_quantity_text = defineIngredientQuantityText(ingredient.quantity, ingredient.unit);
            const ingredient_quantity = createDomElement("p", "recipe_ingredient-quantity", "", ingredient_quantity_text);

            ingredient_box.append(ingredient_name);
            ingredient_box.append(ingredient_quantity);
            recipe_ingredients_box.append(ingredient_box);
        });

        return recipe_article;

    }

}