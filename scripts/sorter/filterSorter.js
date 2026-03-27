export function filterSorter() {

    const recipes_list = window.globalData.recipes_list || [];
    const ingredient_list = window.globalData.ingredients_list || [];
    const ustensil_list = window.globalData.ustensils_list || [];
    const appliance_list = window.globalData.appliances_list || [];

    const ingredient_filter_search = (window.globalData?.ingredients_filter_search || "").toLowerCase();
    const appliance_filter_search = (window.globalData?.appliances_filter_search || "").toLowerCase();
    const ustensil_filter_search = (window.globalData?.ustensils_filter_search || "").toLowerCase();

    const selected_appliances_list = (window.globalData.selected_appliances_list || []).map(a => a.toLowerCase());
    const selected_ingredients_list = (window.globalData.selected_ingredients_list || []).map(i => i.toLowerCase());
    const selected_ustensils_list = (window.globalData.selected_ustensils_list || []).map(u => u.toLowerCase());

    const actual_search = (window.globalData?.actual_search || "").toLowerCase();

    const showed_ingredients_list = [];
    const showed_ustensils_list = [];
    const showed_appliance_list = [];

    recipes_list.forEach(recipe => {

        const recipe_ingredients = recipe.ingredients.map(i => i.ingredient.toLowerCase());
        const recipe_ustensils = recipe.ustensils.map(u => u.toLowerCase());
        const recipe_appliance = recipe.appliance.toLowerCase();
        const recipe_name = recipe.name.toLowerCase();
        const recipe_description = recipe.description.toLowerCase();

        const as_search =
            actual_search === "" ||
            recipe_name.includes(actual_search) ||
            recipe_description.includes(actual_search) ||
            recipe_appliance.includes(actual_search) ||
            recipe_ingredients.some(i => i.includes(actual_search)) ||
            recipe_ustensils.some(u => u.includes(actual_search));

        const as_ingredients =
            selected_ingredients_list.length === 0 ||
            selected_ingredients_list.every(sel =>
                recipe_ingredients.some(ri => ri.includes(sel))
            );

        const as_ustensils =
            selected_ustensils_list.length === 0 ||
            selected_ustensils_list.every(sel =>
                recipe_ustensils.some(ru => ru.includes(sel))
            );

        const as_appliances =
            selected_appliances_list.length === 0 ||
            selected_appliances_list.some(sel =>
                recipe_appliance.includes(sel)
            );

        if (as_search && as_ingredients && as_ustensils && as_appliances) {

            recipe_ingredients.forEach(ingredient => {
                if (!showed_ingredients_list.includes(ingredient)) {
                    showed_ingredients_list.push(ingredient);
                }
            });

            recipe_ustensils.forEach(ustensil => {
                if (!showed_ustensils_list.includes(ustensil)) {
                    showed_ustensils_list.push(ustensil);
                }
            });

            if (!showed_appliance_list.includes(recipe_appliance)) {
                showed_appliance_list.push(recipe_appliance);
            }
        }
    });

    ingredient_list.forEach((ingredient, index) => {
        const el = document.getElementById("ingredients_" + index + "_filter");

        if (el && !selected_ingredients_list.includes(ingredient.toLowerCase())) {

            const matchesRecipes = showed_ingredients_list.some(i =>
                i.includes(ingredient.toLowerCase())
            );

            const matchesSearch = ingredient.toLowerCase().includes(ingredient_filter_search);

            el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
        }
    });

    ustensil_list.forEach((ustensil, index) => {
        const el = document.getElementById("ustensils_" + index + "_filter");

        if (el && !selected_ustensils_list.includes(ustensil.toLowerCase())) {

            const matchesRecipes = showed_ustensils_list.some(u =>
                u.includes(ustensil.toLowerCase())
            );

            const matchesSearch = ustensil.toLowerCase().includes(ustensil_filter_search);

            el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
        }
    });

    appliance_list.forEach((appliance, index) => {
        const el = document.getElementById("appliances_" + index + "_filter");

        if (el && !selected_appliances_list.includes(appliance.toLowerCase())) {

            const matchesRecipes = showed_appliance_list.some(a =>
                a.includes(appliance.toLowerCase())
            );

            const matchesSearch = appliance.toLowerCase().includes(appliance_filter_search);

            el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
        }
    });

}