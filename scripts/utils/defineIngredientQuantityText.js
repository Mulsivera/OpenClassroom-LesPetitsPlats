import { measures } from "../../data/unit.js";

export default function defineIngredientQuantityText(quantity,unit) {
    if (unit) {
        if (measures.includes((unit).toLowerCase())) {
            const text= quantity + unit;
        }
        else {
            const text = quantity + " " + unit;
        }
    }
    else {
        const text= quantity;
    }
}