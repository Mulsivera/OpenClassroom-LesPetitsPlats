export function filterSorter() {

    const recipes_list = window.globalData.recipes_list || [];
    const ingredient_list = window.globalData.ingredients_list || [];
    const ustensil_list = window.globalData.ustensils_list || [];
    const appliance_list = window.globalData.appliances_list || [];

    const ingredient_filter_search = (window.globalData?.ingredients_filter_search || "").toLowerCase();
    const appliance_filter_search = (window.globalData?.appliances_filter_search || "").toLowerCase();
    const ustensil_filter_search = (window.globalData?.ustensils_filter_search || "").toLowerCase();

    const selected_appliances_list = window.globalData.selected_appliances_list || [];
    const selected_ingredients_list = window.globalData.selected_ingredients_list || [];
    const selected_ustensils_list = window.globalData.selected_ustensils_list || [];

    const actual_search = (window.globalData?.actual_search || "").toLowerCase();

    const showed_ingredients_list = [];
    const showed_ustensils_list = [];
    const showed_appliance_list = [];

    for (let i = 0; i < recipes_list.length; i++) {

        const recipe = recipes_list[i];

        const recipe_ingredients = [];
        for (let j = 0; j < recipe.ingredients.length; j++) {
            recipe_ingredients.push(recipe.ingredients[j].ingredient.toLowerCase());
        }

        const recipe_ustensils = [];
        for (let j = 0; j < recipe.ustensils.length; j++) {
            recipe_ustensils.push(recipe.ustensils[j].toLowerCase());
        }

        const recipe_appliance = recipe.appliance.toLowerCase();
        const recipe_name = recipe.name.toLowerCase();
        const recipe_description = recipe.description.toLowerCase();

        let as_search = actual_search === "";

        if (!as_search) {
            if (
                recipe_name.includes(actual_search) ||
                recipe_description.includes(actual_search) ||
                recipe_appliance.includes(actual_search)
            ) {
                as_search = true;
            } else {
                for (let j = 0; j < recipe_ingredients.length; j++) {
                    if (recipe_ingredients[j].includes(actual_search)) {
                        as_search = true;
                        break;
                    }
                }

                if (!as_search) {
                    for (let j = 0; j < recipe_ustensils.length; j++) {
                        if (recipe_ustensils[j].includes(actual_search)) {
                            as_search = true;
                            break;
                        }
                    }
                }
            }
        }

        let as_ingredients = true;

        if (selected_ingredients_list.length > 0) {
            for (let s = 0; s < selected_ingredients_list.length; s++) {
                const sel = selected_ingredients_list[s].toLowerCase();
                let found = false;

                for (let j = 0; j < recipe_ingredients.length; j++) {
                    if (recipe_ingredients[j].includes(sel)) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    as_ingredients = false;
                    break;
                }
            }
        }

        let as_ustensils = true;

        if (selected_ustensils_list.length > 0) {
            for (let s = 0; s < selected_ustensils_list.length; s++) {
                const sel = selected_ustensils_list[s].toLowerCase();
                let found = false;

                for (let j = 0; j < recipe_ustensils.length; j++) {
                    if (recipe_ustensils[j].includes(sel)) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    as_ustensils = false;
                    break;
                }
            }
        }

        let as_appliances = true;

        if (selected_appliances_list.length > 0) {
            as_appliances = false;

            for (let s = 0; s < selected_appliances_list.length; s++) {
                const sel = selected_appliances_list[s].toLowerCase();

                if (recipe_appliance.includes(sel)) {
                    as_appliances = true;
                    break;
                }
            }
        }

        if (as_search && as_ingredients && as_ustensils && as_appliances) {

            for (let j = 0; j < recipe_ingredients.length; j++) {
                const ingredient = recipe_ingredients[j];

                let exists = false;
                for (let k = 0; k < showed_ingredients_list.length; k++) {
                    if (showed_ingredients_list[k] === ingredient) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    showed_ingredients_list.push(ingredient);
                }
            }

            for (let j = 0; j < recipe_ustensils.length; j++) {
                const ustensil = recipe_ustensils[j];

                let exists = false;
                for (let k = 0; k < showed_ustensils_list.length; k++) {
                    if (showed_ustensils_list[k] === ustensil) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    showed_ustensils_list.push(ustensil);
                }
            }

            let existsAppliance = false;

            for (let k = 0; k < showed_appliance_list.length; k++) {
                if (showed_appliance_list[k] === recipe_appliance) {
                    existsAppliance = true;
                    break;
                }
            }

            if (!existsAppliance) {
                showed_appliance_list.push(recipe_appliance);
            }
        }
    }

    for (let i = 0; i < ingredient_list.length; i++) {

        const ingredient = ingredient_list[i];
        const el = document.getElementById("ingredients_" + i + "_filter");

        if (el) {

            let isSelected = false;

            for (let j = 0; j < selected_ingredients_list.length; j++) {
                if (selected_ingredients_list[j].toLowerCase() === ingredient.toLowerCase()) {
                    isSelected = true;
                    break;
                }
            }

            if (!isSelected) {

                let matchesRecipes = false;

                for (let j = 0; j < showed_ingredients_list.length; j++) {
                    if (showed_ingredients_list[j].includes(ingredient.toLowerCase())) {
                        matchesRecipes = true;
                        break;
                    }
                }

                const matchesSearch = ingredient.toLowerCase().includes(ingredient_filter_search);

                el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
            }
        }
    }

    for (let i = 0; i < ustensil_list.length; i++) {

        const ustensil = ustensil_list[i];
        const el = document.getElementById("ustensils_" + i + "_filter");

        if (el) {

            let isSelected = false;

            for (let j = 0; j < selected_ustensils_list.length; j++) {
                if (selected_ustensils_list[j].toLowerCase() === ustensil.toLowerCase()) {
                    isSelected = true;
                    break;
                }
            }

            if (!isSelected) {

                let matchesRecipes = false;

                for (let j = 0; j < showed_ustensils_list.length; j++) {
                    if (showed_ustensils_list[j].includes(ustensil.toLowerCase())) {
                        matchesRecipes = true;
                        break;
                    }
                }

                const matchesSearch = ustensil.toLowerCase().includes(ustensil_filter_search);

                el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
            }
        }
    }

    for (let i = 0; i < appliance_list.length; i++) {

        const appliance = appliance_list[i];
        const el = document.getElementById("appliances_" + i + "_filter");

        if (el) {

            let isSelected = false;

            for (let j = 0; j < selected_appliances_list.length; j++) {
                if (selected_appliances_list[j].toLowerCase() === appliance.toLowerCase()) {
                    isSelected = true;
                    break;
                }
            }

            if (!isSelected) {

                let matchesRecipes = false;

                for (let j = 0; j < showed_appliance_list.length; j++) {
                    if (showed_appliance_list[j].includes(appliance.toLowerCase())) {
                        matchesRecipes = true;
                        break;
                    }
                }

                const matchesSearch = appliance.toLowerCase().includes(appliance_filter_search);

                el.style.display = (matchesRecipes && matchesSearch) ? "block" : "none";
            }
        }
    }
}