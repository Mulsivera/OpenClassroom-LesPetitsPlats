import { recipes } from "../../data/recipes.js";
import Filter from "../class/Filter.js";

export default function getAllFilters() {

    const ingredients_list = [
        ...new Set(
            recipes.flatMap(r =>
                r.ingredients.map(i => i.ingredient)
            )
        )
    ].sort();

    const appliances_list = [
        ...new Set(
            recipes.map(r => r.appliance)
        )
    ].sort();

    const ustensils_list = [
        ...new Set(
            recipes.flatMap(r =>
                r.ustensils
            )
        )
    ].sort();

    ingredients_list.forEach((ingredient, index) => {
        new Filter(ingredient, "ingredients", index);
    });

    appliances_list.forEach((appliance, index) => {
        new Filter(appliance, "appliances", index);
    });

    ustensils_list.forEach((ustensil, index) => {
        new Filter(ustensil, "ustensils", index);
    });

    window.globalData = {
        ...window.globalData,
        ingredients_list,
        appliances_list,
        ustensils_list
    };
}