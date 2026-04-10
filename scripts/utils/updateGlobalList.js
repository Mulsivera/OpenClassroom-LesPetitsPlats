import { filterSorter } from "../sorter/filterSorter.js";
import { recipeSorter } from "../sorter/recipeSorter.js";

export function updateGlobalList(element, action, list) {

    const list_name = `selected_${list}_list`;
    const selected_list = window.globalData[list_name] || [];

    const normalized = (v) => v.toLowerCase();

    if (action === "add") {

        const exists = selected_list
            .map(normalized)
            .includes(normalized(element));

        if (!exists) {
            selected_list.push(element);
        }
    }

    if (action === "remove") {

        const index = selected_list
            .map(normalized)
            .indexOf(normalized(element));

        if (index !== -1) {
            selected_list.splice(index, 1);
        }
    }

    window.globalData = {
        ...window.globalData,
        [list_name]: selected_list
    };

    recipeSorter();
    filterSorter();
}