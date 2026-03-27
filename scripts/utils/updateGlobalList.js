import { filterSorter } from "../sorter/filterSorter.js";
import { recipeSorter } from "../sorter/recipeSorter.js";

export function updateGlobalList(element, action, list) {

    const list_name = "selected_" + list + "_list";
    const selected_list = window.globalData[list_name];
    if (action == "add") {
        if (!selected_list.includes(element)) {
            selected_list.push(element);
        }
    }
    if (action === "remove") {
        const index = selected_list.indexOf(element);

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