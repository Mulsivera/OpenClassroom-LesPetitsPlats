import { measures } from "../../data/unit.js";

export default function defineIngredientQuantityText(quantity,unit) {
    var ingredientText = "";
    if (unit) {
        if (measures.includes((unit).toLowerCase())) {
            ingredientText= quantity + unit;
        }
        else {
            ingredientText = quantity + " " + unit;
        }
    }
    else {
        ingredientText= quantity;
    }
    return ingredientText;
}