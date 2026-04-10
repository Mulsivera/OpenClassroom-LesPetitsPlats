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

    const validRecipes = recipes_list.filter(recipe => {

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
                recipe_ingredients.some(r => r.includes(sel.toLowerCase()))
            );

        const as_ustensils =
            selected_ustensils_list.length === 0 ||
            selected_ustensils_list.every(sel =>
                recipe_ustensils.some(r => r.includes(sel.toLowerCase()))
            );

        const as_appliances =
            selected_appliances_list.length === 0 ||
            selected_appliances_list.some(sel =>
                recipe_appliance.includes(sel.toLowerCase())
            );

        return as_search && as_ingredients && as_ustensils && as_appliances;
    });

    const showed_ingredients_list = [
        ...new Set(
            validRecipes.flatMap(r =>
                r.ingredients.map(i => i.ingredient.toLowerCase())
            )
        )
    ];

    const showed_ustensils_list = [
        ...new Set(
            validRecipes.flatMap(r =>
                r.ustensils.map(u => u.toLowerCase())
            )
        )
    ];

    const showed_appliance_list = [
        ...new Set(
            validRecipes.map(r => r.appliance.toLowerCase())
        )
    ];

    const updateDisplay = (list, prefix, selectedList, search, shownList) => {

        list.forEach((item, index) => {

            const el = document.getElementById(`${prefix}_${index}_filter`);
            if (!el) return;

            const isSelected = selectedList
                .map(s => s.toLowerCase())
                .includes(item.toLowerCase());

            if (isSelected) return;

            const matchesRecipes = shownList
                .some(x => x.includes(item.toLowerCase()));

            const matchesSearch = item
                .toLowerCase()
                .includes(search);

            el.style.display =
                matchesRecipes && matchesSearch ? "block" : "none";
        });
    };

    updateDisplay(
        ingredient_list,
        "ingredients",
        selected_ingredients_list,
        ingredient_filter_search,
        showed_ingredients_list
    );

    updateDisplay(
        ustensil_list,
        "ustensils",
        selected_ustensils_list,
        ustensil_filter_search,
        showed_ustensils_list
    );

    updateDisplay(
        appliance_list,
        "appliances",
        selected_appliances_list,
        appliance_filter_search,
        showed_appliance_list
    );
}